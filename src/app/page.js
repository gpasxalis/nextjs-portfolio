import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />  
      </main>
    </>
  );
}
