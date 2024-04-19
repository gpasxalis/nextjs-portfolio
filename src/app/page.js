import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Portfolio from "@/components/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />  
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
