import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { energyProducts } from "../data/products";

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!isDesktop) return;

    const totalSlides = energyProducts.length;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (totalSlides - 1) * 1.5}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalSlides - 1),
            duration: 0.8,
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
    <section id="products" ref={containerRef} className="relative">
      <div
        className={`w-full ${
          isDesktop ? "sticky top-0 h-screen overflow-hidden" : ""
        }`}
      >
        <div
          ref={trackRef}
          className="flex h-full w-full flex-col md:flex-row will-change-transform"
        >
          {energyProducts.map((product, index) => {
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
                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className={`inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-semibold shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition ${ctaTone}`}
                  >
                    See product
                  </Link>
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
