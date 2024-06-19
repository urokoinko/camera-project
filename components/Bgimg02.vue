<script setup>
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
const {$gsap} = useNuxtApp()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




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
.bg-img02{

}
.bg-img02-images {
    position: relative;
    width: auto;
    height: 150vh;
    padding-top: 10vh;
}

.bg-img02-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bg-img02-images img:not(:first-child){
    position: absolute;
    top: 0;
    right: 0;
}

</style>