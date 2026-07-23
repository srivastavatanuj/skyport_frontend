import BlankHero from "@/components/common/BlankHero";

import {
  TandCSection,
} from "@/components/termsConditions";

import { tandcHero } from "@/data/termsConditions";

export default function FAQPage() {
  return (
    <>
      <BlankHero
        title={tandcHero.title}
        description={tandcHero.description}
      />

      <TandCSection />

    </>
  );
}