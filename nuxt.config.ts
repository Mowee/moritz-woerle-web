
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        'assets': '/<rootDir>/assets',
    },
    css: ['@/assets/style.css'],
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Moritz Wörle',
            meta: [
                { charset: 'UTF-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
                { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon/favicon-16x16.png' },
                { rel: 'manifest', href: '/favicon/site.webmanifest' },
            ],
            bodyAttrs: {
                class: 'dark:bg-gray-900 dark:text-gray-200'
            }
        }
    },
})
