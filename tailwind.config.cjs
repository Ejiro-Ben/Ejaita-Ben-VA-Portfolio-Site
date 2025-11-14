module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                beige: {
                    50: '#f9f7f4',
                    100: '#f4efe8',
                    200: '#e9dfd0',
                    300: '#d5c5af',
                    400: '#c0ab8f',
                    500: '#b2926f',
                    600: '#8f6f53',
                }
            },
            fontFamily: {
                serif: ['Merriweather', 'serif'],
                sans: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [],
}