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
    padding-top: clamp(20px, 30px, 50px);
    display: flex;
    justify-content: center;
    gap: 15px;
    position: relative;
    z-index: 500;
}

.footer-nav {
    display: flex;
    justify-content: center;
    font-size: 10px;
    font-weight: 300;
}

.nav-ul02 li:first-child {
    padding-left: 20px;
}

.footer-bg {
    text-align: center;
    width: 100%;
    height: 140px;
    margin: 0 auto
}

small {
    display: block;
    padding-top: 40px;
    font-size: 9px;
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
    background: url(../assets/img/camera_tree_blue.png) no-repeat;
    background-size: contain;
}

.footer-treeR::after {
    position: absolute;
    content: '';
    top: clamp(-140px, -13vw, -100px);
    right: 100px;
    width: clamp(180px, 21vw, 260px);
    height: 21vw;
    background: url(../assets/img/camera_tree.png) no-repeat;
    background-size: contain;
}

.footer-treeL::after {
    position: absolute;
    content: '';
    top: clamp(-100px, -6.5vw, 75px);
    left: 180px;
    width: clamp(130px, 14vw, 160px);
    height: 16vw;
    background: url(../assets/img/camera_tree_green.png) no-repeat;
    background-size: contain;
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
        padding-top: 40px;
    }
}


@media (max-width:430px) {
    .footer {
        margin-top: 0;
    }

    .footer-bg {
        height: 320px;
    }

    .footer-nav {
        display: none;
    }

    small {
        padding-top: 300px;
    }

    .footer-treeR::before {
        top: 150px;
        right: 40%;
        width: 110px;
        height: 126px;
        background: url(../assets/img/camera_tree_blue.png) no-repeat;
        background-size: contain;
    }

    .footer-treeR::after {
        position: absolute;
        content: '';
        top: 90px;
        right: 0;
        width: 184px;
        height: 184px;
        background: url(../assets/img/camera_tree.png) no-repeat;
        background-size: contain;
    }

    .footer-treeL::after {
        position: absolute;
        content: '';
        top: 140px;
        left: 20px;
        width: 130px;
        height: 140px;
        background: url(../assets/img/camera_tree_green.png) no-repeat;
        background-size: contain;
    }

}
</style>