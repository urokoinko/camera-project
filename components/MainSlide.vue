<script setup>

</script>

<template>
    <div class="main-slide">
        <div class="mainSlide-inner">
            <img src="../assets/img/A7409484.jpg" alt="">
        </div>
        <div class="main-catch">
            <div class="mc-text">
                <p><span>思い出</span>は、<br class="m-br">日々の流れに<br class="m-br">まぎれてしまうから</p>
                <p>１度しか来ない大切なひとときを、<span>大切な人</span>と<br class="m-br">振り返れるように</p>
                <p><span>かたち</span>にして残しませんか？</p>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* メインスライドショー */
.main-slide {
    position: relative;
    width: auto;
    z-index: 10;
}

.mainSlide-inner img {
    width: 100%;
    /* height: 100%; */
    max-height: 1000px;
    object-fit: cover;
}

/* メインキャッチコピー */
.main-slide {
    position: relative;
}

.main-catch {
    position: absolute;
    bottom: -200px;
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
    left: -150px;
    content: '';
    width: 200px;
    height: 200px;
    background: url(../assets/img/camera_saite_pic2.png) no-repeat;
    background-size: contain;
}

.mc-text::after {
    position: absolute;
    content: '';
    top: 20px;
    right: 0px;
    width: 200px;
    height: 300px;
    background: url(../assets/img/camera_saite_pic.png) no-repeat;
    background-size: contain;
    z-index: -1;
}

.main-catch p span {
    font-size: 48px;
}

.m-br {
    display: none;
}

/* モバイル設定 */

@media (max-width:1440px) {

    /* スライドショー */
    .mainSlide-inner img {
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
}

@media (max-width:1024px) {

    /* メインキャッチ */
    .main-catch {
        bottom: -180px;
        font-size: 20px;
        width: 75%;
        padding: 40px;
    }

    .main-catch p span {
        font-size: 40px;
    }

    .mc-text::before {
        top: -100px;
        left: -100px;
        content: '';
        width: 150px;
        height: 150px;
    }

    .mc-text::after {
        top: 20px;
        right: -50px;
        width: 200px;
        height: 200px;
    }
    
}
@media (max-width:800px) {
    .main-catch{
        font-size: 16px;
    }
    .main-catch p span {
        font-size: 36px;
    }

}
@media (max-width:430px) {

    /* メインスライドショー */
    .main-slide-inner {
        width: auto;
        height: 410px;
        object-fit: cover;
    }


    .main-catch {
        top: 160px;
        right: 0;
        width: 75%;
        padding: 30px;
        font-family: var(--font_catch);
        background-color: rgba(255, 255, 255, 0.6);
    }


    .main-catch p {
        line-height: 1.2;
        font-size: 16px
    }

    .main-catch p span {
        font-size: 30px;
    }

    .mc-text::before {
        top: 100px;
        left: -10px;
        transform: rotate(-80deg);
        content: '';
        width: 100px;
        height: 200px;
    }

    .mc-text::after {
        top: 20px;
        right: -20px;
        width: 90px;
        height: 140px;
    }

    .m-br {
        display: block;
    }

}
</style>