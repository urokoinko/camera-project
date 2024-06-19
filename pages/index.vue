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
        top: '-200px',
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'top 30% center',
            end: 'top -500px top',
            scrub: true,
            // markers: true,
        }
    });

    $gsap.to('.section03', {
        // アニメーション終了時
        height: '-0px',
        top: '-300px',
        scrollTrigger: {
            trigger: '.section03-height',
            start: 'top 50% center',
            end: 'top -200px top',
            scrub: true,
            markers: true,
        }
    });





});

</script>

<template>
    <HeaderParts />
    <MainSlide />
    <div class="scrollAnime"></div>

    <div class="section01">
        <MainContents />
    </div>
    
    <div class="section02">
        <div class="section02-height">
            
            <Bgimg01 class=""/>
        </div>
    </div>
    <!-- <div class="scrollAnime-bottom"></div> -->
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
.section-title {
    font-family: var(--font_title);
    text-align: center;
    font-size: 36px;
}

/* 背景　スクロールアニメーション01 */
.section01 {
    position: relative;
    z-index: 10;
    padding-bottom: 100px;
}

.scrollAnime {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 5;
    left: 0;
    background-color: #fff;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

.section02 {
    position: relative;
    height: 1500px;
    
}

.section02-height {
    position: relative;
    margin: 0;
    width: auto;
    height: 100vh;
    display: block;
}
.section03-height {
    position: relative;
    margin: 0;
    
}

.section03{
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100vh;
}



/* 背景　スクロールアニメーション02 */



/* モバイル設定 */
@media (max-width:430px) {
    .section-title {
        font-size: 20px;
    }
}
</style>