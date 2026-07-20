import PageHero from "@/components/common/PageHero";

import {
  MarketStats,
  RegionGrid,
  CrossBorder,
  GlobalCTA,
} from "@/components/globalMarkets";

import { globalMarketsHero } from "@/data/globalMarkets";

export default function GlobalMarketsPage() {
  return (
    <>
      <PageHero
        title={globalMarketsHero.title}
        description={globalMarketsHero.description}
        backgroundImage={globalMarketsHero.backgroundImage}
      />

      <MarketStats />

      <RegionGrid />

      <CrossBorder />

    </>
  );
}