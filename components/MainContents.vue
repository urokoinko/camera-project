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

        let windowSize = window.innerWidth;
        let start = 'bottom bottom';

        if (windowSize < 800) {   //800px以下でアニメーションの開始位置を変える
            start = 'top bottom';
        }

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
                    start: start, // アニメーションの開始位置
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
        keyframes: {
            '0%': { autoAlpha: 1 },
            '99%': { autoAlpha: 1 },
            '100%': { autoAlpha: 0 },
        },
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
                    <img src="../public/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textL">
                    <h3>家族写真</h3>
                    <p>お宮参り・七五三・マタニティフォトなど、<br>ご家族の記念撮影を承ります。</p>
                    <div class="more">
                        <NuxtLink :to="{name: 'photoGallery'}"><PartsContentsMore /></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="contents-box02  box-innerR box-inner">
                <div class="box-Rpic cb-pic">
                    <img src="../public/img/DSC00230.jpg" alt="">
                </div>
                <div class="box-textR">
                    <h3>ブライダル</h3>
                    <p>結婚式での撮影や、前撮りを承ります。</p>
                    <div class="more">
                        <NuxtLink :to="{name: 'photoGallery'}"><PartsContentsMore /></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="contents-box03  box-innerL box-inner">
                <div class="box-Lpic cb-pic">
                    <img src="../public/img/A7303423.jpg" alt="">
                </div>
                <div class="box-textL">
                    <h3>ポートレート</h3>
                    <p>宣材写真・アーティスト写真など、<br>ご要望に沿った撮影を承ります。</p>
                    <div class="more">
                        <NuxtLink :to="{name: 'photoGallery'}"><PartsContentsMore /></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="contents-box04 box-innerR box-inner">
                <div class="box-Rpic cb-pic">
                    <img src="../public/img/IMG_0270.jpg" alt="">
                </div>
                <div class="box-textR">
                    <h3>動画撮影</h3>
                    <p>MVや企業向けムービーなど承ります。<br>
                        行事やイベントにも対応しておりますので<br>
                        お気軽にご相談下さい。</p>
                    <div class="more">
                        <NuxtLink :to="{name: 'move'}"><PartsContentsMore /></NuxtLink>
                    </div>
                </div>
            </div>

            <svg class="scroll-motion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 775.17 4984.6">
                <path id="motionPath" class="scroll-motion"
                    d="M736.69.36c-122.66 120-714.73 84-702.66 326.66 5.47 110.04 437.54 50.53 501.33 172 97.33 185.34-562.23 264.03-533.33 492 24 189.33 488 264 650.67 410.67 153.57 138.46 6.25 432.18-165.33 506.67-172 74.67-561.33 266.67-434.67 566.67 85.16 201.7 284.65 236.84 381.33 248 104 12 222.67 50.67 284 144 103.68 157.78 64 424-110.67 608-154.18 162.42-703.68 89.41-592 356 41.33 98.67 234.55 90.63 413.33 152 89.33 30.67 285.33 177.33 174.67 382.67-163.75 303.83-645.33 281.33-460 618.67"
                    style="fill:none;stroke:#000;stroke-miterlimit:10" data-name="レイヤー 1" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="motionSVG" data-name="レイヤー 2" viewBox="0 0 216.38 231.58"
                width="10vw">
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
/* メインコンテンツ設定 */
.main-contents {
    position: relative;
    padding-top: 50vh;
}

/* メインコンテンツ　スクロールアニメーション */
.scroll-motion {
    position: absolute;
    top: 25vh;
    width: 100%;
    height: 120%;
    z-index: -1;
    opacity: 0;
}

.cls-2 {
    stroke-width: 0;
    fill: #ff9
}

/* メインコンテンツ　インナー */

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
    padding-right: 5vw;
}

.box-innerR {
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 190px;
    display: flex;
    padding-left: 5vw;
}

.main-contents h3 {
    font-size: 32px;
    font-weight: 500;
}

.main-contents p {
    font-size: 18px;
    font-weight: 400;
    padding-top: 25px;
}

.cb-pic {
    width: 55vw;
    aspect-ratio: 1.5 / 1;
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
    text-align: left;
    padding-left: 5vw;
}

.box-textR {
    padding-right: 5vw;
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

.box-innerR .more {
    padding-right: 30px;
}

/* レスポンシブ設定 */

@media (max-width:800px) {
    .main-contents {
        padding-top: 40vh;
        margin-left: 5vw;
        padding-right: 5vw;
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
        padding: 0;
    }

    .box-innerR {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 190px;
        padding: 0;
    }

    .contents-box01 {
        margin-top: 90px;
    }

    .box-innerL p,
    .box-innerR p {
        padding-top: 40px;
    }

    .cb-pic {
        width: 90%;
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

    .box-innerR .more {
        padding-right: 0px;
    }

    #motionSVG {
        display: none;
    }

    .scroll-motion {
        display: none;
    }
}

@media (max-width:430px) {
    .main-contents {
        padding-top: 70vh;
    }

    .cb-pic {
        max-width: 90%;
        max-height: 200px;
    }
}
</style>