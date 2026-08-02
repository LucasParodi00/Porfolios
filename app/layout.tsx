import type { Metadata, Viewport } from "next"; // Importa Viewport
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/feature/navbar/components/Navbar";
import { ThemeProvider } from "@/feature/navbar/provider/ThemeProvider";
import { Footer } from "@/components/common/Footer";

const baseUrl = "https://parodilucas.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Parodi Lucas Ivan | Desarrollador de Software",
    template: "%s | Parodi Lucas",
  },
  alternates: {
    canonical: "./",
  },
  description:
    "Portfolio de Parodi Lucas Ivan, Licenciado en Sistemas de Información y Desarrollador de Software Full Stack especializado en soluciones web, expedientes digitales y mejora de procesos.",
  keywords: [
    "Desarrollador Web",
    "Full Stack",
    "Sistemas",
    "Licenciado en Sistemas de Información",
    "Freelance",
    "unne",
    "Analista Programador",
    "Desarrollador Web Full Stack",
    "Licenciado en Sistemas",
    "Argentina",
    "React",
    "Next.js",
    "Nest.js",
    "Clean Architecture",
    "Arquitectura Hexagonal",
    "FrontEnd",
    "BackEnd",
  ],
  authors: [{ name: "Parodi Lucas", url: baseUrl }],
  creator: "Parodi Lucas",
  openGraph: {
    title: "Parodi Lucas Ivan | Desarrollador de Software",
    description:
      "Portfolio de Parodi Lucas Ivan. Soluciones web, expedientes digitales y software orientado a mejorar procesos.",
    url: baseUrl,
    siteName: "Portfolio Parodi Lucas",
    images: [
      {
        url: "/perfil2.png",
        width: 1200,
        height: 630,
        alt: "Parodi Lucas Ivan - Desarrollador de Software Full Stack",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parodi Lucas",
  url: baseUrl,
  jobTitle: "Licenciado en Sistemas | Desarrollador Web Full Stack",
  image: `${baseUrl}/perfil2.png`,
  nationality: {
    "@type": "Country",
    name: "Argentina",
  },
  sameAs: [
    "https://www.linkedin.com/in/parodi-lucas-ivan/",
    "https://github.com/LucasParodi00",
    "https://x.com/parodilucas_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
