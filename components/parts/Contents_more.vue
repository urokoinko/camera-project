<template>
    <div class="more">more</div>
</template>

<style scoped>
/* more　設定 */
.more{
    position: relative;
    padding-left: 35px;
    font-size: 24px;
}
.more::before{
    position: absolute;
    content: '';
    top: 50px;
    left: -15px;
    width: 180px;
    height: 60px;
    background: url(@/public/img/camera_tree_line.png) no-repeat;
    background-size: contain;
}

/* レスポンシブ設定 */
@media (max-width: 430px) {
    .more{
        font-size: 20px;
    }
    .more::before{
        top: 50px;
        left: 80px;
        width: 137px;
    }
}

</style>