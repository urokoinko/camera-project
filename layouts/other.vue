<script setup>
onMounted(() => {
    // ページトップに戻る
    const pageTopBtn = document.getElementById('page-top-btn');

    pageTopBtn.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    });
});
</script>
<template>
    <div>
        <HeaderParts />
        <slot />
        <ContactParts />
        <div class="fq">
            <FooterPart />
            <button class="page-top" id="page-top-btn">
                <img src="../public/img/page_top.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style>
/* ランディングページ　レイアウト */


/* ページトップボタン */
.fq {
    position: relative;
}

.page-top {
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 1100;
}

.page-top:hover {
    opacity: 0.7;
}
</style>