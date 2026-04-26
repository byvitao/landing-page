import Hero from "@/app/_sections/hero/hero";
import Struggles from "@/app/_sections/struggles/struggles";
import Solution from "./_sections/solution/solution";
import Testimonials from "./_sections/testimonials/testimonials";
import Authority from "./_sections/authority/authority";
import WhyMe from "./_sections/why-me/why-me";
import Process from "./_sections/process/process";
import FAQ from "./_sections/faq/faq";
import Locations from "./_sections/locations/locations";
import { Metadata } from "next";
import GlobalAnimations from "./global-animations";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <>
      <GlobalAnimations />
      <div id="smooth-wrapper">
        <div id="smooth-content">
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
          </main>
        </div>
      </div>
    </>
  );
}
