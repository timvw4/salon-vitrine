import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BookingEmbed from "@/components/BookingEmbed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/*
 * Page principale (one-page).
 * On assemble ici toutes les sections, dans l'ordre. Chaque section possede
 * un id (#prestations, #galerie, ...) qui sert d'ancre pour la navigation.
 *
 * pb-20 sur <main> en mobile : laisse de la place pour la barre flottante du bas.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <BookingEmbed />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
