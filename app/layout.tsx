import type { Metadata } from "next";
import "./globals.css";

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
      <body style={{ fontFamily: "Pretendard" }}>{children}</body>
    </html>
  );
}
