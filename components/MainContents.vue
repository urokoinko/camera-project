<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
const {$gsap} = useNuxtApp()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(()=>{



        $gsap.fromTo(
            '.contents-box01' , // アニメーションさせる要素
            {
                y: 300, // アニメーション開始前の縦位置(下に100px)
                autoAlpha: 0, // アニメーション開始前は透明
            },
            {
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
                duration: 1,
                ease:'power1.out',
                scrollTrigger: {
                    trigger: ".contents-box01", // アニメーションが始まるトリガーとなる要素
                    toggleActions: "play none none reverse", // 上スクロールで戻る
                    start: "top center", // アニメーションの開始位置
                },
            }
        );
        $gsap.fromTo(
            '.contents-box02' , // アニメーションさせる要素
            {
                y: 300, // アニメーション開始前の縦位置(下に100px)
                autoAlpha: 0, // アニメーション開始前は透明
            },
            {
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
                duration: 1.5,
                ease:'power1.out',
                scrollTrigger: {
                    trigger: ".contents-box02", // アニメーションが始まるトリガーとなる要素
                    toggleActions: "play none none reverse", // 上スクロールで戻る
                    start: "top center", // アニメーションの開始位置
                },
            }
        );
        $gsap.fromTo(
            '.contents-box03' , // アニメーションさせる要素
            {
                y: 300, // アニメーション開始前の縦位置(下に100px)
                autoAlpha: 0, // アニメーション開始前は透明
            },
            {
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
                duration: 1.5,
                ease:'power1.out',
                scrollTrigger: {
                    trigger: ".contents-box03", // アニメーションが始まるトリガーとなる要素
                    toggleActions: "play none none reverse", // 上スクロールで戻る
                    start: "top center", // アニメーションの開始位置
                },
            }
        );
        $gsap.fromTo(
            '.contents-box04' , // アニメーションさせる要素
            {
                y: 300, // アニメーション開始前の縦位置(下に100px)
                autoAlpha: 0, // アニメーション開始前は透明
            },
            {
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
                duration: 1.5,
                ease:'power1.out',
                scrollTrigger: {
                    trigger: ".contents-box04", // アニメーションが始まるトリガーとなる要素
                    toggleActions: "play none none reverse", // 上スクロールで戻る
                    start: "top center", // アニメーションの開始位置
                },
            }
        );
})



</script>

<template>
    <div class="main-contents">
        <div class="main-contents-inner" ref="main">
            <h2 class="section-title">撮影メニュー</h2>

            <div class="contents-box01 box-innerL">
                <div class="box-Lpic cb-pic">
                    <img src="../assets/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textL">

                    <h3>家族写真</h3>
                    <p>お宮参り・七五三・マタニティフォトなど、<br>ご家族の記念撮影を承ります。</p>
                    <div class="more">
                        <PartsContentsMore />
                    </div>
                </div>
            </div>
            <div class="contents-box02  box-innerR">
                <div class="box-Rpic cb-pic">
                    <img src="../assets/img/DSC00230.jpg" alt="">
                </div>
                <div class="box-textR">

                    <h3>ブライダル</h3>
                    <p>結婚式での撮影や、前撮りを承ります。</p>
                    <div class="more">
                        <PartsContentsMore />
                    </div>

                </div>

            </div>
            <div class="contents-box03  box-innerL">
                <div class="box-Lpic cb-pic">
                    <img src="../assets/img/A7303423.jpg" alt="">
                </div>
                <div class="box-textL">

                    <h3>ポートレート</h3>
                    <p>宣材写真・アーティスト写真など、<br>ご要望に沿った撮影を承ります。</p>
                    <div class="more">
                        <PartsContentsMore />
                    </div>

                </div>

            </div>
            <div class="contents-box04 box-innerR">
                <div class="box-Rpic cb-pic">
                    <img src="../assets/img/IMG_0270.jpg" alt="">
                </div>
                <div class="box-textR">

                    <h3>動画撮影</h3>
                    <p>MVや企業向けムービーなど承ります。<br>
                        行事やイベントにも対応しておりますので<br>
                        お気軽にご相談下さい。</p>
                </div>

                <div class="more">
                    <PartsContentsMore />
                </div>

            </div>

        </div>
    </div>


</template>

<style scoped>
.main-contents {
    margin-top: 410px;
}

.main-contents-inner {
    font-family: var(--font_text);

}

.contents-box01 {
    margin-top: 180px;
}

.box-innerL {
    display: flex;
    align-items: center;
    margin-bottom: 190px;
}

.box-innerR {
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 190px;
    display: flex
}


.main-contents h3 {
    font-size: 32px;
    font-weight: 500;
}

.main-contents p {
    font-size: 18px;
    font-weight: 400;
    padding-top: 25px;
    text-align: left;
}

.cb-pic {
    width: 732px;
    height: 480px;
}

.cb-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box-textL,
.box-textR {
    display: flex;
    flex-direction: column;
}

.box-textL {
    padding-left: 80px;
}

.box-textR {
    padding-right: 80px;
    text-align: right;
}

.box-Lpic {
    box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.3);
}

.box-Rpic {
    box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.3);
}

.more {
    padding-top: 40px;
}

.contents-box02 .more {
    padding-right: 30px;
}

.contents-box04 .more {
    padding-right: -30px;
    padding-left: 10px;
    padding-top: 150px;
}


/* スクロール　アニメーション */


/* モバイル設定 */
@media (max-width:430px) {
    .main-contents {
        margin-left: 5px;
        padding-right: 5px;
    }

    .main-contents h3 {
        font-size: 18px
    }

    .main-contents p {
        font-size: 16px
    }

    .box-textL,
    .box-textR {
        text-align: center;
        padding-top: 35px;
        padding-right: 0;
        padding-left: 0;
    }

    .box-innerL {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        align-items: center;
        margin-bottom: 190px;
    }

    .box-innerR {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 190px;
    }

    .contents-box01 {
        margin-top: 90px;
    }

    .box-innerL p,
    .box-innerR p {
        padding-top: 40px;
    }

    .cb-pic {
        max-width: 350px;
        max-height: 240px;
    }

    .box-Lpic {
        box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.3);
    }

    .box-Rpic {
        box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.3);
    }

    .more {
        padding-left: 50px;
    }

    .contents-box02 .more {
        padding-right: 0px;
    }

    .contents-box04 .more {
        padding-right: 0px;
        padding-left: 45px;
        padding-top: 30px;
    }

}
</style>