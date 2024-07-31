<script setup>
const PAGE_TITLE = "動画ギャラリー";
</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>
    <div class="movie-contents">
        <p class="movie-contents-p">これまでに携わった動画作品を掲載しております。<br>
            他にもプライベートの行事の撮影なども行っておりますので、
            お気軽にご相談ください。
        </p>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/cdYCIVnPABU?si=FdEO_U259Y-jCnb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/RVNQOnPmA6w?si=5lV88jtPe3-0fzm9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/Pn3RQtP5aaE?si=MwD57gM9uDTbxvuz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/K9hRitLC44U?si=NGbxit-z0LYAxq6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/dslH7jy1HIU?si=Z5uFJIpnEAzVcO7V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315" src="https://www.youtube.com/embed/vIFng_5RnDY?si=1BkbjDYrQXgmbxp-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像 ディレクション・撮影・編集<br>撮影：〇時間<br>編集期間:2～3日<br>費用:〇万円</p>
        </div>
    </div>
</template>

<style scoped>
/* 動画ギャラリー */
.movie-contents {
    padding-top: 100px;
    padding-bottom: 400px;
    text-align: center;
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
}
.movie-contents-p{
    font-size: var(--fz_12px);
}

.movie-content {
    margin-top: 300px;
}

.mc-text {
    padding-top: 50px;
    font-size: 16px;
    font-weight: 400;
}

.mc-inner {
    position: relative;
    padding-bottom: 56.25%;
    height: auto;
    overflow: hidden;
}

.movie-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* レスポンシブ設定 */
@media (max-width:800px) {
    .movie-contents {
        padding-top: 80px;
    }

    .movie-content {
        margin-top: 100px;
    }
}

@media (max-width:430px) {
    .movie-contents {
        padding-top: 50px;
    }

    .movie-content {
        margin-top: 70px;
    }

    .mc-text {
        padding-top: 30px;
        font-size: 14px;
    }
}
</style>