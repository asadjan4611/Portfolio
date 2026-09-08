import "./globals.css";

export const metadata = {
  title: {
    default: "Muhammad Asad — Product & Systems Engineer",
    template: "%s — Muhammad Asad",
  },
  description: "Product and systems engineer working across Kubernetes infrastructure, applied AI, open source, web, and mobile.",
  openGraph: {
    title: "Muhammad Asad — Product & Systems Engineer",
    description: "Engineering reliable products and infrastructure from problem framing to production.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f4f3ee",
};

export default function RootLayout({ children }) {
  const themeScript = `
    try {
      const saved = localStorage.getItem("portfolio-theme");
      const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = saved || preferred;
    } catch (_) {
      document.documentElement.dataset.theme = "light";
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
