<script setup>
// import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
const { $gsap } = useNuxtApp()

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



onMounted(() => {

    let tl = $gsap.timeline({

        scrollTrigger: {
            trigger: '.bg-img02',
            scrub: 0.5,
            start: 'top top',
            end: '+=1500',
            pin: 0,
            markers: true
        }
    })

    tl.to('.bg-img02 img.img01', {opacity: 0, y:-20}, "<")
    .from('img.img02', {opacity: 0, y:-20}, '<')
    .to('img.img02', {opacity: 1, y:-20}, "<");


})


</script>

<template>
    <div class="bg-img02">
        <div class="bg-img02-images">
            <img class="img01" src="../assets/img/A7306778.jpg" alt="">
            <img class="img02" src="../assets/img/A7306792.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>

.bg-img02-images {
    position: relative;
    width: auto;
    height: 100vh;
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
</style>