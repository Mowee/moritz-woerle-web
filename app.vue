<template>
    <Head>
        <Title>Moritz Wörle</Title>
    </Head>

    <div class="h-screen flex flex-col-reverse xl:flex-row-reverse">
        <div class="h-2/4 xl:h-full xl:w-1/2 flex">
            <div class="m-auto font-sans text-center xl:text-left">
                <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                    Moritz Wörle
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl py-6">
                    Software developer from Hamburg, Germany
                </p>
            </div>
        </div>
        <div class="h-2/4 xl:h-full xl:w-1/2 overflow-hidden">
            <nuxt-img class="object-cover h-full w-full"
                 sizes="6xl:100vw 5xl:100vw 4xl:100vw 3xl:100vw 2xl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
                 src="/images/banner_original.jpg"
                 alt="Port of Hamburg" />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs: [
        { lang: 'en' }
    ],
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
    },
})
</script>
