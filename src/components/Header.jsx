import { useEffect, useId, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineChevronDown, HiOutlineMenuAlt3 } from "react-icons/hi";
import canImage from "../assets/Product_Images/KIBU_330.png";
import { energyProducts, juiceProducts } from "../data/products";

const productCategories = [
  {
    label: "Energy Drinks",
    products: energyProducts.map((p) => ({
      id: p.id,
      label: `${p.title} ${p.variant}`,
      badge: p.badge,
    })),
  },
  {
    label: "Juices & Coconut Water",
    products: juiceProducts.map((p) => ({
      id: p.id,
      label: `${p.title} ${p.variant}`,
      badge: p.badge,
    })),
  },
];

export default function Header() {
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const desktopProductsMenuId = useId();
  const mobileMenuId = useId();
  const mobileProductsPanelId = useId();

  // Determine if we should show transparent header
  const isTransparent = location.pathname === "/" && !isAfterHero;

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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setIsProductsOpen(false);
    closeMobileMenu();
  };

  const handleNavClick = (target, afterNavigate) => (event) => {
    event.preventDefault();

    const scrollToTarget = () => {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/", { state: { target } });
      afterNavigate?.();
      return;
    }

    scrollToTarget();
    afterNavigate?.();
  };

  useEffect(() => {
    let observer;
    let retryId;

    // For non-home pages, keep solid header
    if (location.pathname !== "/") {
      setIsAfterHero(true);
      return () => {
        if (retryId) clearTimeout(retryId);
      };
    }

    // For home page, start transparent
    setIsAfterHero(false);

    const setupObserver = () => {
      const heroEl = document.querySelector("#hero");
      if (!heroEl) return false;

      observer = new IntersectionObserver(
        ([entry]) => {
          // Hero is visible when it's intersecting and top is above viewport bottom
          const heroIsVisible =
            entry.isIntersecting && entry.intersectionRatio > 0;
          setIsAfterHero(!heroIsVisible);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: [0, 0.1], // Trigger at start and when 10% visible
        }
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
  }, [location.pathname]);

  const shellClasses =
    "sticky top-0 z-[100] border-b transition-all duration-300";
  const bgClasses = isTransparent
    ? "bg-white/5 backdrop-blur-md border-white/10 text-white shadow-sm"
    : "bg-white/95 backdrop-blur-xl border-gray-200 shadow-lg";

  const linkBase =
    "relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const linkColors = isTransparent
    ? "text-white hover:bg-white/20 focus-visible:ring-white/40"
    : "text-gray-900 hover:bg-gray-100 focus-visible:ring-blue-500";
  const underlineClasses =
    "after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:rounded-full after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100";
  const underlineColor = isTransparent ? "after:bg-white" : "after:bg-blue-600";

  return (
    <header className={`${shellClasses} ${bgClasses}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-3 font-heading">
        <div className="flex w-full items-center gap-4">
          <div className="flex flex-shrink-0 items-center gap-3">
            <img
              src={canImage}
              alt="Energy can"
              className="h-12 w-auto object-contain drop-shadow"
            />

            <div className="leading-tight">
              <p
                className={`text-xl font-black tracking-wide transition-colors ${
                  isTransparent ? "text-white" : "text-gray-900"
                }`}
              >
                Life{" "}
                <span
                  className={isTransparent ? "text-blue-400" : "text-blue-600"}
                >
                  Food
                </span>
              </p>
              <p
                className={`text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition-colors ${
                  isTransparent ? "text-white/70" : "text-gray-600"
                }`}
              >
                Beverage Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <nav
              className="hidden flex-1 justify-end lg:flex"
              aria-label="Main navigation"
            >
              <div
                className={`flex items-center gap-1 rounded-full border px-2 py-1 shadow-lg backdrop-blur-xl transition-all ${
                  isTransparent
                    ? "border-white/20 bg-white/10"
                    : "border-gray-200 bg-white/90"
                }`}
              >
                <a
                  href="#home"
                  onClick={handleNavClick("#hero")}
                  className={`group ${linkBase} ${linkColors} ${underlineClasses} ${underlineColor}`}
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
                    className={`group inline-flex items-center gap-1 ${linkBase} ${linkColors} ${underlineClasses} ${underlineColor} ${
                      isProductsOpen ? "after:opacity-100" : ""
                    }`}
                  >
                    <span className="pr-1">Products</span>
                    <HiOutlineChevronDown
                      className={`transition-transform duration-200 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={desktopProductsMenuId}
                    role="menu"
                    onMouseEnter={openProducts}
                    onMouseLeave={closeProducts}
                    className={`absolute left-0 right-auto mt-3 w-72 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out ${
                      isTransparent
                        ? "border-white/20 bg-gray-900/95"
                        : "border-gray-200 bg-white/95"
                    } ${
                      isProductsOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="p-2">
                      {productCategories.map((category) => (
                        <div key={category.label} className="mb-3 last:mb-0">
                          <p
                            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider ${
                              isTransparent ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {category.label}
                          </p>
                          <div className="space-y-1">
                            {category.products.map((product) => (
                              <button
                                key={product.id}
                                role="menuitem"
                                onClick={() => handleProductClick(product.id)}
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                                  isTransparent
                                    ? "text-white hover:bg-white/10"
                                    : "text-gray-900 hover:bg-blue-50"
                                }`}
                              >
                                <span>{product.label}</span>
                                {product.badge && (
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                                      isTransparent
                                        ? "bg-white/20 text-white"
                                        : "bg-blue-100 text-blue-700"
                                    }`}
                                  >
                                    {product.badge}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#about"
                  onClick={handleNavClick("#about")}
                  className={`group ${linkBase} ${linkColors} ${underlineClasses} ${underlineColor}`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick("#contact")}
                  className={`group ${linkBase} ${linkColors} ${underlineClasses} ${underlineColor}`}
                >
                  Contact
                </a>
              </div>
            </nav>
            <button
              type="button"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all lg:hidden ${
                isTransparent
                  ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              }`}
              onClick={handleMobileToggle}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <HiOutlineMenuAlt3 className={`h-6 w-6 transition`} />
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
          <div className="px-4 pb-4">
            <div
              className={`mt-4 space-y-2 rounded-3xl border p-4 shadow-brand backdrop-blur ${
                isTransparent
                  ? "border-white/20 bg-gray-900/95 text-white"
                  : "border-gray-200 bg-white/95 text-gray-900"
              }`}
            >
              <a
                href="#home"
                onClick={handleNavClick("#home", closeMobileMenu)}
                className={`block rounded-2xl px-4 py-3 text-base font-semibold ${
                  isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
              >
                Home
              </a>

              <div
                className={`rounded-2xl ${
                  isTransparent ? "bg-white/5" : "bg-gray-100"
                }`}
              >
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
                  className={`space-y-3 overflow-hidden px-4 pb-3 transition-all ${
                    isProductsOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  {productCategories.map((category) => (
                    <div key={category.label} className="space-y-1">
                      <p
                        className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                          isTransparent ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {category.label}
                      </p>
                      {category.products.map((product) => (
                        <button
                          key={product.id}
                          role="menuitem"
                          onClick={() => {
                            handleProductClick(product.id);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium ${
                            isTransparent
                              ? "hover:bg-white/10"
                              : "hover:bg-white"
                          }`}
                        >
                          <span>{product.label}</span>
                          {product.badge && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                                isTransparent
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {product.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#about"
                onClick={handleNavClick("#about", closeMobileMenu)}
                className={`block rounded-2xl px-4 py-3 text-base font-semibold ${
                  isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                onClick={handleNavClick("#contact", closeMobileMenu)}
                className={`block rounded-2xl px-4 py-3 text-base font-semibold ${
                  isTransparent ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
