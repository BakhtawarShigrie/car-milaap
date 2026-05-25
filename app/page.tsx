import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StickerShowcase from "@/components/home/StickerShowcase";
import SecureConnection from "@/components/home/SecureConnection";
import AppDownload from "@/components/home/AppDownload";
// 1. Naya Windshield component import karein
import InsideWindshield from "@/components/home/InsideWindshield";
import PrivacyFeature from "@/components/home/PrivacyFeature";
import HowItWorks from "@/components/home/HowItWorks";
import PartnerProgram from "@/components/home/PartnerProgram";
import PricingPlans from "@/components/home/PricingPlans";
import AppFeatures from "@/components/home/AppFeatures";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      
      <Hero />
      <Features />
      <StickerShowcase />
      <SecureConnection />
      <AppDownload />
      <InsideWindshield />
      <PrivacyFeature />
      <HowItWorks />
      <PartnerProgram />
      <PricingPlans />
      <AppFeatures />
      <FAQ />
      <Footer />

    </div>
  );
}