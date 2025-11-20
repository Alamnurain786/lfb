import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import heroImage1 from "../assets/Hero_Images/KIBU-Banner.png";
import heroImage2 from "../assets/Hero_Images/fizzy-banner.png";
import heroImage3 from "../assets/Hero_Images/REBOOST-Banner.png";

const heroSlides = [
  {
    image: heroImage1,
    kicker: "Flagship",
    title: "KIBU Energy · Original",
    copy: "Clean taurine+caffeine lift engineered for all-day flow.",
  },
  {
    image: heroImage2,
    kicker: "Limited Drop",
    title: "Fizz Spectrum · Citrus Ice",
    copy: "Layered sparkle and citrus bite to reset every sprint.",
  },
  {
    image: heroImage3,
    kicker: "Hydration Plus",
    title: "REBOOST · Zero Sugar",
    copy: "Electrolyte-rich stamina can built for long-haul focus.",
  },
];

const Hero = () => {
  const slides = useMemo(() => heroSlides, []);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="hero" className="relative isolate min-h-[80vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <div className="relative flex min-h-[80vh] w-full items-stretch">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
              <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-end justify-center px-6 py-20 text-white md:px-16 lg:px-24">
                <motion.div
                  className="max-w-2xl space-y-4 text-right"
                  initial={false}
                  animate={
                    activeSlide === index
                      ? { y: 0, opacity: 1 }
                      : { y: -40, opacity: 0 }
                  }
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-4xl font-bold leading-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="text-base text-white/85 sm:text-lg">
                    {slide.copy}
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
