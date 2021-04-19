const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

    purge: {
        enabled: true,
        content: ['./public/*.html'],
        options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
