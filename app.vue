<template>
    <Head>
        <Title>Moritz Wörle</Title>
    </Head>

    <div class="h-screen flex flex-col-reverse xl:flex-row-reverse">
        <div class="h-3/5 md:h-2/4 xl:h-full xl:w-1/2 flex">
            <div class="m-auto p-8 font-sans">
                <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    Moritz Wörle
                </h1>
                <p class="text-lg font-bold md:text-xl lg:text-2xl mt-2 md:mt-4 xl:mt-6">
                    Software developer from Hamburg, Germany
                </p>
                <ul class="mt-2">
                    <li>Working on a distributed logistic system <span class="italic">(Kotlin, GCP)</span> as tech lead of a small team at my main job.</li>
                    <li>In the past I've worked with Kotlin, Java, TypeScript, PHP.</li>
                    <li>I've started programming when I was about 12 years old because of my fascination for the Simpsons.</li>
                    <li>In my free time I still work on my fan project <a href="https://simpsons-tv.de/" class="underline hover:no-underline">SimpsonsTV</a> <span class="italic">(Kotlin, Vue.js, GCP)</span></li>
                </ul>
                <div class="mt-4 flex gap-x-3">
                    <ReferenceButton icon="IconGitHub" title="GitHub" url="https://github.com/Mowee" />
                    <ReferenceButton icon="IconLinkedIn" title="LinkedIn" url="https://www.linkedin.com/in/moritz-w%C3%B6rle-7b7a82205" />
                    <ReferenceButton icon="IconXing" title="Xing" url="https://www.xing.com/profile/Moritz_Woerle/cv" />
                </div>
            </div>
        </div>
        <div class="h-2/5 md:h-2/4 xl:h-full xl:w-1/2 overflow-hidden">
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
        class: 'dark:bg-gray-900 dark:text-gray-200 bg-slate-100 text-gray-800'
    },
})
</script>
