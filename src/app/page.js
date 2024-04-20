import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}
