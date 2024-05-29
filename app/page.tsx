import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import MyProjects from "@/components/main/MyProjects";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/sub/HeroContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <MyProjects />
        <Encryption />
        <Footer />
      </div>
    </main>
  );
}
