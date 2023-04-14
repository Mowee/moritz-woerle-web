import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        'assets': '/<rootDir>/assets',
    },
    css: ['@/assets/style.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        buildAssetsDir: "assets"
    },
})
