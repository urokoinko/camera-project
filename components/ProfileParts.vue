
<template>
    <div class="profile">
        <div class="profile-inner">
            <h2 class="section-title">カメラマンProfile</h2>
            <div class="profile-text">
                <h4>はち</h4>
                <div class="profile-img"></div>
                <p>
                    僕の父はカメラが好きで、家族の色んな瞬間をいつも写真に残してくれました。<br>
                    段ボールいっぱいの写真は家族の大切な宝物です。<br>
                    そんな僕も大切な家族との大切な瞬間を残したいと思い、この仕事をしています。<br>
                    ご家族の思い出をかたちとして残すお手伝いが出来ましたら幸いです。
                </p>
                <div class="insta"><a href="https://www.instagram.com/fl_8mm?igsh=dWV6ejRzbzdsMWp6">instagram <font-awesome-icon :icon="['fab', 'instagram']" size="xl"
                    class="insta-icon" /></a></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* プロフィール設定 */
.profile {
    text-align: center;
    box-shadow: 0 30px -30px -20px rgba(0, 0, 0, 0.4);
}

.profile-text {
    padding-top: 8vw;
    font-family: var(--font_text);
}

.profile-text h4 {
    font-size: var(--fz_22px);
}

.profile-text p {
    display: inline-block;
    width: 70%;
    font-size: var(--fz_16px);
    padding-top: 5vw;
}

.insta {
    font-size: var(--fz_22px);
    padding-top: 47px;
    font-weight: 600;
}

.profile-img {
    width: clamp(150px, 23.9vw, 250px);
    height: clamp(150px, 23.9vw, 250px);
    border-radius: 50%;
    background: url(../assets/img/Profile_img.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    margin-top: 30px;
}

</style>