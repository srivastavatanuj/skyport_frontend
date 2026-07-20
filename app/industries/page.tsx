import PageHero from "@/components/common/PageHero";

import {
  IndustriesIntro,
  IndustryGrid,
  IndustrySolutions,
  IndustryCTA,
} from "@/components/industries";

import { industriesHero } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title={industriesHero.title}
        description={industriesHero.description}
        backgroundImage={industriesHero.backgroundImage}
      />


      <IndustryGrid />

      <IndustrySolutions />


    </>
  );
}