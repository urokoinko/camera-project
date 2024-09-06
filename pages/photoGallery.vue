<script setup>
const PAGE_TITLE = "写真ギャラリー";

definePageMeta({
  layout: false
});



//＝＝＝並び替えボタン設定
// const sortBtnLi = document.querySelectorAll('.sort-btn li');

// sortBtnLi.forEach((el) => {
// el.addEventListener('click', (f) => {			//並び替えボタンをクリックしたら
//     document.querySelector(".sort-btn .active").classList.remove('active');	//並び替えボタンに付与されているactiveクラスを全て取り除き
//     var className = f.target.className;			//クラス名を取得
//     className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする

//     let sortClass = document.querySelectorAll('.' + className[0]);
//     sortClass.forEach((el) => {
//         el.classList.add("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
//     });
//     if (className[0] == "allPhoto") {						//クラス名がallPhoto（全て）のボタンの場合は、
//         // grid.show();								//全ての要素を出す
//         grid.filter(".item");

//     } else {											//それ以外の場合は
//         grid.filter("." + className[0]); 				//フィルターを実行
//     }
// });

// })


const images = ref([
  { id: 1, url: '/_nuxt/assets/img/gallery01.jpg', class: 'leftA' },
  { id: 2, url: '/_nuxt/assets/img/gallery02.jpg', class: 'leftD' },
  { id: 3, url: '/_nuxt/assets/img/gallery03.jpg', class: 'leftC' },
  { id: 4, url: '/_nuxt/assets/img/gallery04.jpg', class: 'rightB' },
  { id: 5, url: '/_nuxt/assets/img/gallery05.jpg', class: 'rightA' },
  { id: 6, url: '/_nuxt/assets/img/gallery06.jpg', class: 'leftB' },
  { id: 7, url: '/_nuxt/assets/img/gallery07.jpg', class: 'rightC' },
  { id: 8, url: '/_nuxt/assets/img/gallery08.jpg', class: 'rightD' },
  { id: 9, url: '/_nuxt/assets/img/gallery09.jpg', class: 'leftE' },
  { id: 10, url: '/_nuxt/assets/img/gallery10.jpg', class: '' },
  { id: 11, url: '/_nuxt/assets/img/gallery11.jpg', class: '' },
  { id: 12, url: '/_nuxt/assets/img/gallery12.jpg', class: '' },
  { id: 13, url: '/_nuxt/assets/img/gallery13.jpg', class: '' },
  { id: 14, url: '/_nuxt/assets/img/gallery14.jpg', class: '' },
  { id: 15, url: '/_nuxt/assets/img/gallery15.jpg', class: '' },
  { id: 16, url: '/_nuxt/assets/img/gallery16.jpg', class: '' },
  { id: 17, url: '/_nuxt/assets/img/gallery17.jpg', class: '' },
  { id: 18, url: '/_nuxt/assets/img/gallery18.jpg', class: '' },
  { id: 19, url: '/_nuxt/assets/img/gallery19.jpg', class: '' },
  { id: 20, url: '/_nuxt/assets/img/gallery20.jpg', class: '' },
  { id: 21, url: '/_nuxt/assets/img/gallery21.jpg', class: '' },
  { id: 22, url: '/_nuxt/assets/img/gallery22.jpg', class: '' },
]);

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
  <div class="gallerypic">
    <div v-for="image in images" :class="image.class">
      <div class="item">
          <img :src="image.url" alt="">
        </div>
      </div>
  </div>
</template>

<style scoped>
/*==================================================
ギャラリーのためのcss
===================================*/



.gallerypic {
  display: grid;
  grid-template-areas: 
    "leftA leftA rightA"
    "leftA leftA rightA"
    "leftB rightB rightB"
    "leftB rightB rightB"
    "leftC leftC rightC"
    "leftD leftD rightC"
    "leftD leftD rightD"
    "leftE leftE rightD"
    ;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  gap: 10px;
}

.item{

  object-fit: cover;

}

.leftA{
  grid-area: leftA;
}
.leftB{
  grid-area: leftB;
}
.leftC{
  grid-area: leftC;
}
.leftD{
  grid-area: leftD;
}
.leftE{
  grid-area: leftE;
}

.rightA{
  grid-area: rightA;
}
.rightB{
  grid-area: rightB;
}
.rightC{
  grid-area: rightC;
}
.rightD{
  grid-area: rightD;
}



/*＝＝＝並び替えボタンのCSS*/
.sort-btn {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 20px;
  margin-top: 10vh;
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

/*横幅が480px以下になった際の指定*/
@media only screen and (max-width: 480px) {
  .sort-btn {
    justify-content: space-between;
  }

  .sort-btn li {
    width: 48%;
    margin: 0 0 10px 0;
    text-align: center;
  }
}
</style>