<script setup>
import { gsap } from 'gsap';

const { $gsap } = useNuxtApp()



onMounted(() => {
    // アコーディオン設定
    const faq_headers = document.querySelectorAll('.faq-header');
    const faq_contents = document.querySelectorAll('.faq-content');

    $gsap.set(faq_contents, { height: 0 });
    // $gsap.set(faq_contents[0], {height: 'auto'});   //一つ目だけ開いておく
    // faq_headers[0].classList.add('is-active')

    faq_headers.forEach((faq_header) => {
        faq_header.addEventListener('click',
            function () {
                let faq_content = faq_header.nextElementSibling;

                // headerにis-activeがついていたら
                if (faq_header.classList.contains('is-active')) {
                    // 隣接するcontentを閉じて
                    $gsap.to(faq_content, { height: 0 });
                    // is-activeを外す
                    faq_header.classList.remove('is-active');
                } else {
                    const active_header = document.querySelector('.faq_header .is-active');
                    let delay = 0;

                    if (active_header) {
                        $gsap.to(active_header.nextElementSibling, { height: 0 });
                        active_header.classList.remove('is-active');
                        delay = 0;
                    }

                    $gsap.timeline()
                        .to(faq_content, { height: 'auto', delay: delay })
                        .add(() => {
                            faq_header.classList.add('is-active')
                        })
                }
            });

    });
})

</script>

<template>
    <div class="QandA">
        <h2 class="section-title">Q&A</h2>
        <div class="QandA-inner">
            <div class="QandA-item">
                <div class="faq-header">
                    撮影までの流れを知りたいです。
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        １、当サイトor Instagram　からご予約いただいて、撮影するお日にちを決めていきます。
                        この時ご希望の撮影場所も教えてください。<br>
                        ２、当日は撮影場所にて待ち合わせ、撮影をします。<br>
                        ３、撮影後2～3日でデータをお渡しさせていただきます。（レタッチプランの場合は1～2週間お時間いただきます。）

                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    交通費は追加でかかりますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        出張対応エリア内でしたら追加料金はかかりません。
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    追加料金は発生しますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        撮影メニューは一律料金になっております。
                        追加料金が発生することはございません。
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    キャンセル料はかかりますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        体調不良や悪天候などのやむを得ない理由でキャンセルされる場合、キャンセル料はかかりません。
                        キャンセルする場合は前日までにご連絡ください。
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    女性カメラマンはいますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        申し訳ございませんが、女性カメラマンには対応しておりません。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* アコーディオン設定 */
.QandA {
    margin: 0 auto;
    width: 80%;
    max-width: 760px;
    padding: 0 5vw;
    padding-bottom: 15vw;
}

.QandA-inner{
    font-family: var(--font_text);
    font-weight: 600;
}

.faq-header {
    background-color: #d7eee9;
    padding: 7px 20px 7px;
    cursor: pointer;
    position: relative;
    font-size: var(--fz_20px);
    margin-top: 30px;
    border-radius: 10px;
}

.faq-header::before {
    position: absolute;
    content: '';
    top: 15px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: url(../assets/img/arrow.png) no-repeat;
    background-size: contain;
    z-index: 10;
    transition: 1s;
}

/* アコーディオン　開いている時のスタイル */
.faq-header.is-active {
    border-radius: 10px 10px 0 0;
}

.faq-header.is-active::before {
    top: 15px;
    transform: rotate(60deg);
}

.faq-content {
    background-color: #f6f9f8;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}

.faq-contentInner {
    margin: 20px auto;
    width: 90%;
    font-size: var(--fz_18px);
}


/* レスポンシブ設定 */
@media (max-width: 800px) {
    .faq-header {
        margin-top: 25px;
    }

    .faq-header::before {
        top: 10px;
        width: 20px;
        height: 20px;
    }

    .faq-header.is-active::before {
        top: 10px;
    }

}

</style>