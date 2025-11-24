import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProductById } from "../data/products";

const fallbackTheme = {
  background: "linear-gradient(125deg,#050b1d,#101e3f 60%,#132b63)",
  secondary: {
    background: "linear-gradient(145deg,#050b1d,#0f172a)",
    card: "rgba(15,23,42,0.75)",
    text: "text-slate-100",
    badge: "bg-white/10 text-white",
    textColor: "#e2e8f0",
    mutedColor: "rgba(226,232,240,0.65)",
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const productFromState = location.state?.product;
  const product = useMemo(() => {
    if (productFromState && productFromState.id === productId) {
      return productFromState;
    }
    return getProductById(productId);
  }, [productFromState, productId]);

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const imageShellRef = useRef(null);
  const introRef = useRef(null);
  const descriptionRef = useRef(null);
  const historyRef = useRef(null);
  const textShellRef = useRef(null);
  const detailRef = useRef(null);

  const detail = product?.detail;
  const heroBackground = product?.theme?.surface ?? fallbackTheme.background;
  const secondaryTheme = detail?.secondaryTheme ?? fallbackTheme.secondary;
  const detailTextClass = secondaryTheme.text ?? "text-slate-100";
  const detailMutedColor =
    secondaryTheme.mutedColor ?? "rgba(226,232,240,0.65)";
  const detailTextColor = secondaryTheme.textColor ?? "#e2e8f0";
  const historyTitle = detail?.historyTitle ?? "Origin Notes";
  const historyDescription = detail?.historyDescription ?? detail?.story ?? "";
  const historyBullets = detail?.historyBullets ?? [];
  const packSizes = detail?.packSizes ?? [
    {
      size: "180 ml",
      note: "Desk-side micro boosts for sprint reviews.",
    },
    {
      size: "250 ml",
      note: "Balanced daily driver when you need steady focus.",
    },
    {
      size: "330 ml",
      note: "Long-haul tallboy built for deep work marathons.",
    },
  ];

  useEffect(() => {
    if (!product) {
      navigate("/", { replace: true });
    }
  }, [product, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useLayoutEffect(() => {
    if (!product) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearMatchMedia?.();
    ScrollTrigger.refresh();

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const desktopTimeline = () => {
        const imageEl = imageRef.current;
        const imageShell = imageShellRef.current;
        const introEl = introRef.current;
        const descriptionEl = descriptionRef.current;
        const historyEl = historyRef.current;
        const textShell = textShellRef.current;

        if (!imageEl || !imageShell || !textShell) return undefined;

        gsap.set(imageEl, { transformOrigin: "50% 12%" });
        gsap.set(descriptionEl, { autoAlpha: 0, xPercent: -55 });
        gsap.set(historyEl, { autoAlpha: 0, yPercent: 35 });
        gsap.set([imageShell, textShell], { xPercent: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=320%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
          },
        });

        tl.fromTo(
          imageEl,
          {
            scale: 1.4,
            xPercent: 28,
            yPercent: 10,
            filter: "drop-shadow(0px 55px 120px rgba(4,8,20,0.55))",
          },
          {
            scale: 1.05,
            xPercent: 8,
            yPercent: 0,
            ease: "power2.out",
            duration: 1.2,
          }
        )
          .to(
            introEl,
            {
              autoAlpha: 0,
              yPercent: -12,
              duration: 0.55,
              ease: "power2.inOut",
            },
            "-=0.7"
          )
          .fromTo(
            descriptionEl,
            { autoAlpha: 0, xPercent: -55 },
            {
              autoAlpha: 1,
              xPercent: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "<0.2"
          )
          .to(imageShell, {
            xPercent: 0,
            duration: 1,
            ease: "power2.inOut",
          })
          .to(
            textShell,
            {
              xPercent: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(descriptionEl, {
            autoAlpha: 0,
            yPercent: -12,
            duration: 0.55,
            ease: "power2.inOut",
          })
          .fromTo(
            historyEl,
            { autoAlpha: 0, yPercent: 30 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.85,
              ease: "power2.out",
            },
            "<0.2"
          )
          .to(
            imageEl,
            {
              scale: 0.9,
              duration: 0.9,
              ease: "power1.inOut",
            },
            "<"
          );

        return tl;
      };

      const mobileTimeline = () => {
        const imageEl = imageRef.current;
        const introEl = introRef.current;
        const descriptionEl = descriptionRef.current;
        const historyEl = historyRef.current;

        if (!imageEl) return undefined;

        gsap.set(descriptionEl, { autoAlpha: 0, yPercent: 10 });
        gsap.set(historyEl, { autoAlpha: 0, yPercent: 20 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=220%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          imageEl,
          { scale: 1.3, yPercent: 10 },
          { scale: 1, yPercent: 0, duration: 1, ease: "power2.out" }
        )
          .to(
            introEl,
            {
              autoAlpha: 0,
              yPercent: -10,
              duration: 0.5,
              ease: "power2.inOut",
            },
            "-=0.6"
          )
          .fromTo(
            descriptionEl,
            { autoAlpha: 0, yPercent: 10 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "<0.2"
          )
          .to(descriptionEl, {
            autoAlpha: 0,
            yPercent: -10,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .fromTo(
            historyEl,
            { autoAlpha: 0, yPercent: 15 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "<0.2"
          );

        return tl;
      };

      mm.add("(min-width: 768px)", () => {
        const tl = desktopTimeline();
        return () => tl?.kill();
      });
      mm.add("(max-width: 767px)", () => {
        const tl = mobileTimeline();
        return () => tl?.kill();
      });
    }, heroRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [product]);

  if (!product || !detail) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <section
          id="product-hero"
          ref={heroRef}
          className="relative z-10"
          style={{ background: heroBackground }}
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-4 sm:bottom-8 flex justify-center text-[0.6rem] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.55em] text-white/60 z-20">
            Scroll to reveal
          </div>
          <div className="sticky top-0 flex h-screen items-center z-10 pt-16 sm:pt-0">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 py-12 sm:py-16 md:flex-row md:items-center">
              <div
                ref={textShellRef}
                className="relative w-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] text-white md:w-1/2"
              >
                <article
                  ref={introRef}
                  className="absolute inset-0 flex flex-col justify-center text-center md:text-left"
                >
                  <div className="bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <p className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.5em] sm:tracking-[0.8em] text-white drop-shadow-lg">
                        {detail.heroEyebrow}
                      </p>
                      <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                        {product.title}{" "}
                        <span className="text-white/90">{product.variant}</span>
                      </h1>
                      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white drop-shadow-lg leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  ref={descriptionRef}
                  className="absolute inset-0 flex flex-col justify-center text-center opacity-0 md:text-left"
                >
                  <div className="bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <span className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.4em] sm:tracking-[0.55em] text-white drop-shadow-lg">
                        Profile Pulse
                      </span>
                      <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
                        {detail.heroTitle}
                      </h2>
                      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white drop-shadow-lg leading-relaxed">
                        {detail.heroSubtitle}
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  ref={historyRef}
                  className="absolute inset-0 flex flex-col justify-center text-center opacity-0 md:text-left"
                >
                  <div className="bg-gradient-to-br from-black/60 via-black/50 to-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <span className="inline-flex max-w-max items-center rounded-full border border-white/30 px-3 sm:px-4 py-1 text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.4em] sm:tracking-[0.55em] text-white drop-shadow-lg bg-white/10">
                        History
                      </span>
                      <h3 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg">
                        {historyTitle}
                      </h3>
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-white drop-shadow-lg">
                        {historyDescription}
                      </p>
                      {historyBullets.length > 0 && (
                        <ul className="mt-4 sm:mt-5 space-y-2 text-left text-xs sm:text-sm text-white">
                          {historyBullets.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                              <span className="drop-shadow-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </div>

              <div
                ref={imageShellRef}
                className="flex w-full justify-center md:w-1/2"
              >
                <div
                  ref={imageRef}
                  className="relative flex h-[320px] w-[190px] sm:h-[400px] sm:w-[240px] md:h-[560px] md:w-[340px] items-center justify-center"
                >
                  {detail.packImages && detail.packImages.length > 1 ? (
                    <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 h-full w-full">
                      {detail.packImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${product.title} ${
                            detail.packSizes?.[idx] || ""
                          }`}
                          loading="eager"
                          fetchpriority="high"
                          className="object-contain"
                          style={{
                            height: idx === 1 ? "100%" : "65%",
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={`${product.title} can`}
                      loading="eager"
                      fetchpriority="high"
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pack Sizes Section - Dynamic based on product data */}
        {detail.packSizes && detail.packSizes.length > 0 && (
          <section className="bg-slate-900 py-12 sm:py-16 md:py-20 text-white">
            <div className="mx-auto w-full max-w-6xl space-y-8 sm:space-y-10 px-4 sm:px-6">
              <div className="flex flex-col gap-2 sm:gap-3 text-center md:text-left">
                <span className="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.4em] sm:tracking-[0.55em] text-white/60">
                  Pack sizes
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {detail.packSizes.length === 1
                    ? "Perfect size for your needs"
                    : detail.packSizes.length === 2
                    ? "Two perfect sizes"
                    : "Choose your pour"}
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  {detail.packSizes.length === 1
                    ? "Expertly sized for the perfect refreshment experience."
                    : "Select the size that matches your rhythm and occasion."}
                </p>
              </div>

              <div
                className={`grid gap-4 sm:gap-6 ${
                  detail.packSizes.length === 1
                    ? "grid-cols-1 max-w-sm sm:max-w-md mx-auto"
                    : detail.packSizes.length === 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }`}
              >
                {detail.packSizes.map((size, index) => {
                  const getSizeNote = (s) => {
                    if (s.includes("L") || s.includes("l"))
                      return "Family size";
                    if (s === "150ml") return "Compact & portable";
                    if (s === "180ml") return "Perfect for on-the-go";
                    if (s === "250ml") return "Standard size";
                    if (s === "330ml") return "Maximum refreshment";
                    return "Premium choice";
                  };

                  return (
                    <div
                      key={size}
                      className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur hover:bg-white/10 transition-all"
                    >
                      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.45em] text-white/60">
                        {product.variant}
                      </p>
                      <p className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold text-white">
                        {size}
                      </p>
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/75">
                        {getSizeNote(size)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section
          id="product-details"
          ref={detailRef}
          className="relative bg-slate-950 py-12 sm:py-16 md:py-20"
          style={{ background: secondaryTheme.background }}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6">
            <div
              className={`${detailTextClass} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur`}
              style={{ background: secondaryTheme.card }}
            >
              <p
                className={`${secondaryTheme.badge} inline-flex rounded-full px-3 sm:px-4 py-1 text-[0.6rem] sm:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em]`}
              >
                {detail.heroTitle}
              </p>
              <h2
                className={`mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold leading-tight ${detailTextClass}`}
              >
                Taste architecture
              </h2>
              <p
                className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${detailTextClass}`}
                style={{ color: detailTextColor }}
              >
                {detail.story}
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              <div
                className={`${detailTextClass} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl`}
                style={{ background: secondaryTheme.card }}
              >
                <p
                  className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] ${detailTextClass}`}
                >
                  Tasting notes
                </p>
                <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                  {detail.tastingNotes.map((note) => (
                    <li key={note.label} className={`${detailTextClass}`}>
                      <p
                        className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em]"
                        style={{ color: detailMutedColor }}
                      >
                        {note.label}
                      </p>
                      <p
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: detailTextColor }}
                      >
                        {note.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${detailTextClass} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl`}
                style={{ background: secondaryTheme.card }}
              >
                <p
                  className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] ${detailTextClass}`}
                >
                  Fuel metrics
                </p>
                <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                  {detail.nutrition.map((item) => (
                    <li
                      key={item.label}
                      className={`flex items-center justify-between ${detailTextClass}`}
                    >
                      <span
                        className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em]"
                        style={{ color: detailMutedColor }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: detailTextColor }}
                      >
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {detail.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className={`${detailTextClass} rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl`}
                  style={{ background: secondaryTheme.card }}
                >
                  <p
                    className="text-sm sm:text-base font-semibold leading-relaxed"
                    style={{ color: detailTextColor }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
