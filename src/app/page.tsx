import { AtlasBackdrop } from "@/components/AtlasBackdrop";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ForClubs } from "@/components/ForClubs";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <AtlasBackdrop />
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <ForClubs />
      </main>
      <SiteFooter />
    </>
  );
}
