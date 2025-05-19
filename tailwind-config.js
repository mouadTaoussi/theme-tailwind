/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,html}",
        "./components/**/*.{vue,ts}", // <- add if needed
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
