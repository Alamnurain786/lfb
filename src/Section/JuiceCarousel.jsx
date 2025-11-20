import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coco_can from "../assets/Product_Images/COCO_can.png";
import coco_bottle from "../assets/Product_Images/Coco_bottle.png";
import lichi from "../assets/Product_Images/Life_litchi.png";
import mango from "../assets/Product_Images/mango-bottle.png";
import nimboo from "../assets/Product_Images/Nimboo_pani_250.png";

const juiceProducts = [
  {
    id: "coco-can",
    title: "Coco Wave",
    variant: "Sparkling Coconut",
    description:
      "Tender coconut water brightened with fine bubbles for instant island refresh.",
    image: coco_can,
    badge: "Hydrate",
    theme: {
      surface: "linear-gradient(135deg,#e0fbff 0%,#8be0f5 55%,#30b4d9 100%)",
      isDark: false,
    },
  },
  {
    id: "coco-bottle",
    title: "Coco Wave",
    variant: "Pure Coconut",
    description:
      "Single-origin coconut water, cold-filtered to preserve natural sweetness.",
    image: coco_bottle,
    badge: "Pure Press",
    theme: {
      surface: "linear-gradient(135deg,#f5fff8 0%,#c8f1d3 50%,#8ed4a6 100%)",
      isDark: false,
    },
  },
  {
    id: "life-lychee",
    title: "Life Sips",
    variant: "Lychee Burst",
    description:
      "Juicy lychee nectar with a hint of rosewater for a silky floral finish.",
    image: lichi,
    badge: "Best Seller",
    theme: {
      surface: "linear-gradient(135deg,#fff5fb 0%,#ffb5d3 55%,#ff81b2 100%)",
      isDark: false,
    },
  },
  {
    id: "mango-bottle",
    title: "Sunrise Press",
    variant: "Mango Splash",
    description:
      "Cold-pressed alphonso mango with calamansi zest for balanced sweetness.",
    image: mango,
    badge: "Tropical",
    theme: {
      surface: "linear-gradient(135deg,#ffdd99 0%,#ff9a44 55%,#ff5f6d 100%)",
      isDark: false,
    },
  },
  {
    id: "nimboo",
    title: "Fizz Street",
    variant: "Nimboo Pani",
    description:
      "Classic lemon shikanji with Himalayan salt and mint, charged with micro-bubbles.",
    image: nimboo,
    badge: "Street Classic",
    theme: {
      surface: "linear-gradient(135deg,#e8ffe0 0%,#b9f293 60%,#6dd96e 100%)",
      isDark: false,
    },
  },
];

const JuiceCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!isDesktop) return;

    const totalSlides = juiceProducts.length;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (totalSlides - 1)}`,
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration: 0.6,
            ease: "power1.inOut",
          },
          onUpdate: (self) =>
            setActiveIndex(Math.round(self.progress * (totalSlides - 1))),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section id="juices" ref={containerRef} className="relative">
      <div className={isDesktop ? "sticky top-0 h-screen overflow-hidden" : ""}>
        <div
          ref={trackRef}
          className="flex h-full w-full flex-col md:flex-row will-change-transform"
        >
          {juiceProducts.map((product, index) => {
            const isDark = product.theme?.isDark;
            const titleTone = isDark ? "text-white" : "text-slate-900";
            const kickerTone = isDark ? "text-white/70" : "text-slate-900/60";
            const bodyTone = isDark ? "text-white/80" : "text-slate-900/75";
            const badgeTone = isDark
              ? "bg-white/15 text-white"
              : "bg-slate-900/10 text-slate-900";

            return (
              <article
                key={product.id}
                className="flex min-h-[80vh] w-full shrink-0 flex-col gap-10 px-6 py-12 text-center sm:px-10 sm:py-16 md:min-h-screen md:flex-row md:items-center md:justify-center md:px-14 md:text-left"
                style={
                  product.theme?.surface
                    ? { background: product.theme.surface }
                    : undefined
                }
                aria-hidden={activeIndex !== index}
              >
                <div className="flex w-full justify-center md:w-1/2">
                  <img
                    src={product.image}
                    alt={`${product.title} ${product.variant}`}
                    className="max-h-[60vh] w-auto object-contain drop-shadow-[0_25px_60px_rgba(15,23,42,0.35)] md:max-h-[70vh]"
                  />
                </div>

                <div className="flex w-full flex-col items-center gap-5 md:w-1/2 md:items-start">
                  {product.badge && (
                    <span
                      className={`inline-flex max-w-max items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${badgeTone}`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="space-y-2">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.35em] ${kickerTone}`}
                    >
                      {product.title}
                    </p>
                    <h2
                      className={`text-4xl font-bold leading-tight md:text-5xl ${titleTone}`}
                    >
                      {product.variant}
                    </h2>
                  </div>
                  <p className={`text-lg md:max-w-md ${bodyTone}`}>
                    {product.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JuiceCarousel;
