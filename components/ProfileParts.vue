
<template>
    <div class="profile">
        <div class="profile-inner">
            <h2 class="section-title">カメラマンProfile</h2>
            <div class="profile-text">
                <h4>はち</h4>
                <div class="profile-img"></div>
                <p>テキスト</p>
                <div class="insta"><a href="#">instagram <font-awesome-icon :icon="['fab', 'instagram']" size="xl"
                    class="insta-icon" /></a></div>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* プロフィール設定 */
.profile {
    padding-bottom: 5vw;
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
    width: 80%;
    max-width: 252px;
    font-size: var(--fz_18px);
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
    background-color: #adadad;
    margin: 0 auto;
    margin-top: 30px;
}

</style>