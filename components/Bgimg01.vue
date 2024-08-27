<template>
    <div class="bg-img01">
        <img src="../public/img/IMG_0268.jpg" alt="">
    </div>
</template>

<style scoped>
.bg-img01{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}
.bg-img01 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


@media (max-width:430px) {
    .bg-img01{
        height: 100vh;
        width: auto;
    }
    .bg-img01 img{
    width: auto;
    height: 100vh;
    object-fit: cover;
}
}
</style>