/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'jp-red': '#bc002d',
                'jp-dark': '#1a1a1a',
                'jp-paper': '#f9f7f2',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}