<script setup>

const { $gsap } = useNuxtApp()


onMounted(() => {

    let tl = $gsap.timeline({

        defaults:{
            duration: 900
        },
        scrollTrigger: {
            trigger: '.bg-img02',
            scrub: true,
            start: '+=1',
            end: '+=1500',
            pin: !0,
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
        <div class="bg-img02-images" >
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