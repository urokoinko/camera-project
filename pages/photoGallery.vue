<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const PAGE_TITLE = "Photo Gallery";

definePageMeta({
    layout: false
});


import Muuri from 'muuri';
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
            document.querySelector(".sort-btn .active").classList.remove("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
            var className = f.target.className;			//クラス名を取得
            className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする

            let sortClass = document.querySelectorAll('.' + className[0]);
            sortClass.forEach((el) => {
                el.classList.add("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
            });
            if (className[0] == "sort00") {						//クラス名がsort00（全て）のボタンの場合は、
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

        <!-- <ClientOnly> -->

        <ul class="sort-btn">
            <li class="sort00 active">全て</li>
            <li class="sort01">グループ1</li>
            <li class="sort02">グループ2</li>
            <li class="sort03">グループ3</li>
        </ul>

        <ul class="grid">
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/01.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/01.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/02.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/02.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/03.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/03.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/04.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/04.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/05.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/05.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/06.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/06.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/07.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/07.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/08.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/08.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/09.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/09.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/10.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/10.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/11.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/11.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/12.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/12.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/13.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/13.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/14.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/14.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/15.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/15.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/16.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/16.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/17.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/17.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/18.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/18.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/19.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/19.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/20.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/20.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/21.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/21.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/22.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/22.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/23.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/23.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/24.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/24.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/25.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/25.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/26.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/26.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/27.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション">
                        <img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/27.jpg"
                            alt="">
                    </a>
                </div>
            </li>
            <li class="active item sort01">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/28.jpg"
                        data-fancybox="group1" data-caption="グループ1キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/28.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort02">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/29.jpg"
                        data-fancybox="group2" data-caption="グループ2キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/29.jpg"
                            alt=""></a>
                </div>
            </li>
            <li class="active item sort03">
                <div class="item-content">
                    <a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                        data-fancybox="group3" data-caption="グループ3キャプション"><img
                            src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-2/img/30.jpg"
                            alt=""></a>
                </div>
            </li>
        </ul>
        <!-- </ClientOnly> -->


    </NuxtLayout>

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