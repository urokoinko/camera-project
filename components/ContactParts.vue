<template>
    <div class="contact">
        <div class="contact-inner">
            <h2 class="section-title">お問い合わせ</h2>
            <p>ご予約やご不明点など<br>お気軽にお問い合わせください。</p>
            <div class="contact-button">
                <NuxtLink :to="{name:'contact'}">
                    <PartsButtonparts class="button">お問い合わせはこちら</PartsButtonparts>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact {
    font-family: var(--font_text);
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
}

.contact-inner p {
    font-size: 18px;
    padding-top: 10vw;
    padding-bottom: 40px
}

.contact-button {
    padding-top: 80px;
}

@media (max-width:800px) {
    .contact-inner p {
        font-size: 16px;
    }
}

@media (max-width:430px) {
    .contact{
        background-color: var(--color_yellow);
        padding-bottom: 0;
    }

    .contact-inner h2 {
        padding-top: 50px;
    }

    .contact-inner p {
        font-size: 14px;
        padding-top: 69px;
        padding-bottom: 0px
    }

}
</style>