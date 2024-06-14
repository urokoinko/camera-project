<template>
<div class="more">
    <a href="#">more</a>
</div>
</template>

<style>
/* more　設定 */
.more a{
    position: relative;
    padding-left: 35px;
    font-size: 24px;
}
.more a::before{
    position: absolute;
    content: '';
    top: 15px;
    left: -15px;
    width: 180px;
    height: 60px;
    background-image: url(@/assets/img/camera_tree_line.png) ;
    background-repeat: no-repeat;
    background-size: contain;

}

/* モバイル設定 */
@media (max-width: 430px) {
    .more a{
        font-size: 20px;
    }
    .more a::before{
        top: 10px;
        left: -5px;
        width: 137px;
    }
}

</style>