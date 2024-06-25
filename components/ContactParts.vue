
<template>
<div class="contact">
    <div class="contact-inner">
        <h2 class="section-title">お問い合わせ</h2>
        <p>ご予約やご不明点など<br>お気軽にお問い合わせください。</p>
        <div class="contact-button">
            <PartsButtonparts>お問い合わせはこちら</PartsButtonparts>
        </div>
    </div>
</div>


</template>

<style scoped>
.contact{
    font-family: var(--font_text);
    text-align: center;
    padding-bottom: 100px
}
.contact-inner h2{
    padding-top: 50px;
}
.contact-inner p{
    font-size: 24px;
    padding-top: 178px;
    padding-bottom: 40px
}
.contact-button{
    padding-top: 80px;
}


@media (max-width:800px) {
    .contact-inner p{
        font-size: 20px;
    }
}
@media (max-width:430px) {
    .contant{
        background-color: rgba(255, 251, 215, 0.5);
    }
        .contact-inner h2{
            padding-top: 50px;
        }
        .contact-inner p{
            font-size: 16px;
            padding-top: 69px;
            padding-bottom: 40px
        }
        
    }

</style>