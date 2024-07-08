<script setup lang="ts">




const SITE_TITLE = "出張カメラマン";


useHead({
  titleTemplate: (titleChunk: strig | undefined): string => {
    let title = SITE_TITLE;
    if (titleChunk != undefined) {
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



onMounted(() => {
  // ページトップに戻る
  const pageTopBtn = document.getElementById('page-top-btn');

  pageTopBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
})
</script>

<template>
  <div class="site">
    <HeaderParts />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div class="fq">
            <FooterPart />
            <button class="page-top" id="page-top-btn">
                <img src="./public/img/page_top.svg" alt="">
            </button>
        </div>
  </div>
</template>

<style>
/* ページトップボタン */
.fq {
    position: relative;
}

.page-top {
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 1100;
}

.page-top:hover {
    opacity: 0.7;
}
.section-title {
  font-family: var(--font_title);
  text-align: center;
  font-size: 28px;
}

/* レスポンシブ設定 */

@media (max-width:800px) {
  .section-title {
    font-size: 22px;
  }
}

@media (max-width:430px) {
  .section-title {
    font-size: 20px;
  }
  .page-top{
    width: 50px;
  }
}
</style>
