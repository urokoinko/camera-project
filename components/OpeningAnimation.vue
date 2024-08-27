<script setup lang="ts">
import BoxJson from '~/assets/lottie/loading.json'
</script>

<template>
  <div class="centered">
    <ClientOnly>
      <Vue3Lottie :animationData="BoxJson" :width="150" :height="150" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.centered {
  height: 100svh;
  display: grid;
  place-items: center;
}
</style>