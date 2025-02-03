const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                amber: colors.amber,
                green: colors.green,
                pink: colors.pink,
                gray: colors.gray
            },
            fontFamily: {
                'sans': ['Arial', 'sans-serif'],
                'serif': ['Georgia', 'serif'],
                'mono': ['Courier New', 'monospace'],
                'cursive': ['Brush Script MT', 'cursive'],
                'space-mono': ['"Space Mono"', 'monospace'],
            },
            clipPath: {
                'polygon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }
        },
    },
    plugins: [],
}