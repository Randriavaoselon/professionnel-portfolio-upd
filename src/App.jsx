import { useCallback, useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import ScrollTopButton from "./components/layout/ScrollTopButton";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import SkillsModal from "./components/sections/SkillsModal";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Realisations from "./components/sections/Realisations";
import Presentation from "./components/sections/Presentation";
import Contact from "./components/sections/Contact";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        <Sidebar />
        <Hero />
        <Skills onOpenModal={openModal} />
        <SkillsModal isOpen={isModalOpen} onClose={closeModal} />
        <About />
        <Services />
        <Realisations />
        <Presentation />
        <Contact />
        <ScrollTopButton />
      </main>

      <Footer />
    </>
  );
}
