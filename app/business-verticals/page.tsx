import PageHero from "@/components/common/PageHero";

import {
    Clients,
    VerticalGrid
} from "@/components/business-verticals";

import {
    MarketStats,
} from "@/components/globalMarkets";

import { businessVericalsHero } from "@/data/businessVerticals";

export default function ContactPage() {
    return (
        <>
            <PageHero
                title={businessVericalsHero.title}
                description={businessVericalsHero.description}
                backgroundImage={businessVericalsHero.backgroundImage}
            />
            <MarketStats />
            <VerticalGrid />
            <Clients />
        </>
    );
}