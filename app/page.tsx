import CarCatalogue from "@/components/CarCatalogue";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
