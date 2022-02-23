const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/index.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
