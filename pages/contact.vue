<script setup>
const PAGE_TITLE = "ご予約・お問い合わせ";

const config = useRuntimeConfig()

</script>
<template>
    <div class="contact-title">
        <h2 class="section-title">{{ PAGE_TITLE }}</h2>
        <img src="../public/img/contact_img.svg" alt="leaf_img">
    </div>
    <div class="contact-text">
        <p>ご予約・ご質問等、お気軽にご連絡ください。</p>
        <p>Instagramからもご予約・お問い合わせ<br class="m-br">受け付けております。</p>
        <div class="insta-link"><a href="">→Instagramへ移動<font-awesome-icon :icon="['fab', 'instagram']" size="2xl"
                    class="insta-icon" /></a></div>
        <div class="QandA-link">
            <a href="">お問い合わせの前によくあるご質問を見る</a>
        </div>
    </div>
    <div class="camera-form">
        <div class="camera-form-inner">

            <form :action="config.public.newt.formEndpoint" method="post">
                <div class="form-item">
                    <label for="name">お名前</label>
                    <input id="name" name="name">
                </div>
                <div class="form-item">
                    <label for="name_h">ふりがな</label>
                    <input id="name_h" name="name_h">
                </div>
                <div class="form-item">
                    <label for="email">メールアドレス</label>
                    <input id="email" name="email" type="email">
                </div>
                <div class="form-item">
                    <label for="tel">電話番号</label>
                    <input id="tel" name="tel">
                </div>
                <div class="form-item form-select">
                    <label for="menu">予約メニュー</label>
                    <div class="select">

                        <select id="menu" name="menu">
                            <option value="menu01">家族写真</option>
                            <option value="menu02">ブライダル写真</option>
                            <option value="menu03">ポートレート写真</option>
                            <option value="menu04">動画撮影</option>
                            <option value="menu05">未定</option>
                        </select>
                    </div>
                </div>
                <div class="form-item">
                    <label for="messege">お問い合わせ内容</label>
                    <textarea name="message" id="message" />
                </div>
                <div class="submit">
                    <PartsButtonparts>送信</PartsButtonparts>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
.contact-text {
    font-family: 'Yu Gothic', sans-serif;
    font-weight: 500;
    font-size: 18px;
    max-width: 500px;
    text-align: left;
    margin: 0 auto;
    padding-top: 70px;
    line-height: 1.6;
}

.m-br {
    display: none;
}

.contact-text p {
    padding-top: 32px;
}

.insta-link {
    text-align: right;
}

.insta-icon {
    padding-left: 15px;
}

.QandA-link {
    text-align: right;
    margin-top: 80px;
    padding-bottom: 20px;
    color: teal;
}


.contact-title {
    text-align: center;
    background-color: var(--color_yellow);
    position: relative;
    padding-top: 180px;
    padding-bottom: 100px;
}

.contact-title h2 {
    position: relative;
    display: inline-block;
    /* background-color: rgba(255, 255, 255, 0.5); */
    z-index: 2;
}

.contact-title img {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 600px;
    z-index: 1;
}

.camera-form {
    max-width: 600px;
    margin: 0 auto;
    padding-top: 5vh;
    text-align: left;
}

.form-item {
    padding-top: 28px;
}

label {
    display: inline-block;
    width: 220px;
}

input {
    width: 320px;
    height: 38px;
}

.select {
    display: inline;
}

textarea {
    vertical-align: top;
    width: 320px;
    height: 200px;
}

.submit {
    text-align: center;
    padding-top: 160px;
}

.camera-form form {
    font-family: var(--font_text);
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding-bottom: 120px;
}

/* レスポンシブ設定 */
@media (max-width:800px) {
    .contact-title img {
        max-width: 430px;
    }

    .contact-text {
        text-align: center;
        font-size: 16px;
    }

    .camera-form {
        text-align: center;
    }

    .camera-form form {
        font-family: var(--font_text);
        font-size: 16px;
    }

    label {
        width: 120px;
        font-size: 14px;
        text-align: left;
    }

    input {
        height: 32px;
        width: 300px;
        text-align: center;
    }

    .form-select label {
        display: inline-block;
        text-align: left;
    }

    .select {
        display: inline-block;
        width: 300px;
        text-align: left;
    }
    textarea {
        width: 300px;
        height: 150px;
    }
}

@media (max-width:430px) {
    .contact-text {
        text-align: center;
        font-size: 14px;
        background-color: var(--color_yellow);
    }

    .contact-title {
        padding-top: 180px;
        padding-bottom: 0;
    }

    .contact-title img {
        padding-left: 30px;
        padding-right: 30px;
        width: 80%;
    }

    .m-br {
        display: block;
    }

    .insta-link {
        text-align: center;
    }

    .insta-icon {
        padding-left: 15px;
    }

    .camera-form {
        padding-left: 20px;
        padding-right: 20px;
        max-width: 330px;
        text-align: center;
    }

    label {
        display: block;
        text-align: left;
        font-size: 14px;
        margin-bottom: 7px;
    }

    input {
        height: 32px;
        width: 100%;
        text-align: center;
    }

    .form-select {
        text-align: left;
    }

    .select {
        text-align: left;
    }
    textarea {
        width: 330px;
        height: 150px;
    }
}
</style>