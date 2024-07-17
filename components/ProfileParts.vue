
<template>
    <div class="profile" id="photographer">
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
    padding-bottom: 180px;
    text-align: center;
}

.profile-text {
    padding-top: 143px;
    font-family: var(--font_text);
}

.profile-text h4 {
    font-size: 32px;
}

.profile-text p {
    display: inline-block;
    max-width: 252px;
    font-size: 18px;
    padding-top: 5px;
}

.insta {
    font-size: 24px;
    padding-top: 47px;
    font-weight: 600;
}

.profile-img {
    width: 245px;
    height: 245px;
    border-radius: 50%;
    background-color: #adadad;
    margin: 0 auto;
    margin-top: 30px;
}


@media (max-width:800px) {
    .profile-text h4 {
        font-size: 20px;
    }
    .insta {
        font-size: 20px;
        padding-top: 47px;
    }
}
@media (max-width:430px) {
    .profile-text h4 {
        font-size: 16px;
    }

    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }


    .profile-text p {
        font-size: 14px;
    }

    .insta {
        font-size: 18px;
        padding-top: 47px;
    }
}
</style>