<template>
    <a :href="url" class="dark:text-gray-900 dark:bg-gray-200 text-slate-100 bg-gray-800 rounded-full p-2 flex items-center">
        <Component :is="icon" class="h-5 w-5 mr-2" />
        {{ title }}
    </a>
</template>

<script lang="ts">
import { IconGitHub, IconLinkedIn, IconXing } from "#components";

export default {
    components: {
        IconGitHub,
        IconLinkedIn,
        IconXing,
    },
    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>
