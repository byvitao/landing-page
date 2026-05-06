import Hero from "@/app/_sections/hero/hero";
import Struggles from "@/app/_sections/struggles/struggles";
import Solution from "./_sections/solution/solution";
import Testimonials from "./_sections/testimonials/testimonials";
import Authority from "./_sections/authority/authority";
import WhyMe from "./_sections/why-me/why-me";
import Process from "./_sections/process/process";
import FAQ from "./_sections/faq/faq";
import Locations from "./_sections/locations/locations";
import Footer from "./_sections/footer/footer";
import { Metadata } from "next";
import { LenisProvider } from "@/utils/LenisProvider";

export const metadata: Metadata = {
  verification: {
    google: "4lhXDy_Z3X9OJxRdq7t5p7KbSi8gn49yGFvsIWIVia8",
  },
  title: "Vitor Hugo Souza | Nutricionista em Novo Hamburgo, Gramado e Sapiranga",
  description: "Especialista em emagrecimento, hipertrofia, performance e saúde. Transforme sua vida através de uma alimentação simples, eficiente e sustentável, com um acompanhamento nutricional de ponta.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.vitorhugonutri.com.br"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Vitor Hugo Souza | Nutricionista - Performance e Emagrecimento",
    description: "Consultoria nutricional especializada em emagrecimento e performance esportiva em Novo Hamburgo, Gramado e Sapiranga. Resultados reais com nutrição eficiente.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Nutri Vitor Hugo",
    locale: "pt-BR",
    type: "website",
    images: [{
      url: "/og-image.jpeg",
      width: 1200,
      height: 630,
      alt: "Vitor Hugo Souza - Nutricionista"
    }],
  }
};

export default async function Home() {
  return (
    <LenisProvider>
      <main>
        <Hero />
        <Struggles />
        <Solution />
        <Testimonials />
        <Authority />
        <WhyMe />
        <Process />
        <FAQ />
        <Locations />
        <Footer />
      </main>
    </LenisProvider>
  );
}
