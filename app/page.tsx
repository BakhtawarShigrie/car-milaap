import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StickerShowcase from "@/components/home/StickerShowcase";
import SecureConnection from "@/components/home/SecureConnection";
import AppDownload from "@/components/home/AppDownload";
// 1. Naya Windshield component import karein
import InsideWindshield from "@/components/home/InsideWindshield";

export default function Home() {
  return (
    <div className="bg-white">
      
      <Hero />
      <Features />
      <StickerShowcase />
      <SecureConnection />
      <AppDownload />
      
      {/* 2. Naya Component Add Karein */}
      <InsideWindshield />

    </div>
  );
}