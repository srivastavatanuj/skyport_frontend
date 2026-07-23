import BlankHero from "@/components/common/BlankHero";

import {
  PrivacyPolicySection,
} from "@/components/privacyPolicy";

import { privacyPolicyHero } from "@/data/privacyPolicy";

export default function FAQPage() {
  return (
    <>
      <BlankHero
        title={privacyPolicyHero.title}
        description={privacyPolicyHero.description}
      />

      <PrivacyPolicySection />

    </>
  );
}