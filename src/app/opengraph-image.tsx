import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#E0E0E0",
          color: "#2B2B2B",
          padding: "72px 78px",
          border: "18px solid #2B2B2B",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.24em",
            color: "#565656",
          }}
        >
          <span>Portfólio</span>
          <span>Full Stack</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.06em" }}>
            Lucas Araújo
          </div>
          <div style={{ fontSize: 40, color: "#565656" }}>
            Desenvolvedor Full Stack
          </div>
          <div
            style={{
              maxWidth: 850,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#565656",
            }}
          >
            Interfaces, APIs, dados e regras de negócio em projetos web com contexto real.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            color: "#848484",
          }}
        >
          <span style={{ width: 64, height: 2, background: "#2B2B2B" }} />
          <span>Next.js · React · TypeScript · Node.js</span>
        </div>
      </div>
    ),
    size,
  );
}
