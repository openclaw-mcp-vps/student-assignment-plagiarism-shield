import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment Shield — Protect Your Work from AI Detection False Positives",
  description: "Analyze your student writing to avoid AI detection false positives while preserving your originality. Real-time feedback for college students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ceb5466c-d430-4cc3-ae49-8e3d1639d602"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
