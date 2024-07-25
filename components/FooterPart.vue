<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="footer-treeR"></div>
            <div class="footer-treeL"></div>
            <div class="footer-bg">
                <div class="footer-nav">
                    <ul class="nav-ul01">
                        <li class="footer-navitem">
                            <NuxtLink :to="{ name: 'photoGallery' }">写真ギャラリー</NuxtLink>
                        </li>
                        <li class="footer-navitem">
                            <NuxtLink :to="{ name: 'movie' }">動画ギャラリー</NuxtLink>
                        </li>
                    </ul>
                    <ul class="nav-ul02">
                        <li class="footer-navitem">
                            <NuxtLink :to="{ name: 'priceMenu' }">料金表</NuxtLink>
                        </li>
                        <li class="footer-navitem">
                            <NuxtLink :to="{ path: '/', hash: '#photographer' }">カメラマンについて</NuxtLink>
                        </li>
                        <li class="footer-navitem">
                            <NuxtLink :to="{ path: '/', hash: '#QandA' }">Q＆A</NuxtLink>
                        </li>
                        <li class="footer-navitem">
                            <NuxtLink :to="{ name: 'contact' }">お問い合わせ</NuxtLink>
                        </li>
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
    background-color: var(--color_yellow);
}

.footer-inner {
    margin: 0 auto;
    max-width: 1440px;
}

.footer-nav ul {
    padding-top: clamp(50px, 10vw, 100px);
    display: flex;
    justify-content: center;
    gap: 3vw;
    position: relative;
    z-index: 2000;
}

.footer-nav {
    display: flex;
    justify-content: center;
    font-size: var(--fz_13px);
    font-weight: 500;
}

.nav-ul02 li:first-child {
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
    padding-top: clamp(30px, 10vw, 100px);
    font-size: var(--fz_11px);
}

.footer-treeR,
.footer-treeL {
    position: relative;
}

.footer-treeR::before {
    position: absolute;
    content: '';
    top: clamp(-80px, -7vw, -60px);
    right: 330px;
    width: clamp(110px, 15vw, 150px);
    height: 16vw;
    background: url(../public/img/camera_tree_blue.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

.footer-treeR::after {
    position: absolute;
    content: '';
    top: clamp(-140px, -13vw, -100px);
    right: 100px;
    width: clamp(180px, 21vw, 260px);
    height: 21vw;
    background: url(../public/img/camera_tree.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

.footer-treeL::after {
    position: absolute;
    content: '';
    top: clamp(-100px, -6.5vw, 75px);
    left: 180px;
    width: clamp(130px, 14vw, 160px);
    height: 16vw;
    background: url(../public/img/camera_tree_green.png) no-repeat;
    background-size: contain;
    z-index: 1000;
}

/* ページトップボタン */
.footer {
    position: relative;
}

#page-top {
    position: absolute;
    bottom: 60px;
    right: 40px;
}

@media (max-width:430px) {

    #page-top {
        width: 60px;
        height: 60px;
    }
}


/* レスポンシブ設定 */
@media (max-width:1024px) {
    .footer {
        margin-top: 10vw;
    }

    .footer-nav {
        display: block;
    }

    .footer-nav ul:last-child {
        padding-top: 2vw;
    }

    .footer-treeR::before {
        top: -8vw;
        right: 20vw;
    }

    .footer-treeR::after {
        top: -14vw;
        right: 0vw;
    }

    .footer-treeL::after {
        top: -7vw;
        left: 10vw;
    }

}

@media (max-width:600px) {
    .footer-treeR::before {
        right: 15vw;
    }

    .footer-treeR::after {
        right: -8vw;
    }

    .footer-treeL::after {
        left: 10vw;
    }
    small {
        padding-top: 140px;
    }
}


@media (max-width:430px) {
    .footer {
        margin-top: 0;
    }

    .footer-bg {
        height: 430px;
    }

    .footer-nav {
        display: none;
    }

    small {
        padding-top: 400px;
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