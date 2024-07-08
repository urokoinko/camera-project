
<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="footer-treeR"></div>
            <div class="footer-treeL"></div>
            <div class="footer-bg">
                <div class="footer-nav">
                    <ul class="nav-ul01">
                        <li class="footer-navitem"><a href="#">撮影メニュー</a></li>
                        <li class="footer-navitem"><a href="#">料金表</a></li>
                        <li class="footer-navitem"><a href="#">カメラマンについて</a></li>
                    </ul>
                    <ul class="nav-ul02">
                        <li class="footer-navitem"><a href="#">Q＆A</a></li>
                        <li class="footer-navitem"><a href="#">お問い合わせ</a></li>
                    </ul>
                </div>
                <small class="footer-copy">&copy; Hachi</small>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* フッター設定 */
.footer {
    color: var(--color_darkBrown);
    background-color:var(--color_yellow);
}

.footer-inner {
    margin: 0 auto;
    max-width: 1440px;
}

.footer-nav ul {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    gap: 30px;
}

.footer-nav {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 100;
}

.nav-ul02 li:first-child{
    padding-left: 20px;
}

.footer-bg {
    text-align: center;
    width: 100%;
    height: 264px;
    margin: 0 auto
}

small {
    display: block;
    padding-top: 110px;
    font-size: 14px;
}

.footer-treeR,
.footer-treeL {
    position: relative;
}

.footer-treeR::before {
    position: absolute;
    content: '';
    top: -75px;
    right: 290px;
    width: 147px;
    height: 169px;
    background: url(../public/img/camera_tree_blue.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

.footer-treeR::after {
    position: absolute;
    content: '';
    top: -150px;
    right: 100px;
    width: 248px;
    height: 248px;
    background: url(../public/img/camera_tree.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

.footer-treeL::after {
    position: absolute;
    content: '';
    top: -90px;
    left: 180px;
    width: 147px;
    height: 169px;
    background: url(../public/img/camera_tree_green.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

/* ページトップボタン */
.footer{
    position: relative;
}
#page-top{
    position: absolute;
    bottom: 60px;
    right: 40px;
}

@media (max-width:430px) {
    #page-top{
        width: 60px;
        height: 60px;
    }
}


/* レスポンシブ設定 */
@media (max-width:800px) {
    .footer{
        margin-top: 10vw;
    }
    .footer-nav ul{
        font-size: 14px;
        padding-top: 15vw;
    }
    small {
        font-size: 12px;
        padding-top: 90px;
    }
    .footer-treeR::before {
        right: 30%;
        width: 110px;
        height: 126px;
        background: url(../public/img/camera_tree_blue.png) no-repeat;
        background-size: contain;
        z-index: 1000;
    }

    .footer-treeR::after {
        right: 50px;
        width: 184px;
        height: 184px;
    }

    .footer-treeL::after {
        left: 100px;
        width: 130px;
        height: 140px;
    }
    
}
@media (max-width:600px) {
    .footer-nav{
        flex-direction: column;
        padding-top: 60px;
    }
    .footer-nav ul{
        padding: 10px;
    }
}
@media (max-width:430px) {
    .footer-bg {
        height: 500px;
    }

    .footer-nav {
        display: none;
    }

    small {
        padding-top: 470px;
    }

    .footer-treeR::before {
        top: 230px;
        right: 40%;
        width: 110px;
        height: 126px;
        background: url(../public/img/camera_tree_blue.png) no-repeat;
        background-size: contain;
        z-index: 1000;
    }

    .footer-treeR::after {
        position: absolute;
        content: '';
        top: 140px;
        right: 0;
        width: 184px;
        height: 184px;
        background: url(../public/img/camera_tree.png) no-repeat;
        background-size: contain;
        z-index: 1000;
    }

    .footer-treeL::after {
        position: absolute;
        content: '';
        top: 190px;
        left: 20px;
        width: 130px;
        height: 140px;
        background: url(../public/img/camera_tree_green.png) no-repeat;
        background-size: contain;
        z-index: 1000;
    }

}
</style>