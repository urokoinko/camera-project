<script setup>
import Muuri from 'muuri';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "https://cdn.jsdelivr.net/npm/muuri@0.9.5/dist/muuri.min.js";

const PAGE_TITLE = "写真ギャラリー";

definePageMeta({
  layout: false
});

const props = defineProps({
  options: Object,
})
onMounted(() => {
  const opts = props.options || {}
  NativeFancybox.bind('[data-fancybox]', opts)
  return () => {
    NativeFancybox.destroy()
  }
})

onMounted(() => {	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する
  //＝＝＝Muuriギャラリープラグイン設定
  let grid = new Muuri('.grid', {
    //アイテムの表示速度※オプション。入れなくても動作します
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }

  });

  // ＝＝＝並び替えボタン設定
  const sortBtnLi = document.querySelectorAll('.sort-btn li');

  sortBtnLi.forEach((el) => {
    el.addEventListener('click', (f) => {			//並び替えボタンをクリックしたら
      document.querySelector(".sort-btn .active").classList.remove('active');	//並び替えボタンに付与されているactiveクラスを全て取り除き
      var className = f.target.className;			//クラス名を取得
      className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする

      let sortClass = document.querySelectorAll('.' + className[0]);
      sortClass.forEach((el) => {
        el.classList.add("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
      });
      if (className[0] == "allPhoto") {						//クラス名がallPhoto（全て）のボタンの場合は、
        // grid.show();								//全ての要素を出す
        grid.filter(".item");

      } else {											//それ以外の場合は
        grid.filter("." + className[0]); 				//フィルターを実行
      }
    });

  })

})


const images = [
  { kind: 'familyPhoto', url: '/img/gallery01.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery02.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery03.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery04.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery05.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery06.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery07.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery08.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery09.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery10.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery11.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery12.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery13.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery14.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery15.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery16.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery17.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery18.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery19.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery20.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery21.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery22.jpg', group: 'g1' },
  { kind: 'familyPhoto', url: '/img/gallery23.jpg', group: 'g1' },
];


</script>

<template>
  <NuxtLayout name="other">
    <template #sub-sectionTitle>
      {{ PAGE_TITLE }}
    </template>
  </NuxtLayout>

  <ul class="sort-btn">
    <li class="allPhoto active">全て</li>
    <li class="familyPhoto">家族写真</li>
    <li class="bridalPhoto">ブライダル</li>
    <li class="portraitPhoto">ポートレート</li>
  </ul>
  <ul class="grid">
    <li v-for="img in images" class="item active" :class="img.kind">
      <div class="item-content">
        <a :href="img.url" :data-fancybox="img.group">
          <img :src="img.url" alt="">
        </a>
      </div>
    </li>
  </ul>
</template>

<style scoped>
/*＝＝＝並び替えボタンのCSS*/
.sort-btn {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 20px;
  /* margin-top: 10vh; */
}

.sort-btn li {
  background: #eee;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
}

.sort-btn li.active {
  background: #ccc;
}

/*＝＝＝Muuriのレイアウトのための調整 */
.grid {
  position: relative;
  display: block;
  /*並び替えの基準点を指定*/
  margin-bottom: 20vh;
  width: 100vw;
}

/*各画像の横幅などの設定*/
.item {
  display: block;
  position: absolute;
  width: calc((100% - 20px) / 3);
  /*横並びで3つ表示*/
  z-index: 1;
  margin: 3px;
  gap: 10px;
}

/*内側のボックスの高さが崩れないように維持*/
.item-content {
  position: relative;
  width: 100%;
  height: 100%;
}

/*画像の横幅を100%にしてレスポンシブ化*/
.grid img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
  /*画像の下にできる余白を削除*/
}

/*横幅が768px以下になった際の指定*/
@media (max-width: 768px) {
  .item {
    width: 48%;
    /*横並びで2つ表示*/
    text-align: center;
  }
}
</style>