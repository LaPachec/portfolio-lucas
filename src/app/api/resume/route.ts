import { promises as fs } from "node:fs";
import path from "node:path";

const resumeConfig = {
  pt: {
    downloadName: "curriculo-lucas-araujo.pdf",
    candidates: [
      "curriculo-lucas-araujo.pdf",
      "Cv Lucas BAsico P&B.pdf",
      "CV Lucas Basico P&B.pdf",
      "Cv Lucas Básico P&B.pdf",
    ],
    hints: ["curriculo", "currículo", "portugues", "português", "basico", "básico"],
  },
  en: {
    downloadName: "resume-lucas-araujo.pdf",
    candidates: [
      "resume-lucas-araujo.pdf",
      "cv-lucas-araujo-en.pdf",
      "CV Lucas English.pdf",
      "Cv Lucas English.pdf",
    ],
    hints: ["resume", "english", "ingles", "inglês", "-en"],
  },
} as const;

type ResumeLocale = keyof typeof resumeConfig;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

async function findResumeFile(locale: ResumeLocale) {
  const publicDir = path.join(process.cwd(), "public");
  const config = resumeConfig[locale];

  for (const candidate of config.candidates) {
    const filePath = path.join(publicDir, candidate);

    try {
      await fs.access(filePath);
      return filePath;
    } catch {
      // Try the next known filename.
    }
  }

  const files = await fs.readdir(publicDir);
  const pdfFiles = files.filter((file) => file.toLowerCase().endsWith(".pdf"));
  const hints = config.hints.map(normalize);

  return (
    pdfFiles
      .map((file) => ({ file, normalized: normalize(file) }))
      .find(({ normalized }) => hints.some((hint) => normalized.includes(hint)))
      ?.file
      ?.replace(/^/, `${publicDir}${path.sep}`) ?? null
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get("lang");
  const locale: ResumeLocale = requestedLocale === "en" ? "en" : "pt";
  const config = resumeConfig[locale];

  let filePath: string | null = null;

  try {
    filePath = await findResumeFile(locale);
  } catch {
    filePath = null;
  }

  if (!filePath) {
    return Response.json(
      {
        error: "Resume PDF not found",
        expected: config.candidates,
      },
      { status: 404 },
    );
  }

  const pdf = await fs.readFile(filePath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${config.downloadName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
