import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-[150px] font-black leading-none text-blue-500 md:text-[200px]">
              404
            </h1>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
