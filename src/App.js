import "./styles.css";
import Navbar from "./Components/Nav";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}
