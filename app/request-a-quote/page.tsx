import BlankHero from "@/components/common/BlankHero";

import {
  QuoteSection,
  QuickQuote,
} from "@/components/quote";

import { quoteHero } from "@/data/quote";

export default function RequestQuotePage() {
  return (
    <>
      <BlankHero
        title={quoteHero.title}
        description={quoteHero.description}
      />

      <QuoteSection />
    </>
  );
}