import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import StickerShowcase from "@/components/home/StickerShowcase";
// 1. Naya component import karein
import SecureConnection from "@/components/home/SecureConnection";

export default function Home() {
  return (
    <div className="bg-white">
      
      {/* 1. Top Hero Section */}
      <Hero />

      {/* 2. Features Grid Section */}
      <Features />

      {/* 3. Sticker Showcase (Image Left, Text Right) */}
      <StickerShowcase />

      {/* 4. Secure Connection (Text Left, Image Right, Dark Background) */}
      <SecureConnection />

    </div>
  );
}