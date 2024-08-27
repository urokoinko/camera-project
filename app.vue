<script setup lang="ts">
const SITE_TITLE = "出張カメラマン";


useHead({
  titleTemplate: (titleChunk: string | undefined): string => {
    let title = SITE_TITLE;
    if (titleChunk != undefined) {
      title = `document.getElementById{titleChunk}｜document.getElementById{SITE_TITLE}`;
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
      href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Noto+Sans+JP:wght@500&family=Zen+Maru+Gothic:wght@400;500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&&display=swap"
    }
  ],
});

const isOpening = ref(true)
const durationMs = 3000

console.log(isOpening)

onMounted(() => {

  setTimeout(() => {
    isOpening.value = false
  }, durationMs)

  const pageTopBtn = document.getElementById('page-top-btn');



  function PageTopAnime() {

    // ページトップボタンの出現

    var scroll = window.scrollY;
    if (scroll >= 200) {    //上から200pxスクロールしたら
      pageTopBtn?.classList.remove('DownMove');   //#page-topについているDownMoveというクラス名を除く
      pageTopBtn?.classList.add('UpMove');    //#page-topについているUpMoveというクラス名を付与
    } else {
      if (pageTopBtn?.classList.contains('UpMove')) {   //すでに#page-topにUpMoveというクラス名がついていたら
        pageTopBtn.classList.remove('UpMove');    //UpMoveというクラス名を除き
        pageTopBtn.classList.add('DownMove');   //DownMoveというクラス名を#page-topに付与
      }
    }
  };
  // // 画面をスクロールをしたら動かしたい場合の記述
  window.addEventListener('scroll', function () {
    PageTopAnime();   /* スクロールした際の動きの関数を呼ぶ*/

  })


  // ページトップに戻る

  pageTopBtn?.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
})
</script>

<template>
  <div class="site" id="site">
    <transition>
      <OpeningAnimation v-if="isOpening" />
      <main v-else>
        <HeaderParts />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <div class="fq">
          <FooterPart />
          <button class="page-top" id="page-top-btn">
            <img src="./public/img/page_top.svg" alt="page-top">
          </button>
        </div>
      </main>
    </transition>
  </div>
</template>

<style>
/* ページトップボタン */
.fq {
  position: relative;
}

.page-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1100;
  opacity: 0;
}

.page-top:hover {
  opacity: 0.7;
}

.section-title {
  font-family: var(--font_title);
  text-align: center;
  font-size: var(--fz_28px);
  font-weight: 500;
}

/*　上に上がる動き　*/

.page-top.UpMove {
  animation: UpAnime 0.5s forwards;
}

@keyframes UpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/*　下に下がる動き　*/

.page-top.DownMove {
  animation: DownAnime 0.5s forwards;
}

@keyframes DownAnime {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 1;
    transform: translateY(100px);
  }
}

/* レスポンシブ設定 */
@media (max-width:430px) {
  .section-title {
    font-size: 20px;
  }

  .page-top {
    width: 50px;
  }
}
</style>
