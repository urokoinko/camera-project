<script setup>
useHead({
    title: '出張カメラマン',

})
    
</script>

<template>
    <HeaderParts />
    <MainSlide />
    <MainContents />
    <ProfileParts />
    <Q&AParts />
    <ContactParts />
    <FooterPart />
    
</template>

<style>
.section-title{
    font-family: var(--font_title);
    text-align: center;
    font-size: 36px;
}

/* モバイル設定 */
@media (max-width:430px) {
    .section-title{
        font-size: 20px;
    }
    
}

</style>