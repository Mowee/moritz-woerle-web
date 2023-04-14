<template>
    <a :href="url" class="dark:text-gray-900 dark:bg-gray-200 text-slate-100 bg-gray-800 rounded-full p-2 flex items-center">
        <!-- TODO: Figure out why dynamic components aren't working! -->
        <IconGitHub class="h-5 w-5 mr-2" v-if="icon === 'IconGitHub'" />
        <IconXing class="h-5 w-5 mr-2" v-if="icon === 'IconXing'" />
        <IconLinkedIn class="h-5 w-5 mr-2" v-if="icon === 'IconLinkedIn'" />
        {{ title }}
    </a>
</template>

<script lang="ts">
export default {
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
