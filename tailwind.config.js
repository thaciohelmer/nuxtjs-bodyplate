/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/components/*.{vue,ts}', './src/layouts/*.{vue,ts}', './src/composables/*.{vue,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif']
            }
        }
    },
    plugins: [require('tailwindcss-primeui'), require('tailwind-scrollbar')]
}
