<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin } from 'gsap/all';
const { $gsap } = useNuxtApp()

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

onMounted(() => {

    // ふわっと現れるアニメーション
    const contents = document.querySelectorAll('.box-inner');
    const contentsArray = $gsap.utils.toArray(contents);

    contentsArray.forEach((content) => {

        $gsap.fromTo(
            content, // アニメーションさせる要素
            {
                y: 300, // アニメーション開始前の縦位置(下に100px)
                autoAlpha: 0, // アニメーション開始前は透明
            },
            {
                y: 0, // アニメーション後の縦位置(上に100px)
                autoAlpha: 1, // アニメーション後に出現(透過率0)
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: content, // アニメーションが始まるトリガーとなる要素
                    toggleActions: "play none none reverse", // 上スクロールで戻る
                    start: "bottom bottom", // アニメーションの開始位置
                },
            }
        );
    });

    // スクロールに合わせて葉っぱが動くアニメーション

    $gsap.set('#motionSVG', { scale: 0.85, autoAlpha: 1 });
    $gsap.set('#leaf', { transformOrigin: '50% 50%', scaleX: -1 });

    let getProp = $gsap.getProperty('#motionSVG'),
        flippedX = false,
        flippedY = false;

    $gsap.to('#motionSVG', {
        scrollTrigger: {
            trigger: '#motionPath',
            start: 'top center',
            end: 'bottom center',
            scrub: 0.7,
            onUpdate: self => {
                let rotation = getProp('rotation'),
                    flipY = Math.abs(rotation) > 90,
                    flipX = self.direction === 1;

                if (flipY !== flippedY || flipX !== flippedX) {
                    $gsap.to('#leaf', { scaleY: flipY ? -1 : 1, scaleX: flipX ? -1 : 1, duration: 0.25 });
                    flippedY = flipY;
                    flippedX = flipX;
                }
            }
        },
        duration: 10,
        ease: pathEase('#motionPath', { smooth: true }),
        immediateRender: true,
        motionPath: {
            path: '#motionPath',
            align: '#motionPath',
            alignOrigin: [0.5, 0.5],
            autoRotate: 0
        }
    });

    function pathEase(path, config = {}) {
        let axis = config.axis || "y",
            precision = config.precision || 1,
            rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath($gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
            useX = axis === "x",
            start = rawPath[0][useX ? 0 : 1],
            end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)],
            range = end - start,
            l = Math.round(precision * 200),
            inc = 1 / l,
            positions = [0],
            a = [],
            minIndex = 0,
            smooth = [0],
            minChange = (1 / l) * 0.6,
            smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
            fullSmoothRange = smoothRange * 2,
            getClosest = p => {
                while (positions[minIndex] <= p && minIndex++ < l) { }
                a.push(a.length && ((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc));
                smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
            },
            i = 1;
        for (; i < l; i++) {
            positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
        }
        positions[l] = 1;
        for (i = 0; i < l; i++) {
            getClosest(i / l);
        }
        a.push(1); // must end at 1.
        if (smoothRange) { // smooth at the necessary indexes where a small difference was sensed. Make it a linear change over the course of the fullSmoothRange
            smooth.push(l - fullSmoothRange + 1);
            smooth.forEach(i => {
                let start = a[i],
                    j = Math.min(i + fullSmoothRange, l),
                    inc = (a[j] - start) / (j - i),
                    c = 1;
                i++;
                for (; i < j; i++) {
                    a[i] = start + inc * c++;
                }
            });
        }
        return p => {
            let i = p * l,
                s = a[i | 0];
            return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
        }
    }

})


</script>

<template>
    <div class="main-contents">

        <h2 class="section-title">撮影メニュー</h2>
        <div class="main-contents-inner">

            <div class="contents-box01 box-innerL box-inner">
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
            <div class="contents-box02  box-innerR box-inner">
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
            <div class="contents-box03  box-innerL box-inner">
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
            <div class="contents-box04 box-innerR box-inner">
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

            <svg class="scroll-motiom" xmlns="http://www.w3.org/2000/svg" data-name="レイヤー 2"
                viewBox="0 0 1125.56 3240.95">
                <path id="motionPath" class="scroll-motiom"
                    d="M816.9.5c-414.94 35.43-542.88 134.55-552 168-32 117.33 159.36 165.33 248 165.33 93.33 0 431.12-21.67 552 162.67 320 488-736.3 542.17-829.33 576-29.33 10.67-245.55 40.28-234.67 248 16 305.33 396 325.61 517.59 339.55 178.41 20.45 202.41 28.45 319.75 71.12 88.99 32.36 178.67 130.67 186.67 216 26.97 287.64-288 402.67-416 448-123.58 43.77-245.33 34.67-261.33 117.33-16.25 83.94 71.41 141.63 194.67 208 104 56 138.49 143.37 133.33 264-2.67 62.33-43.38 133.83-293.33 256"
                    data-name="レイヤー 1" style="fill:none;stroke:#000;stroke-miterlimit:10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="motionSVG" data-name="レイヤー 2" viewBox="0 0 216.38 231.58"
                width="100px">
                <g id="leaf">
                    <path
                        d="M214.55 2.24c4.81 4.23 3.27 112.39-44.15 164.18-61.76 67.44-152.15 65.63-169 65-2.64-25.07-5.9-90.07 35-148 48.94-69.32 167-91 178.15-81.18Z"
                        style="stroke-width:0;fill:#789845" />
                    <path
                        d="M157.9 55.92c2.24 4.47-43.22 39.44-83 86.65-34 40.35-71 88.35-73.5 88.85-.5-4.5 55.5-81.5 63.5-91.81 31.86-41.08 91-87.69 93-83.69Z"
                        class="cls-2" />
                    <path
                        d="M144.83 170.87c-1.93-2.95-33.8-11.35-55.93-9.95-10.05.64-37 2-40 8 6.94.2 23-1 44.41-1.2 31.18-.29 52.34 4.4 51.52 3.15ZM173.55 96.66c-1.24-.91-11.95-4.9-35.49-3.32-17.18 1.15-23.63 3.12-29.4 7.13 7.97-1.82 17.15-.76 31.24-1.55 22.97-1.28 36.13-.43 33.65-2.26ZM75.9 127.92c2.99-3.51 1.93-18.63 1-25C75.08 90.4 64.78 64.6 63.23 66.27c-.08 1.59 4.44 17.3 6.03 26.59 4.56 26.67 5.6 36.28 6.64 35.06Z"
                        class="cls-2" />
                </g>
            </svg>



        </div>
    </div>


</template>

<style scoped>
.cls-2 {
    stroke-width: 0;
    fill: #ff9
}



.main-contents {
    position: relative;
    padding-top: 50vh;
}

.scroll-motiom {
    position: absolute;
    top: 40vh;
    z-index: -1;
    display: none;
}

.main-contents-inner {
    font-family: var(--font_text);
}

.main-contents-inner h2 {
    margin-top: 180px;
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
    width: 55vw;
    height: 35vw;
    max-width: 732px;
    max-height: 480px;
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