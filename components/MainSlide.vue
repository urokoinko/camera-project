<script setup>

</script>

<template>
    <div class="main-slide">
        <div class="mainSlide-inner">
            <img src="../assets/img/A7409484.jpg" alt="">
        </div>
        <div class="main-catch">
            <div class="m-c-img"></div>
            <p><span>思い出</span>は、<br class="m-br">日々の流れに<br class="m-br">まぎれてしまうから</p>
            <p>１度しか来ない大切なひとときを、<span>大切な人</span>と<br class="m-br">振り返れるように</p>
            <p><span>かたち</span>にして残しませんか？</p>
        </div>
    </div>


</template>

<style scoped>
/* メインスライドショー */
.mainSlide-inner {
    width: auto;
    max-height: 1000px;
}

/* メインキャッチコピー */
.main-slide {
    position: relative;
}

.main-catch {
    position: absolute;
    bottom: -150px;
    right: 0;
    width: 80%;
    padding: 65px;
    font-family: var(--font_catch);
    font-size: 28px;
    background-color: rgba(255, 255, 255, 0.6);

}

.m-c-img {
    position: relative;
}

.m-c-img::before {
    position: absolute;
    top: -100px;
    left: -100px;
    content: '';
    width: 200px;
    height: 200px;
    background: url(../assets/img/camera_saite_pic2.png) no-repeat;
    background-size: contain;
}

.m-c-img::after {
    position: absolute;
    content: '';
    top: 20px;
    right: 70px;
    width: 300px;
    height: 300px;
    background: url(../assets/img/camera_saite_pic.png) no-repeat;
    background-size: contain;
}

.main-catch p span {
    font-size: 48px;
}
.m-br{
    display: none;
}

/* モバイル設定 */
@media (max-width:430px) {

    /* メインスライドショー */
    .main-slide-inner{
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
        font-size: 28px;
        background-color: rgba(255, 255, 255, 0.6);

    }


    .main-catch p {
        line-height: 1.2;
        font-size: 16px
        
    }

    .main-catch p span {
        font-size: 30px;
    }

    .m-c-img::before {
        top: 100px;
        left: -10px;
        transform: rotate(-80deg);
        content: '';
        width: 100px;
        height: 200px;
    }

    .m-c-img::after {
        top: 20px;
        right: -20px;
        width: 90px;
        height: 140px;
    }
    .m-br{
        display: block;
    }

}
</style>