<script setup lang="ts">
import type { TransitionProps } from 'vue'

const {$gsap: gsap} = useNuxtApp()

useHead({
  link:[
  {
    rel:"preconnect",
    href:"https://fonts.gstatic.com"
  },
  {
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Zen+Kaku+Gothic+New:wght@700&family=Zen+Maru+Gothic:wght@400;500&display=swap"
  }
  ],

})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.zen-kaku-gothic-new-bold {
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-weight: 700;
  font-style: normal;
}
.zen-maru-gothic-regular {
  font-family: "Zen Maru Gothic", serif;
  font-weight: 400;
  font-style: normal;
}

.zen-maru-gothic-medium {
  font-family: "Zen Maru Gothic", serif;
  font-weight: 500;
  font-style: normal;
}


.kiwi-maru-regular {
  font-family: "Kiwi Maru", serif;
  font-weight: 400;
  font-style: normal;
}


</style>