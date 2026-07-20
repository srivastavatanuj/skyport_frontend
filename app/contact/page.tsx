import PageHero from "@/components/common/PageHero";

import {
  ContactSection,
  OfficeLocation,
  FeatureStrip,
} from "@/components/contact";

import { contactHero } from "@/data/contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactHero.title}
        description={contactHero.description}
        backgroundImage={contactHero.backgroundImage}
      />

      <ContactSection />

      <OfficeLocation />

      <FeatureStrip />
    </>
  );
}