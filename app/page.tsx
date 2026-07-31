import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";
import About from "@/components/home/About";
import BusinessSectors from "@/components/home/BusinessSectors";
import WhyChoose from "@/components/home/WhyChoose";
import TradeProcess from "@/components/home/TradeProcess";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GetQuote from "@/components/home/GetQuote";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import GlobalPresence from "@/components/home/GlobalPresence";

export default function Home() {
  return (
<>
        <Hero />
        <About/>
        <BusinessSectors/>
        <GlobalPresence/>
        <WhyChoose/>
        <TradeProcess/>
        
</>
  );
}