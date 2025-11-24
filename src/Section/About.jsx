import { useEffect, useMemo, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  const videoSrc = useMemo(
    () =>
      "https://www.youtube.com/embed/ieRDZPomOFw?si=AS2YBc187PTQTGkU&start=2&autoplay=0&mute=1&controls=0&rel=0&modestbranding=1&enablejsapi=1",
    []
  );

  useEffect(() => {
    if (!sectionRef.current || !iframeRef.current) return;

    const sendCommand = (func) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sendCommand("playVideo");
        else sendCommand("pauseVideo");
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#32173d,_#120817_55%)] py-20 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,103,186,0.08),rgba(82,208,255,0.08))]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 shadow-[0_25px_70px_rgba(5,5,15,0.6)]">
            <iframe
              ref={iframeRef}
              src={videoSrc}
              title="Life Food & Beverage Tour"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Take a quick tour of our Khairahani facility and see how every sip
            gets its sparkle.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.18),transparent_55%)] lg:w-1/2">
          <div className="relative flex min-h-[420px] flex-col justify-start bg-[linear-gradient(135deg,#3e1558_0%,#1c0f2d_60%)] p-8 text-left">
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0)_0%,rgba(255,95,172,0.15)_60%,rgba(82,208,255,0.2)_100%)]" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                About Us
              </p>
              <h2 className="text-4xl font-heading font-bold">
                Life Food & Beverage
              </h2>
              <p className="text-base leading-relaxed text-white/85">
                Welcome to Life Food and Beverage—your destination for fun,
                fresh, and delightfully varied drinks. From energy boosts to
                fizzy coolers, we craft each recipe with modern tech and
                hand-finished care inside our Khairahani, Chitwan plant.
              </p>
              <p className="text-base leading-relaxed text-white/85">
                Our mission is simple: break away from monotony and pour joy
                into every sip. Join us as we keep reinventing refreshment, one
                bottle at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
