<script setup>

</script>

<template>
<div class="main-slide">
    <div class="mainSlide-inner">
        <img src="../assets/img/A7409484.jpg" alt="">
    </div>
    <div class="main-catch">
        <div class="m-c-img"></div>
        <p><span>思い出</span>は、日々の流れにまぎれてしまうから</p>
        <p>１度しか来ない大切なひとときを、<span>大切な人</span>と振り返れるように</p>
        <p><span>かたち</span>にして残しませんか？</p>
    </div>
</div>


</template>

<style scoped>
/* メインスライドショー */
.mainSlide-inner{
    width: auto;
    max-height: 1000px;
}
/* メインキャッチコピー */
.main-slide{
    position: relative;
}
.main-catch{
    position: absolute;
    bottom: -150px;
    right: 0;
    width: 80%;
    padding: 65px;
    font-family: var(--font_catch);
    font-size: 28px;
    background-color: rgba(255, 255, 255, 0.6);

}
.m-c-img{
    position: relative;
}
.m-c-img::before{
    position: absolute;
    top: -100px;
    left: -100px;
    content: '';
    width: 200px;
    height: 200px;
    background: url(../assets/img/camera_saite_pic2.png) no-repeat;
    background-size: contain;
}
.m-c-img::after{
    position: absolute;
    content: '';
    top: 20px;
    right: 70px;
    width: 300px;
    height: 300px;
    background: url(../assets/img/camera_saite_pic.png) no-repeat;
    background-size: contain;
}
.main-catch  p span{
    font-size: 48px;
}
</style>