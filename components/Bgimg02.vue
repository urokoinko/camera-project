<script setup>
const { $gsap } = useNuxtApp()


onMounted(() => {

    let tl = $gsap.timeline({

        defaults:{
            duration: 1000
        },
        scrollTrigger: {
            trigger: '.bg-img02',
            scrub: 0.7,
            start: '+=1',
            end: '+=1200',
            pin: !0,
        }
    })

    tl.from('.bg-img02 img.img01', {opacity: 1, y:-20}, "<")
    .to('.bg-img02 img.img01', {opacity: 0, y:-20}, "<")
    .from('img.img02', {opacity: 0, y:-20}, '<')
    .to('img.img02', {opacity: 1, y:-20}, "<");


})

</script>

<template>
    <div class="bg-img02">
        <div class="bg-img02-images" >
            <img class="img01" src="../public/img/A7306778.jpg" alt="">
            <img class="img02" src="../public/img/A7306792.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>

.bg-img02-images {
    position: relative;
    width: auto;
    height: 90vh;
}

.bg-img02-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bg-img02-images img:not(:first-child) {
    position: absolute;
    top: 0;
    right: 0;
}

@media (max-width:430px) {
    .bg-img02-images img {
        height: 70vh;

    }
}
</style>