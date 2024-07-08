<template>
    <div class="other">
        <h2 class="section-title sub-title"><slot name="sub-sectionTitle"></slot></h2>
        <slot />
    </div>
</template>

<style>
/* ランディングページ　レイアウト */
.other .section-title{
    padding-top: 10vh;
}

.sub-title{
    position:relative;
}
.sub-title::before{
    position: absolute;
    top: 10vh;
    left: 62vw;
    content: "";
    width: 90px;
    height: 90px;
    background: url(../public/img/camera_site_mPic2.svg) no-repeat;
    background-size: contain;
    z-index: -1;

}

/* レスポンシブ設定 */
@media (max-width:800px) {
    .sub-title::before{
        width: 60px;
        height: 60px;
    }
}
@media (max-width:430px) {
    .sub-title::before{
        width: 40px;
        height: 40px;
    }
}
</style>