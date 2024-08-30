import OurMission from "@/components/OurMission";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return ( 
    <div>
      <section id="about-us">
        <Hero />
      </section>
      <section id="our-mission">
        <OurMission />
      </section>
      <section id="our-resources">
        <Guide />
      </section>
      <section id="past-work">
        <Features />
      </section>
      <section id="contact-us">
        <Footer />
      </section>
    </div>
  )
}
