// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        'assets': '/<rootDir>/assets',
    },
    css: ['@/assets/style.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    app: {
        buildAssetsDir: "static" // Do not use 'assets' this will lead to errors in dev mode
    },
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536,
            '3xl': 1792,
            '4xl': 2048,
            '5xl': 2304,
            '6xl': 2560,
        },
    }
})
