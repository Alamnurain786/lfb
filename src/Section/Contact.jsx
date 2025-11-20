import { useState } from "react";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuInstagram,
  LuFacebook,
  LuYoutube,
} from "react-icons/lu";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!formValues.name.trim()) nextErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formValues.email))
      nextErrors.email = "Valid email required.";
    if (!formValues.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!formValues.message.trim()) nextErrors.message = "Tell us a bit more.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    console.log("Contact form payload", formValues);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#06111f,_#02060b)] py-20 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,255,209,0.08),rgba(255,92,182,0.08))]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(2,8,13,0.55)] backdrop-blur-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Contact
          </p>
          <h2 className="mt-2 text-4xl font-heading font-semibold">
            Let’s shake up something new
          </h2>
          <p className="mt-4 text-white/75">
            Drop a note for partnerships, distribution, or to rave about your
            favorite sip. Our crew replies within 24h.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="rounded-2xl bg-white/10 p-3 text-lg text-teal-200">
                <LuMapPin />
              </span>
              <p className="text-white/90">
                Life Food & Beverage
                <br />
                Lainchau Naxal, Kathmandu, Nepal
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/10 p-3 text-lg text-teal-200">
                  <LuPhone />
                </span>
                <p className="text-white/90">+977 01-4001144</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/10 p-3 text-lg text-teal-200">
                  <LuMail />
                </span>
                <p className="text-white/90">info@lifefood.com.np</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-white/80">
            <a
              href="https://www.instagram.com/lifefoodnepal/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white"
            >
              <LuInstagram /> Instagram
            </a>
            <a
              href="https://www.facebook.com/lifefoodnepal/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white"
            >
              <LuFacebook /> Facebook
            </a>
            <a
              href="https://www.instagram.com/lifefoodnepal/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white"
            >
              <SiTiktok /> TikTok
            </a>
            <a
              href="https://www.youtube.com/watch?v=ieRDZPomOFw"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white"
            >
              <LuYoutube /> YouTube
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-white/10 bg-white p-8 text-slate-900 shadow-[0_30px_80px_rgba(2,8,13,0.45)]"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Say hello</h3>
          <p className="mt-1 text-sm text-slate-500">
            Your message lands straight in our community inbox.
          </p>

          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              {errors.name && (
                <span className="mt-1 block text-xs text-rose-600">
                  {errors.name}
                </span>
              )}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              {errors.email && (
                <span className="mt-1 block text-xs text-rose-600">
                  {errors.email}
                </span>
              )}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Phone number
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              {errors.phone && (
                <span className="mt-1 block text-xs text-rose-600">
                  {errors.phone}
                </span>
              )}
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Message
              <textarea
                rows="4"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-rose-600">
                  {errors.message}
                </span>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] transition hover:bg-slate-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
