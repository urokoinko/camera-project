<script setup>
const PAGE_TITLE = "ご予約・お問い合わせ";

const config = useRuntimeConfig()

</script>
<template>
    <div class="contact-title">
        <h2 class="section-title">{{ PAGE_TITLE }}</h2>
    </div>

    <div class="camera-form">
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
            <div class="form-item">
                <label for="menu">予約メニュー</label>
                <input id="menu" name="menu">
            </div>
            <div class="form-item">
                <label for="messege">お問い合わせ内容</label>
                <textarea name="message" id="message" />
            </div>
            <button type="button">送信</button>
        </form>
    </div>
</template>
<style scoped>
.camera-form {
    padding-top: 5vh;
    text-align: center;
}

.camera-form form {
    font-family: var(--font_text);
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
}

.contact-title {
    text-align: center;
    background-color: var(--color_yellow);
}
.contact-title h2{
    position: relative;
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: rgba(255, 255, 255, 0.5);
}
.contact-title h2::before{
    position: absolute;
    content: '';
    width: 100%;
    max-width: 950px;
    height: 100%;
    top: 20%;
    left: 20%;
    background: url(../public/img/contact_img.svg) no-repeat;
    background-size: contain;
}


.contact-title img {
    max-width: 950px;
    width: 100%;
}
</style>