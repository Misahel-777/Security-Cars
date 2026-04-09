import Hero from "../components/Hero";
import Aboutus from "../components/aboutus";
import Services from "../components/services";
import Work_done from "../components/work-done";
import Faq from "../components/faqs";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";



export default function Home() {
return (
  <>
  <main>
    <Hero />
    <Aboutus />
    <Services />
    <Work_done />
    <Faq />
    <Testimonials />
    <Cta />
  </main>
  </>
  );
}