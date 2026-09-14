import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { DigitalServices } from "@/components/home/DigitalServices";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Industries } from "@/components/home/Industries";
import { WhyTeknovia } from "@/components/home/WhyTeknovia";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <DigitalServices />
        <Ecosystem />
        <Industries />
        <WhyTeknovia />
        <Testimonials />
      </main>
    </>
  );
}