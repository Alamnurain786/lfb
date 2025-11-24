import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { juiceProducts } from "../data/products";

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!isDesktop) return;

    const totalSlides = juiceProducts.length;
    const articles = containerRef.current.querySelectorAll("article");

    const ctx = gsap.context(() => {
      // Set initial positions - all stacked with offset on left side
      articles.forEach((article, index) => {
        gsap.set(article, {
          x: index * 150,
          zIndex: totalSlides - index,
          transformOrigin: "center center",
        });
      });

      // Create timeline - follows mouse wheel exactly without snap
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * totalSlides * 2}`,
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setActiveIndex(Math.round(self.progress * (totalSlides - 1))),
        },
      });

      // Animate each card sliding out and others shifting with easing
      articles.forEach((article, index) => {
        if (index < totalSlides - 1) {
          // Card exits to the left
          tl.to(
            article,
            {
              x: -window.innerWidth,
              duration: 1,
              ease: "power2.out",
            },
            index
          );

          // Move remaining cards left smoothly
          for (let i = index + 1; i < totalSlides; i++) {
            tl.to(
              articles[i],
              {
                x: (i - index - 1) * 150,
                duration: 1,
                ease: "power2.inOut",
              },
              index
            );
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section id="juices" ref={containerRef} className="relative">
      <div
        className={`w-full ${
          isDesktop ? "sticky top-0 h-screen overflow-hidden" : ""
        }`}
      >
        <div
          ref={trackRef}
          className="flex h-full w-full flex-col will-change-transform"
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
                className="flex min-h-[80vh] w-full shrink-0 flex-col gap-10 px-6 py-12 text-center sm:px-10 sm:py-16 md:absolute md:inset-0 md:min-h-screen md:flex-row md:items-center md:justify-center md:px-14 md:text-left"
                style={
                  product.theme?.surface
                    ? { background: product.theme.surface }
                    : undefined
                }
                aria-hidden={activeIndex !== index}
              >
                <div className="flex w-full justify-center md:w-1/2">
                  {Array.isArray(product.image) && product.image.length > 1 ? (
                    <div className="flex items-end justify-center gap-3 sm:gap-4 max-h-[60vh] md:max-h-[70vh]">
                      {product.image.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${product.title} ${product.variant} ${
                            product.detail?.packSizes?.[idx] || ""
                          }`}
                          loading="lazy"
                          className="object-contain drop-shadow-[0_25px_60px_rgba(15,23,42,0.35)]"
                          style={{
                            height: idx === 1 ? "100%" : "65%",
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={
                        Array.isArray(product.image)
                          ? product.image[0]
                          : product.image
                      }
                      alt={`${product.title} ${product.variant}`}
                      loading="lazy"
                      className="max-h-[60vh] w-auto object-contain drop-shadow-[0_25px_60px_rgba(15,23,42,0.35)] md:max-h-[70vh]"
                    />
                  )}
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
                  {product.detail?.packSizes &&
                    product.detail.packSizes.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span
                          className={`text-sm font-semibold uppercase tracking-wider ${kickerTone}`}
                        >
                          Available:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {product.detail.packSizes.map((size, idx) => (
                            <span
                              key={idx}
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeTone} border ${
                                product.theme?.isDark === false
                                  ? "border-slate-900/20"
                                  : "border-white/20"
                              }`}
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
