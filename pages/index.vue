<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Bgimg02 from '../components/Bgimg02.vue';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


onMounted(() => {

    /* 背景　スクロールアニメーション01 */

    let windowSize = window.innerWidth;
    let top = '-300px';
    let end = 'bottom -300px bottom';

    if (windowSize < 430) {   //800px以下でアニメーションの開始位置を変える
        top = '-100px';
        end = 'top -500px top';
    }

    gsap.to('.scrollAnime', {
        // アニメーション終了時
        height: 0,
        top: top,
        scrollTrigger: {
            trigger: '.section02-height',
            start: 'top 40% center',
            end: 'top -500px top',
            scrub: true,
        }
    });

    gsap.to('.section03', {
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
    <form class="contact_form" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" /> 
                <div class="contact_item">
                    <label for="name">お名前</label>
                    <input type="text" id="name" name="name" autocomplete="name" />
                </div>
                <div class="contact_item">
                    <label for="email">メールアドレス</label>
                    <input type="email" id="email" name="email" autocomplete="email" />
                </div>
                <div class="contact_item">
                    <label for="message">お問い合わせ内容</label>
                    <textarea id="message" rows="12" name="message"></textarea>
                </div>
                <div class="contact_submit">
                    <button type="submit">送信</button>
                </div>
            </form>
</template>

<style>
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
    box-shadow: 0 -30px 30px -30px rgba(0, 0, 0, 0.25);
}


/* レスポンシブ設定 */
@media (max-width:430px) {
    .scrollAnime {
        height: 40vh;
    }
}
</style>