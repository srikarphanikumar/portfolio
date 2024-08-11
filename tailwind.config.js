module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Arial', 'sans-serif'],
                'serif': ['Georgia', 'serif'],
                'mono': ['Courier New', 'monospace'],
                'cursive': ['Brush Script MT', 'cursive'],
                'space-mono': ['"Space Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}