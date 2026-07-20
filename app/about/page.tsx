import {
  AboutSection,
  GlobalPresence,
  Stats,
} from "@/components/about";
import PageHero from "@/components/common/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Skyport Exim Corp Private Limited is a diversified international trading company connecting global suppliers with businesses worldwide through reliable trade solutions and seamless logistics."
        backgroundImage="/images/home/homeHero.jpeg"

      />

      <AboutSection />
       <Stats />

      <GlobalPresence />

     

      {/* <CTA /> */}
    </>
  );
}