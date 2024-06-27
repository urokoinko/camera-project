<script setup>
const PAGE_TITLE = "家族写真";

definePageMeta({
    layout: false
});

</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>
</template>