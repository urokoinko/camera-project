<script setup lang="ts">
useHead({
    title: '出張カメラマン',
})

import { gsap } from 'gsap';
const { $gsap } = useNuxtApp()
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Bgimg02 from '../components/Bgimg02.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


onMounted(() => {

    /* 背景　スクロールアニメーション01 */

    let windowSize = window.innerWidth;
    let top = '-300px';
    let end = 'bottom -500px bottom';

    if (windowSize < 430) {   //800px以下でアニメーションの開始位置を変える
        top = '-100px'
        end = 'bottom bottom';
    }

    $gsap.to('.scrollAnime', {
        // アニメーション終了時
        height: 0,
        top: '-300px',
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'top 40% center',
            end: 'top -500px top',
            scrub: true,
        }
    });

    $gsap.to('.section03', {
        // アニメーション終了時
        // height: ,
        top: top,
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'center center',
            end: end,
            scrub: true,
        }
    });



    // ページトップに戻る
    const pageTopBtn = document.getElementById('page-top-btn');

    pageTopBtn.addEventListener('click', () => {

        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    })


});

</script>

<template>
    <div class="site">
        <div class="header-section">
            <HeaderParts />
        </div>
        <div class="slide-section">
            <MainSlide />
        </div>
        <div class="scrollAnime"></div>
        <div class="section01">
            <MainContents />
        </div>
        <div class="section02">
            <div class="section02-height">
                <Bgimg01 />
            </div>
        </div>
        <div class="section03">
            <div class="section03-height">
                <ProfileParts />
            </div>
        </div>
        <div class="section04">
            <Bgimg02 />
        </div>
        <QandAParts />
        <ContactParts />
        <div class="fp">
            <FooterPart />
            <button class="page-top" id="page-top-btn">
                <img src="../assets/img/page_top.svg" alt="">
            </button>
        </div>
    </div>
</template>

<style>
.site {
    overflow: hidden;
}

.section {
    position: relative;
}

.section__pin {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
}

.section-title {
    font-family: var(--font_title);
    text-align: center;
    font-size: 36px;
}

.slide-section {
    position: relative;
    z-index: 100;
}

/* 背景　スクロールアニメーション01 */
.section01 {
    position: relative;
    z-index: 10;
    padding-bottom: 100px;
    background-color: #fff;
}

.scrollAnime {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 5;
    left: 0;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.25);
}

.section02 {
    position: relative;
    width: auto;
    height: 100%;
}

/* 背景　スクロールアニメーション01 */

.section03 {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 60vh;
    background-color: #fff;
    padding-top: 200px;
    padding-bottom: 200px;
    box-shadow: 0 -30px 30px -30px rgba(0, 0, 0, 0.25);
}


/* ページトップボタン */
.fp {
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


/* モバイル設定 */

@media (max-width:800px) {
    .section-title {
        font-size: 26px;
    }
}

@media (max-width:430px) {
    .section-title {
        font-size: 20px;
    }

    .section02 {
        width: auto;
        max-height: 700px;
    }

    .scrollAnime {
        height: 50vh;
    }
}
@media (max-width:390px) {
    .section02 {
        width: auto;
        height: 90vh;
    }
}
</style>