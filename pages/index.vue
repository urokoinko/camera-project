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

    /* 背景　スクロールアニメーション02 */

    $gsap.to('.section03', {
        // アニメーション終了時
        // height: ,
        top: '-200px',
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'center center',
            end: 'bottom -500px bottom',
            scrub: 0.5,
            markers: true,
        }
    });


});

</script>

<template>
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
    <Bgimg02 />
    <QandAParts />
    <ContactParts />
    <FooterPart />

</template>

<style>
.section{
    position: relative;
}
.section__pin{
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

.slide-section{
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
    height: 200vh;
}

.section02-height {
    position: relative;
    width: auto;
    height: 200vh;
}

/* 背景　スクロールアニメーション01 */

.section03{
    position: relative;
    z-index: 10;
    width: 100%;
    height: 60vh;
    background-color: #fff;
    padding-top: 200px;
    box-shadow: 0 -30px 30px -30px rgba(0, 0, 0, 0.25);
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
}
</style>