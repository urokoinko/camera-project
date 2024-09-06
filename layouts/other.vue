<template>
    <div class="other">
        <h2 class="section-title sub-title">
            <slot name="sub-sectionTitle"></slot>
        </h2>
        <slot />
    </div>
</template>

<style>
/* ランディングページ　レイアウト */
.other{
    position: relative;
    background: var(--color_yellow);
    z-index: -2;
}
.other .section-title {
    padding-top: 150px;
    padding-bottom: 100px;
}

.sub-title {
    position: relative;
}

.sub-title::before {
    position: absolute;
    top: 140px;
    left: 58vw;
    content: "";
    width: 90px;
    height: 90px;
    background: url(../assets/img/camera_site_mPic2.svg) no-repeat;
    background-size: contain;
    z-index: -1;

}

/* レスポンシブ設定 */
@media (max-width:800px) {
    .other .section-title {
        padding-top: 120px;
    }
    .sub-title::before {
    top: 120px;
        width: 60px;
        height: 60px;
    }
}

@media (max-width:430px) {
    .other .section-title {
        padding-top: 100px;
    }
    .sub-title::before {
    top: 100px;
    width: 40px;
        height: 40px;
    }
}
</style>