import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
// 1. StickerShowcase import karein
import StickerShowcase from "@/components/home/StickerShowcase"; 

export default function Home() {
  return (
    <div className="bg-white">
      
      {/* 1. Top Hero Section */}
      <Hero />

      {/* 2. Features Grid Section */}
      <Features />

      {/* 3. Naya Sticker Showcase Section */}
      <StickerShowcase />

    </div>
  );
}