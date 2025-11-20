export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#0F62FE",
          shell: "#F3F4F8",
          border: "#E2E6F0",
          text: "#1E1F29",
          accent: "#FF0F64",
        },
      },
      boxShadow: {
        brand: "0 10px 30px rgba(15, 98, 254, 0.12)",
      },
    },
  },
  plugins: [],
};
