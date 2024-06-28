<script setup>
const PAGE_TITLE = "Movie Gallery";
</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>
    <slot />
</template>