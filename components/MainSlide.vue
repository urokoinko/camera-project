<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {



    // スライドショーアニメーション
    const slideShow = document.querySelector('.mainSlide-inner');
    const slideShow_img = slideShow.querySelectorAll('.slide-img');
    const delay = 2;
    const duration = 5;

    const tl = $gsap.timeline({
        repeat: -1,
        delay: delay,
        defaults: {
            duration: duration,
            ease: 'power3.out'
        }
    });

    tl.to(slideShow_img[0], { opacity: 0 })
        .to(slideShow_img[1], { opacity: 1 }, '<')
        .to(slideShow_img[1], { opacity: 0 })
        .to(slideShow_img[2], { opacity: 1 }, '<')
        .to(slideShow_img[2], { opacity: 0 })
        .to(slideShow_img[0], { opacity: 1 }, '<');


});

</script>

<template>
    <div id="main-slide">
        <div class="mainSlide-inner">
            <img class="slide-img" src="../public/img/A7409484.jpg" alt="">
            <img class="slide-img" src="../public/img/A7304492.jpg" alt="">
            <img class="slide-img" src="../public/img/DSC01849.jpg" alt="">
        </div>
        <div class="main-catch">
            <div class="mc-text">
                <p><span>思い出</span>は、<br class="m-br ">日々の流れに<br class="m-br">まぎれてしまうから</p>
                <p>１度しか来ない大切なひとときを、<br class="subm-br"><span>大切な人</span>と<br class="m-br subm-br">振り返れるように</p>
                <p><span>かたち</span>にして残しませんか？</p>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* メインスライドショー */
#main-slide {
    width: auto;
    z-index: 10;
}

.mainSlide-inner {
    width: auto;
    height: 80vh;
    position: relative;
}

.slide-img {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-img:nth-child(2),
.slide-img:nth-child(3) {
    opacity: 0;
}


.mainSlide-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* メインキャッチコピー */
#main-slide {
    position: relative;
}

.main-catch {
    position: absolute;
    top: 90%;
    right: 0;
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: center;
    padding: 65px;
    font-family: var(--font_catch);
    font-size: 28px;
    background-color: rgba(255, 255, 255, 0.6);
}

.mc-text {
    position: relative;
    display: block;
    z-index: 2;
}


.mc-text::before {
    position: absolute;
    top: -100px;
    left: -10vw;
    content: '';
    width: 170px;
    height: 200px;
    background: url(../public/img/camera_site_pic2.svg) no-repeat;
    background-size: contain;
    overflow: hidden;
    z-index: -1;

}

.mc-text::after {
    position: absolute;
    content: '';
    top: 20px;
    right: 0;
    width: 170px;
    height: 300px;
    background: url(../public/img/camera_site_pic.svg) no-repeat;
    background-size: contain;
    z-index: -1;
}

.main-catch p span {
    font-size: 48px;
}

.m-br {
    display: none;
}

/* レスポンシブ設定 */



@media (max-width:1024px) {

    /* メインキャッチ */
    .main-catch {
        font-size: 20px;
        padding: 30px;
    }

    .main-catch p span {
        font-size: 40px;
    }

    .mc-text::before {
        width: 150px;
        height: 150px;
    }

    .mc-text::after {
        top: 20px;
        width: 100px;
        height: 200px;
    }

}

@media (max-width:800px) {
    .main-catch {
        font-size: 16px;
    }

    .main-catch p span {
        font-size: 36px;
    }

    .subm-br {
        display: block;
    }

    .mc-text::before {
        top: -50px;
        width: 100px;
        height: 100px;
        z-index: -1;

    }

    .mc-text {
        position: relative;
    }

    .mc-text::after {
        background: none;
        position: absolute;
        content: '';
        top: 100px;
        left: 300px;
        width: 130px;
        height: 150px;
        background: url(../public/img/camera_site_mPic2.svg) no-repeat;
        background-size: contain;
        z-index: -1;

    }

}

@media (max-width:430px) {

    /* メインスライドショー */
    .mainSlide-inner {
        height: 50vh;
    }

    .main-catch {
        top: 50vh;
        width: 75%;
    }

    .main-catch p {
        line-height: 1.2;
        font-size: 16px
    }

    .main-catch p span {
        font-size: 30px;
    }

    .mc-text::before {
        top: 200px;
        left: -15vw;
        transform: rotate(-80deg);
        content: '';
        width: 80px;
        height: 80px;
        z-index: -1;

    }

    .mc-text::after {
        top: 20px;
        left: 50vw;
        width: 90px;
        height: 120px;
        z-index: -1;

    }

    .m-br {
        display: block;
    }

}
</style>