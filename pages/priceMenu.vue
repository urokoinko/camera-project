<script setup>
const PAGE_TITLE = "料金表";
</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>
    <div class="explain">
        <div class="explain-content">
            <div class="ec-title">出張エリアについて</div>
            <p class="ec-text">東京都・埼玉県・神奈川県・千葉県に出張します。</p>
        </div>
        <div class="explain-content">
            <div class="ec-title">お支払方法について</div>
            <p class="ec-text"></p>
        </div>
        <div class="explain-content">
            <div class="ec-title">商品のお渡し</div>
            <p class="ec-text">写真データのお渡しは、撮影から2～3日を目安としております。<br>
                レタッチをご希望のお客様については１週間程度を目安としております。
            </p>
        </div>
        <div class="explain-content">
            <div class="ec-title"></div>
            <p class="ec-text"></p>
        </div>
    </div>
</template>

<style scoped>
.explain {
    text-align: center;
    width: 70%;
    margin: 200px auto;
    border: 2px dotted #d3d3d3;
}

.explain-content {
    padding-top: 30px;
}

.ec-title {
    font-size: 16px;
}

.ec-text {
    font-size: 14px;
}
</style>