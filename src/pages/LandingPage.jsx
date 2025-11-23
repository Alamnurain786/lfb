import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Herocarousel from "../Section/Herocarousel";
import Productcarousel from "../Section/Productcarousel";
import JuiceCarousel from "../Section/JuiceCarousel";
import About from "../Section/About";
import Contact from "../Section/Contact";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.target) {
      const targetSelector = location.state.target;
      const scrollToTarget = () => {
        const node = document.querySelector(targetSelector);
        node?.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      requestAnimationFrame(scrollToTarget);
      navigate(".", { replace: true, state: null });
    }
  }, [location, navigate]);

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
};

export default LandingPage;
