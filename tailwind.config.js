/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}
