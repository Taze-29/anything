import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bespoke from "@/components/Bespoke";
import Work from "@/components/Work";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>    
    <section>
      <Hero />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Bespoke />
    </section>
    <section>
      <Work />
    </section>
    </>
  );
}
