"use client";
import { useState } from "react";
import AboutUs from "@/components/AboutUs";
import CatalogModal from "@/components/CatalogModal";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogisticsSection from "@/components/LogisticsSection";
import ProductLines from "@/components/ProductLines";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { Contact } from "lucide-react";

export default function Home() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [catalogImages, setCatalogImages] = useState<string[]>([]);

  const handleOpenCatalog = (images: string[]) => {
    setCatalogImages(images);
    setIsCatalogOpen(true);
  };

  const handleCloseCatalog = () => {
    setIsCatalogOpen(false);
  };

  return (
    <div className="bg-sky-50">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <AboutUs />
        <ProductLines onOpenCatalog={handleOpenCatalog} />
        <LogisticsSection />
        <WhyChooseUsSection />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={handleCloseCatalog}
        images={catalogImages}
      />
    </div>
  );
}
