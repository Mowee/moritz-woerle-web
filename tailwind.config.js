const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/index.html'],
        options: {
            keyframes: true,
        },
    },
    darkMode: 'media',
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
