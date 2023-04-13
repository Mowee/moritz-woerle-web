<template>
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
            <img class="object-cover h-full w-full"
                 sizes="(max-width: 2500px) 100vw, 2500px"
                 src="@/assets/banner_original.jpg"
                 alt="Port of Hamburg">
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
