<script setup>
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
                    const active_header = document.querySelector('.faq_header.is-active');
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
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    交通費は追加でかかりますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    追加料金は発生しますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    キャンセル料はかかりますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>
            <div class="QandA-item">
                <div class="faq-header">
                    女性カメラマンはいますか？
                </div>
                <div class="faq-content">
                    <div class="faq-contentInner">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* アコーディオン設定 */
.QandA {
    margin: 50vh auto;
    max-width: 760px;
}

.QandA h2 {
    padding-bottom: 80px;
}

.faq-header {
    background-color: #d7eee9;
    padding: 7px 20px 7px;
    cursor: pointer;
    position: relative;
    font-size: 24px;
    margin-top: 40px;
    border-radius: 10px;
}

.faq-header::before {
    position: absolute;
    content: '';
    top: 15px;
    right: 20px;
    width: 25px;
    height: 25px;
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
    font-size: 18px;
}


/* レスポンシブ設定 */
@media (max-width: 800px) {
    .faq-header {
        font-size: 20px;
        padding: 5px 20px 5px;
    }

    .faq-header::before {
        top: 10px;
        width: 20px;
        height: 20px;
    }

    .faq-header.is-active::before {
        top: 10px;
    }

    .faq-contentInner {
        font-size: 16px;
    }
}

@media (max-width: 430px) {
    .faq-header {
        font-size: 16px;
    }

    .faq-contentInner {
        font-size: 14px;
    }
}
</style>