import Header from "./components/Header";
import Footer from "./components/Footer";
import Herocarousel from "./Section/Herocarousel";
import Productcarousel from "./Section/Productcarousel";
import JuiceCarousel from "./Section/JuiceCarousel";

import About from "./Section/About";
import Contact from "./Section/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Herocarousel />
      <Productcarousel />
      <JuiceCarousel />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
