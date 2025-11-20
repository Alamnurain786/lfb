import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kibu330 from "../assets/Product_Images/KIBU_330.png";
import arna330 from "../assets/Product_Images/ARNA_CAN330.png";
import reboost from "../assets/Product_Images/Reboost.png";

const products = [
  {
    id: "kibu330",
    title: "KIBU Energy",
    variant: "Original ",
    description:
      "Balanced taurine+caffeine blend tailored for all-day focus and smooth lift.",
    image: kibu330,
    badge: "Best Seller",
    theme: {
      surface: "linear-gradient(135deg,#0f1c3f 0%,#1f375b 55%,#335c9b 100%)",
      accentBar: "linear-gradient(180deg,#6ea2ff 0%,rgba(255,255,255,0) 80%)",
      isDark: true,
    },
  },

  {
    id: "arna330",
    title: "ARNA Spark",
    variant: "Berry Rush ",
    description: "Berry-forward fizz wrapped in cooling menthol finish.",
    image: arna330,
    theme: {
      surface: "linear-gradient(135deg,#fbfdff 0%,#c6f3ff 45%,#2dcbf5 100%)",
      accentBar: "linear-gradient(180deg,#ffffff 0%,#2dcbf5 100%)",
      isDark: false,
    },
  },
  {
    id: "reboost",
    title: "REBOOST",
    variant: "Zero Sugar ",
    description:
      "Hydration-first stamina drink with BCAA stack and crisp finish.",
    image: reboost,
    badge: "New",
    theme: {
      surface: "linear-gradient(135deg,#fff4e1 0%,#ffc46b 65%,#ffb347 100%)",
      accentBar: "linear-gradient(180deg,#ffe7bf 0%,#ff9c3f 100%)",
      isDark: false,
    },
  },
];

const Product = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });

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

    const totalSlides = products.length;
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
    <section
      id="products"
      ref={containerRef}
      className="relative"
      // style={{ height: isDesktop ? `${products.length * 100}vh` : "auto" }}
    >
      <div
        className={`w-full ${
          isDesktop ? "sticky top-0 h-screen overflow-hidden" : ""
        }`}
      >
        <div
          ref={trackRef}
          className="flex h-full w-full flex-col md:flex-row will-change-transform"
        >
          {products.map((product, index) => {
            const isDark = product.theme?.isDark;
            const titleTone = isDark ? "text-white" : "text-slate-900";
            const kickerTone = isDark ? "text-white/70" : "text-slate-900/60";
            const bodyTone = isDark ? "text-white/80" : "text-slate-900/75";
            const badgeTone = isDark
              ? "bg-white/15 text-white"
              : "bg-slate-900/10 text-slate-900";
            const ctaTone = isDark
              ? "bg-white text-[#1f375b] hover:bg-slate-100"
              : "bg-[#e6003d] text-white hover:bg-[#c40034]";

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
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-semibold shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition ${ctaTone}`}
                  >
                    See product
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
