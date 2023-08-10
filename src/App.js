import "./styles.css";
import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import AccordionSection from "./Components/Accordian";
import VideoSection from "./Components/Video";
import Why from "./Components/Why";
import TestimonialSlider from "./Components/Testimonial";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      < VideoSection />
      <Why />
      <TestimonialSlider />
      <AccordionSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
