import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutIntro from "@/components/AboutIntro";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutIntro />
        <Services />
        <Doctors />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
