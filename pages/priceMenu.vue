<script setup>
const PAGE_TITLE = "料金表";
</script>
<template>
    <NuxtLayout name="other">
        <template #sub-sectionTitle>
            {{ PAGE_TITLE }}
        </template>
    </NuxtLayout>
    <div class="priceMenu">
        <h3>写真撮影メニュー</h3>
        <p class="priceMenu-text">写真撮影の料金は2プランございます。<br>どちらも一律料金でご案内しております。</p>
        <div class="price-inner">
            <ul class="price-inner-ul">
                <li class="plan">
                    <div class="plan-inner">
                        <h4 class="plan-title">出張撮影ライトプラン</h4>
                        <div class="price">￥１５，０００</div>
                        <ul class="price-item">
                            <li>撮影時間 1時間</li>
                            <li>出張料 無料</li>
                        </ul>
                    </div>
                    <p class="plan-text">当日撮影したお写真を全てデータでお渡しします。<br>そのままの自然なお写真をご希望の方や、ご自身でお写真を加工される方におすすめのプランです。<br>
                        <span>※レタッチをご希望のお客様はレタッチプランをお選びください。</span>
                    </p>
                </li>
                <li class="plan">
                    <div class="plan-inner">
                        <h4 class="plan-title">出張撮影レタッチプラン</h4>
                        <div class="price">￥２０，０００</div>
                        <ul class="price-item">
                            <li>撮影時間 1時間</li>
                            <li>出張料 無料</li>
                        </ul>
                    </div>
                    <p class="plan-text">
                        お顔を明るく、お写真全体の色味を鮮やかにする修正を加えます。<br>屋外の撮影でどうしても発生してしまうカラーバランスの乱れを整えることで、表情が際立ち、お着物が鮮やかに仕上がります。</p>
                </li>
            </ul>
        </div>
        <div class="reserve-button">
            <NuxtLink :to = "{name: 'contact'}">
                <PartsButtonparts>ご予約はこちら</PartsButtonparts>
            </NuxtLink>
        </div>

        <div class="explain">
            <div class="explain-content">
                <div class="ec-title">出張エリアについて</div>
                <p class="ec-text">東京都・埼玉県・神奈川県・千葉県に出張します。出張費は無料です。</p>
            </div>
            <div class="explain-content">
                <div class="ec-title">お支払方法について</div>
                <p class="ec-text">撮影当日に現金にてお支払いをお願いいたします。おつりの出ないようご協力お願いします。</p>
            </div>
            <div class="explain-content">
                <div class="ec-title">商品のお渡し</div>
                <p class="ec-text">写真データのお渡しは、撮影から2～3日を目安としております。<br>
                    レタッチプランをご希望のお客様については10日程度を目安としております。
                </p>
            </div>
            <div class="explain-content">
                <div class="ec-title">ご予約について</div>
                <p class="ec-text">事前にご連絡いただき日程の調整をさせていただきます。
                    ご希望の日程が埋まってしまう場合もございますので、あらかじめご了承ください。</p>
            </div>
            <div class="explain-content">
                <div class="ec-title">撮影当日の流れについて</div>
                <p class="ec-text">撮影当日は、撮影場所でお待ち合わせして撮影を開始します。
                    撮影終了後、代金をお支払いいただき解散となります。</p>
            </div>
            <div class="explain-content">
                <div class="ec-title">撮影前の用意</div>
                <p class="ec-text">当日、衣装や小物のご準備はお客様ご自身でお願いしております。
                    あらかじめご了承ください。</p>
            </div>
        </div>
        <div class="movie-pricePlan">
            <h3>動画撮影メニュー</h3>
            <p class="priceMenu-text">動画撮影については、動画の内容や編集希望かどうか<br>ヒアリングしてからお見積もりを出させていただいております。<br>お気軽にお問い合わせください。</p>

            <div class="movie-plan">
                <div class="movie-plan-inner">
                    <h4 class="plan-title">動画撮影の目安料金</h4>
                    <div class="movie-price">￥３５，０００</div>
                </div>
            </div>
        </div>
        <div class="reserve-button">
            <NuxtLink :to="{name: 'contact'}">
                <PartsButtonparts>ご予約はこちら</PartsButtonparts>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
/* 料金表 */
.priceMenu {
    padding-top: 10vw;
    padding-bottom: 10vw;
    font-family: var(--font_text);
    text-align: center;
    font-weight: 500;
}

.priceMenu h3 {
    font-family: var(--font_title);
    font-size: var(--fz_20px);
    padding-top: 1.9vw;
}

.priceMenu-text {
    font-size: var(--fz_18px);
    padding-top: 80px;
}

/* 料金表　写真 */
.price-inner-ul {
    display: flex;
    padding-top: 5vw;
    justify-content: center;
    gap: 1.9vw;
}

.plan-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 36vw;
    height: 250px;
    max-width: 500px;
    padding: 20px;
    border: solid 10px #E5F5F2;
    border-radius: 20px;
}

.plan-title {
    font-size: var(--fz_20px);
}

.price {
    font-size: var(--fz_30px);
    font-weight: bold;
    padding-top: 40px;
    padding-right: 40px;
    position: relative;
}

.price::before {
    position: absolute;
    content: '(税込)';
    font-size: var(--fz_20px);
    bottom: 5px;
    left: 75%;
}

.price-item {
    font-size: var(--fz_16px);
    display: flex;
    justify-content: center;
    padding-top: 40px;
    gap: 20px;
    position: relative;
}

.price-item::before {
    position: absolute;
    content: 'データ：90～100カット';
    top: 70px;
}

.plan-text {
    width: 35vw;
    max-width: 450px;
    text-align: left;
    font-size: var(--fz_16px);
    padding-top: 40px;
    margin: 0 auto;
}

.plan-text span {
    font-size: var(--fz_13px);
}

/* 料金表　写真　予約ボタン */
.reserve-button {
    padding-top: 150px;
}

/* 料金表　写真　注意事項欄 */
.explain {
    width: 70%;
    max-width: 1050px;
    margin: 200px auto 0;
    padding-top: clamp(30px, 10vw, 150px);
    padding-bottom: clamp(30px, 10vw, 150px);
    border: 2px dotted #d3d3d3;
}

.explain-content {
    max-width: 700px;
    text-align: left;
    padding: 30px 40px 0;
    margin: 0 auto;
}

.explain .explain-content:first-child {
    padding-top: 0;
}

.ec-title {
    font-size: var(--fz_17px);
    font-weight: 600;
}

.ec-text {
    font-size: var(--fz_16px);
}

/* 料金表　動画 */
.movie-pricePlan {
    padding-top: 15vw;
}

.movie-plan {
    padding-top: 2.9vw;
    display: flex;
    justify-content: center;
}

.movie-plan-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 36vw;
    height: 200px;
    max-width: 500px;
    padding: 20px;
    border: solid 10px #E5F5F2;
    border-radius: 10px;
}

.movie-price {
    font-size: var(--fz_30px);
    font-weight: bold;
    padding-top: 30px;
    padding-right: 60px;
    position: relative;
}

.movie-price::before {
    position: absolute;
    content: '(税込)～';
    font-size: var(--fz_20px);
    bottom: 0;
    left: 74%;
}

/* レスポンシブ設定 */
@media (min-width:1024px) {
    .price {
        padding-right: 80px;
    }

    .price::before {
        left: 65%;
    }

    .movie-price {
        padding-right: 100px;
        position: relative;
    }

    .movie-price::before {
        left: 65%;

    }
}

@media (max-width:800px) {
    .priceMenu {
        padding: 5vw;
        padding-bottom: 20vw;
    }

    .price-inner-ul {
        display: inline-block;
        margin: 0 auto;
    }

    .plan {
        padding-bottom: 10vw;
    }

    .plan-inner {
        width: 70vw;
        max-width: 400px;
    }

    .plan-text {
        width: 80%;
    }

    /* 料金表　写真　予約ボタン */

    .reserve-button {
        padding-top: 50px;
    }

    /* 料金表　写真　注意事項欄 */
    .explain {
        width: 80vw;
        margin: 100px auto 0;
    }

    /* 料金表　動画 */
    .movie-plan-inner {
        width: 70vw;
        max-width: 400px;
    }
}
</style>