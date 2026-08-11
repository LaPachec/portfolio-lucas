import { promises as fs } from "node:fs";
import path from "node:path";

const resumeConfig = {
  pt: {
    downloadName: "Lucas_Pacheco_Curriculo.pdf",
    candidates: ["Lucas_Pacheco_Curriculo.pdf"],
  },
  en: {
    downloadName: "Lucas_Pacheco_Resume.pdf",
    candidates: ["Lucas_Pacheco_Resume.pdf"],
  },
} as const;

type ResumeLocale = keyof typeof resumeConfig;

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

  return null;
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
