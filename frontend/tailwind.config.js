// frontend/tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-gray-100", "text-white", "text-blue-600", "hover:bg-blue-100"],
  theme: {
    extend: {},
  },
  plugins: [],
};
