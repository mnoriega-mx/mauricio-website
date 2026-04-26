import { Inter, Playfair_Display } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  preload: true,
  variable: "--font-inter",
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "optional",
  preload: true,
  variable: "--font-playfair",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Mauricio Noriega — Computer Science & Data Analytics",
  description:
    "Computer Science student from Tec de Monterrey completing a double degree in International Management and Data Analytics at Rennes School of Business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
