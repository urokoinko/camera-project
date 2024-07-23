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
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315"
                    src="https://www.youtube.com/embed/zOTmIxbyTAw?si=IVnGKAZCRtIyhtUX" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像撮影・編集</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315"
                    src="https://www.youtube.com/embed/zOTmIxbyTAw?si=IVnGKAZCRtIyhtUX" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像撮影・編集</p>
        </div>
        <div class="movie-content">
            <div class="mc-inner">
                <iframe class="movie-link" width="560" height="315"
                    src="https://www.youtube.com/embed/zOTmIxbyTAw?si=IVnGKAZCRtIyhtUX" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p class="mc-text">MV内映像撮影・編集</p>
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
    margin: 0 auto;
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