<script setup lang="ts">
const SITE_TITLE = "出張カメラマン";

useHead({
  titleTemplate:(titleChunk: strig|undefined): string =>{
        let title = SITE_TITLE;
        if(titleChunk != undefined){
          title = `${titleChunk}｜${SITE_TITLE}`;
        }
        return title
    },
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Zen+Kaku+Gothic+New:wght@700&family=Zen+Maru+Gothic:wght@400;500&display=swap"
    }
  ],
});
</script>

<template>
  <div class="site">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
