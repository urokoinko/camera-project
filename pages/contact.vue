<script setup>
const PAGE_TITLE = "ご予約・お問い合わせ";

// const config = useRuntimeConfig()
//  :action="config.public.newt.formEndpoint"

</script>
<template>
    <div class="contact-title">
        <h2 class="section-title">{{ PAGE_TITLE }}</h2>
        <img src="../public/img/contact_img.svg" alt="leaf_img">
    </div>
    <div class="contact-text">
        <p>ご予約・ご質問等、お気軽にご連絡ください。</p>
        <p>Instagramからもご予約・お問い合わせ<br class="m-br">受け付けております。</p>
        <div class="insta-link">
            <NuxtLink>→Instagramへ移動<font-awesome-icon :icon="['fab', 'instagram']" size="2xl" class="insta-icon" />
            </NuxtLink>
        </div>
        <div class="QandA-link">
            <NuxtLink :to="{ path: '/', hash: '#QandA' }">お問い合わせの前によくあるご質問を見る</NuxtLink>
        </div>
    </div>
    <div class="camera-form">
        <div class="camera-form-inner">

            <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" method="post" name="contact"
                netlify data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass">
                <input type="hidden" name="form-name" value="contact">

                <div class="form-item">
                    <label for="username">お名前</label>
                    <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
                        <input type="text" id="username" v-model="username" autocomplete="name">
                        <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
                    </validation-provider>
                </div>
                <div class="form-item">
                    <label for="katakana">フリガナ</label>
                    <validation-provider v-slot="{ errors }" rules="required|katakana" name="フリガナ">
                        <input type="text" id="katakana" v-model="katakana">
                        <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
                    </validation-provider>
                </div>
                <div class="form-item">
                    <label for="useremail">メールアドレス</label>
                    <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
                        <input type="text" id="useremail" v-model="useremail" autocomplete="email">
                        <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
                    </validation-provider>
                </div>
                <div class="form-item">
                    <label for="usertel">電話番号</label>
                    <validation-provider v-slot="{ errors }" rules="required|max:11" name="電話番号">
                        <input type="text" id="usertel" v-model="usertel" autocomplete="tel">
                        <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
                    </validation-provider>
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
                    <validation-provider v-slot="{ errors }" rules="required|max:1000" name="お問い合わせ内容">
                        <textarea id="messege" name="messege" v-model="messege"></textarea>
                        <p v-show="errors.length" class="contact_error">{{ errors[0] }}</p>
                    </validation-provider>
                </div>
                <div class="form-item" v-show="false">
                    <label for="message">スパムでない場合は空欄</label>
                    <input type="text" name="bot-field" v-model="botField" />
                </div>
                <div class="submit">
                    <button type="submit" :disabled="invalid || !validated">
                        <PartsButtonparts>送信</PartsButtonparts>
                    </button>
                </div>
            </validation-observer>
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