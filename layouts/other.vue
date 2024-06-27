<template>
    <div class="other">
        <h2 class="section-title"><slot name="sub-sectionTitle">{{ PAGE_TITLE }}</slot></h2>
        <slot />
        <ContactParts />
    </div>
</template>

<style>
/* ランディングページ　レイアウト */
.other .section-title{
    padding-top: 10vh;
}


</style>