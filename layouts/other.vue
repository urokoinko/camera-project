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
.other {
    position: relative;
    background: var(--color_yellow);
    z-index: -2;
}

.other .section-title {
    padding-top: 80px;
    padding-bottom: 50px;
}

.sub-title {
    position: relative;
}

.sub-title::before {
    position: absolute;
    top: 70px;
    left: 58vw;
    content: "";
    width: 80px;
    height: 80px;
    background: url(../assets/img/camera_site_mPic2.svg) no-repeat;
    background-size: contain;
    z-index: -1;

}

/* レスポンシブ設定 */
@media (max-width:800px) {
    .other .section-title {
        padding-top: 70px;
    }
    .sub-title::before {
        top: 70px;
        width: 50px;
        height: 50px;
    }
}

@media (max-width:430px) {
    .sub-title::before {
        top: 70px;
        width: 40px;
        height: 40px;
    }
}
</style>