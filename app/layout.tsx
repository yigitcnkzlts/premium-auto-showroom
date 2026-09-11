import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D Cars | Otomobilin Yeni Deneyimi",
  description: "İstanbul'da seçkin otomobiller, şeffaf ekspertiz ve güvenli araç alım-satım deneyimi.",
  metadataBase: new URL("https://dcars.tr"),
  openGraph: { title: "D Cars | Otomobilin Yeni Deneyimi", description: "Seçkin otomobilleri keşfedin, aracınızın değerini öğrenin.", locale: "tr_TR", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
