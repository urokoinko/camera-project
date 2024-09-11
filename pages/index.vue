<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Bgimg02 from '../components/Bgimg02.vue';
const {$gsap} = useNuxtApp();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


onMounted(() => {

    /* 背景　スクロールアニメーション01 */

    // let windowSize = window.innerWidth;
    let top1 = '-300px';
    let end1 ='bottom -500px top'
    let end2 = 'bottom -300px bottom';

    // if (windowSize < 430) {   //430px以下でアニメーションの開始位置を変える
    //     top1 = '0px';
    //     end1 = 'top -1000px top';
    //     end2 = 'center center';
    // }

    $gsap.to('.scrollAnime', {
        // アニメーション終了時
        height: 0,
        top: top1,
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'top 40% center',
            end: end1,
            scrub: true,
        }
    });

    $gsap.to('.section03', {
        // アニメーション終了時
        // height: ,
        top: top1,
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'center center',
            end: end2,
            scrub: true,
        }
    });
});
</script>

<template>
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
    <div class="section03" id="photographer">
        <div class="section03-height">
            <ProfileParts />
        </div>
    </div>
    <div class="section04">
        <Bgimg02 />
    </div>
    <ContactParts />
</template>

<style scoped>
/* トップページ設定 */
/* スライドショー */
.slide-section {
    position: relative;
    z-index: 100;
}

/* 背景　スクロールアニメーション01 */
.section01 {
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding-bottom: 50px;
}
@media (max-width:800px) {
    .scrollAnime{
        box-shadow: none;
        opacity: 0;
    }
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

.section03 {
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding-top: 15vw;
    padding-bottom: 15vw;
    box-shadow: 0 -30px 30px -30px rgba(0, 0, 0, 0.25);
}


/* レスポンシブ設定 */
@media (max-width:430px) {
    .scrollAnime {
        height: 40vh;
    }
}
</style>