import "./globals.css";

export const metadata = {
  title: {
    default: "Muhammad Asad — Product Engineer",
    template: "%s — Muhammad Asad",
  },
  description: "Muhammad Asad is a software engineer who builds reliable products from idea to launch.",
  openGraph: {
    title: "Muhammad Asad — Product Engineer",
    description: "Software engineer building reliable products from idea to launch.",
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
