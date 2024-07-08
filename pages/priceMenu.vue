<script setup>
    const PAGE_TITLE = "料金表";
</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
        <p>料金表</p>
    </NuxtLayout>
</template>

<style scoped>
p{
    padding: 200px;
}
</style>