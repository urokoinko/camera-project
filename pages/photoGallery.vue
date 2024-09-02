<script setup>
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps({
    options: Object,
})

//＝＝＝ 写真
const photograph = ref([
    {
        photoURL: '/public/img/A7301776.jpg',
        photoKinds: 'familyPhoto',
        fancyboxNum: 'group1'
    },
    {
        photoURL: '/public/img/A7301715.jpg',
        photoKinds: 'familyPhoto',
        fancyboxNum: 'group1'
    },
    {
        photoURL: '/public/img/A7301838.jpg',
        photoKinds: 'familyPhoto',
        fancyboxNum: 'group1'
    },
])

onMounted(() => {
    const opts = props.options || {}
    NativeFancybox.bind('[data-fancybox]', opts)

    return () => {
        NativeFancybox.destroy()
    }
})

const PAGE_TITLE = "写真ギャラリー";

definePageMeta({
    layout: false
});


import Muuri from 'muuri';
import { onMounted } from "vue";
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

    //＝＝＝並び替えボタン設定
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


    //＝＝＝ Fancyboxの設定
    Fancybox.bind('[data-fancybox]', {});
    $('a[data-fancybox]').fancybox({
        thumbs: {
            autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
        },
    });

});

</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>

    <li v-for="photo in photograph " :key="photo.photoURL">
        {{ photo.photoURL }}
        {{ photo.photoKinds }}
        {{ photo.fancyboxNum }}
        <img src=photo.photoURL alt="">

    </li>

    <ul class="sort-btn">
        <li class="allPhoto active">全て</li>
        <li class="familyPhoto">家族写真</li>
        <li class="bridalPhoto">ブライダル</li>
        <li class="portraitPhoto">ポートレート</li>
    </ul>

    <ul class="grid">
        <li class="active item familyPhoto">
            <div class="item-content">
                <a href="/public/img/A7301776.jpg" data-fancybox="group1" data-caption="グループ1キャプション"><img
                        src="/public/img/A7301776.jpg" alt=""></a>
            </div>
        </li>


        <li class="active item portraitPhoto">
            <div class="item-content">
                <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                    data-fancybox="group3" data-caption="グループ3キャプション"><img
                        src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                        alt=""></a>
            </div>
        </li>

        <li class="active item portraitPhoto">
            <div class="item-content">
                <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                    data-fancybox="group3" data-caption="グループ3キャプション"><img
                        src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                        alt=""></a>
            </div>
        </li>
    </ul>

</template>

<style>
/*==================================================
ギャラリーのためのcss
===================================*/

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
    /*ボタンに現在地＝activeというクラス名がついたら背景色を変更*/
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
    width: calc(100% / 3);
    /*横並びで3つ表示*/
    z-index: 1;
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
@media only screen and (max-width: 768px) {
    .item {
        width: 49.5%;
        /*横並びで2つ表示*/
    }
}

/*＝＝＝fancyboxサムネイル背景と画像選択時の枠線の指定*/
.fancybox-thumbs {
    background: transparent !important;
}

.fancybox-thumbs__list a:before {
    border: 6px solid #FA999B;
}


/*========= レイアウトのためのCSS ===============*/
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.grid a {
    color: #333;
    display: block;
    height: auto;
    /* width: calc(100vw / 3); */
}

a:hover,
a:active {
    text-decoration: none;
}

h1 {
    text-align: center;
    font-size: 6vw;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 30px 0;
}

p {
    margin: 0 10px 10px 10px;
    word-wrap: break-word;
}
</style>