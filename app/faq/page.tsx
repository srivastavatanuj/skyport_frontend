import PageHero from "@/components/common/PageHero";

import {
  FAQSection,
} from "@/components/faq";

import { faqHero } from "@/data/faq";

export default function FAQPage() {
  return (
    <>
      <PageHero
        title={faqHero.title}
        description={faqHero.description}
        backgroundImage={faqHero.backgroundImage}
      />

      <FAQSection />

    </>
  );
}