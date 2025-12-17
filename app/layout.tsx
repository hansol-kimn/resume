import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/scrollToTop";

export const metadata: Metadata = {
  title: "Kimhansol resume",
  description: "frontend developer kimhansol's resume page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "Pretendard" }}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
