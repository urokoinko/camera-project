<script setup>
const PAGE_TITLE = "家族写真";

definePageMeta({
    layout: "other"
});

</script>
<template>
    <h2 class="section-title">{{ PAGE_TITLE }}</h2>
    <slot />
</template>