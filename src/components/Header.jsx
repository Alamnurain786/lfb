import { useEffect, useId, useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineMenuAlt3 } from "react-icons/hi";
import canImage from "../assets/Product_Images/KIBU_330.png";

const productItems = [
  { label: "Energy Drinks", href: "#products", featured: true },
  { label: "KIBU 330ML", href: "#product1" },
  { label: "KIBU 250ML", href: "#product2" },
  { label: "KIBU 180ML", href: "#product3" },
  { label: "ARNA 330ML", href: "#product4" },
  { label: "REBOOST", href: "#product5" },
];

export default function Header() {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const desktopProductsMenuId = useId();
  const mobileMenuId = useId();
  const mobileProductsPanelId = useId();

  const openProducts = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsProductsOpen(true);
  };

  const closeProducts = () => {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 120);
  };

  const toggleProducts = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsProductsOpen((prev) => !prev);
  };

  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsProductsOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const handleNavClick = (target, afterNavigate) => (event) => {
    event.preventDefault();
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    afterNavigate?.();
  };

  useEffect(() => {
    let observer;
    let retryId;

    const setupObserver = () => {
      const heroEl = document.querySelector("#hero");
      if (!heroEl) return false;

      observer = new IntersectionObserver(
        ([entry]) => {
          const pastHero =
            entry.boundingClientRect.top <= -72 || !entry.isIntersecting;
          setIsAfterHero(pastHero);
        },
        { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
      );

      observer.observe(heroEl);
      return true;
    };

    if (!setupObserver()) {
      retryId = setTimeout(setupObserver, 120);
    }

    return () => {
      observer?.disconnect();
      if (retryId) clearTimeout(retryId);
    };
  }, []);

  const shellClasses =
    "sticky top-0 z-50 border-b border-transparent backdrop-blur-lg transition-colors duration-300";
  const bgClasses = isAfterHero
    ? "bg-brand-border/95 border-brand-blue/60 shadow-brand"
    : "bg-white/10 border-white/20 text-white";

  const linkBase =
    "relative rounded-full px-5 py-2 text-sm font-semibold text-brand-text transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40";
  const underlineClasses =
    "after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand-accent after:opacity-0 after:transition-opacity after:duration-200";

  return (
    <header className={`${shellClasses} ${bgClasses}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-3 font-heading">
        <div className="flex w-full items-center gap-4">
          <div className="flex flex-shrink-0 items-center gap-3">
            <img
              src={canImage}
              alt="Energy can"
              className="h-12 w-8 object-contain drop-shadow"
            />

            <div className="leading-tight">
              <p className="text-xl font-black tracking-wide text-brand-text">
                Life <span className="text-brand-accent">Food</span>
              </p>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
                Beverage Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <nav
              className="hidden flex-1 justify-end lg:flex"
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-1 rounded-full border border-brand-border bg-brand-shell/95 px-2 py-1 text-brand-text shadow-brand backdrop-blur">
                <a
                  href="#home"
                  onClick={handleNavClick("#hero")}
                  className={`group ${linkBase} ${underlineClasses} hover:bg-white hover:text-brand-text hover:after:opacity-100`}
                >
                  Home
                </a>

                <div
                  className="relative"
                  onMouseEnter={openProducts}
                  onMouseLeave={closeProducts}
                  onFocusCapture={openProducts}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setIsProductsOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isProductsOpen}
                    aria-controls={desktopProductsMenuId}
                    onClick={toggleProducts}
                    className={`group inline-flex items-center gap-1 ${linkBase} ${underlineClasses} ${
                      isProductsOpen ? "after:opacity-100" : ""
                    } hover:bg-white`}
                  >
                    <span className="pr-1">Products</span>
                    <HiOutlineChevronDown
                      className={`text-brand-text transition-transform duration-200 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={desktopProductsMenuId}
                    role="menu"
                    onMouseEnter={openProducts}
                    onMouseLeave={closeProducts}
                    className={`absolute left-0 right-auto mt-3 w-64 rounded-2xl border border-brand-border/60 bg-white/95 p-2 text-brand-text shadow-2xl transition-all duration-200 ease-out ${
                      isProductsOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    {productItems.map(({ label, href, featured }) => (
                      <a
                        key={label}
                        role="menuitem"
                        href={href}
                        onClick={handleNavClick(href)}
                        className={`flex items-center justify-between rounded-xl px-4 py-2 text-sm font-medium transition ${
                          featured
                            ? "bg-brand-shell text-brand-text hover:bg-brand-shell/80"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="#about"
                  onClick={handleNavClick("#about")}
                  className={`group ${linkBase} ${underlineClasses} hover:bg-white hover:after:opacity-100`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick("#contact")}
                  className={`group ${linkBase} ${underlineClasses} hover:bg-white hover:after:opacity-100`}
                >
                  Contact
                </a>
              </div>
            </nav>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white/80 text-brand-text transition hover:bg-white lg:hidden"
              onClick={handleMobileToggle}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <HiOutlineMenuAlt3
                className={`h-6 w-6 transition ${
                  isMobileMenuOpen ? "text-brand-blue" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          id={mobileMenuId}
          className={`lg:hidden ${
            isMobileMenuOpen
              ? "pointer-events-auto max-h-screen opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          } w-full overflow-hidden transition-all duration-300`}
        >
          <div className="mt-4 space-y-2 rounded-3xl border border-brand-border bg-white/90 p-4 text-brand-text shadow-brand backdrop-blur">
            <a
              href="#home"
              onClick={handleNavClick("#home", closeMobileMenu)}
              className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-brand-shell"
            >
              Home
            </a>

            <div className="rounded-2xl bg-brand-shell/70">
              <button
                type="button"
                onClick={toggleProducts}
                className="flex w-full items-center justify-between px-4 py-3 text-base font-semibold"
                aria-expanded={isProductsOpen}
                aria-controls={mobileProductsPanelId}
              >
                Products
                <HiOutlineChevronDown
                  className={`transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={mobileProductsPanelId}
                role="menu"
                className={`space-y-1 overflow-hidden px-4 pb-3 transition-all ${
                  isProductsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                {productItems.map(({ label, href }) => (
                  <a
                    key={label}
                    role="menuitem"
                    onClick={handleNavClick(href, () => {
                      closeMobileMenu();
                      setIsProductsOpen(false);
                    })}
                    className="block rounded-xl px-3 py-2 text-sm font-medium hover:bg-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#about"
              onClick={handleNavClick("#about", closeMobileMenu)}
              className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-brand-shell"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={handleNavClick("#contact", closeMobileMenu)}
              className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-brand-shell"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
