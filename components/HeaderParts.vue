<script setup>

// ハンバーガーメニュー開け閉め
function navFunc() {
    document.querySelector('html').classList.toggle('open');
}

// ハンバーガーメニューのリンクがクリックされたらメニューを閉じる
function closeMenu(){
    document.querySelector('html').classList.remove('open');
}

</script>

<template>
    <div class="header">
        <div class="header-inner">
            <div class="site-logo">
                <NuxtLink :to="{path: '/', hash: '#site'}"><img src="../assets/img/camera_site_logo.svg" alt="logo"></NuxtLink>
            </div>
            <div class="header-menu">
                <ul>
                    <li class="dropdown">
                        撮影ギャラリー
                        <ul class="dropdown-inner">
                            <li class="dropdown-item"><NuxtLink :to="{name: 'photoGallery'}">写真</NuxtLink></li>
                            <li class="dropdown-item"><NuxtLink :to="{name: 'movie'}">動画</NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink :to="{name: 'priceMenu'}">料金表</NuxtLink></li>
                    <li><NuxtLink :to="{path: '/', hash: '#photographer'}">カメラマンについて</NuxtLink></li>
                    <li><NuxtLink :to="{path: '/', hash: '#QandA'}">Q&A</NuxtLink></li>
                    <li><NuxtLink :to="{name: 'contact'}">お問い合わせ</NuxtLink></li>
                </ul>
            </div>
            <button type="button" class="m-humburgar" @click="navFunc()">
                <span class="sr-only">MENU</span>
            </button>
        </div>
        <nav class="humburgarMenu">
            <ul>
                <li>撮影ギャラリー</li>
                <li class="menu-photo"><NuxtLink :to="{name: 'photoGallery'}" @click="closeMenu()">写真</NuxtLink></li>
                <li class="menu-movie"><NuxtLink :to="{name: 'movie'}" @click="closeMenu()">動画</NuxtLink></li>
                <li><NuxtLink :to="{name: 'priceMenu'}" @click="closeMenu()">料金表</NuxtLink></li>
                <li><NuxtLink :to="{path: '/', hash: '#photographer'}" @click="closeMenu()">カメラマンについて</NuxtLink></li>
                <li><NuxtLink :to="{path: '/', hash: '#QandA'}" @click="closeMenu()">Q＆A</NuxtLink></li>
                <li><NuxtLink :to="{name: 'contact'}" @click="closeMenu()">お問い合わせ</NuxtLink></li>
                <li><a href="https://www.instagram.com/fl_8mm?igsh=dWV6ejRzbzdsMWp6"><font-awesome-icon :icon="['fab', 'instagram']"
                    class="insta-icon" /></a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
/* ヘッダー　設定 */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 500;
    display: flex;
    align-items: center;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1440px;
    align-items: center;
    margin: 0 auto;
}

.site-logo {
    width: 45px;
}

.header-menu ul {
    display: flex;
    gap: 0px 3vw;
}

.header-menu li {
    font-family: var(--font_text);
    font-weight: 500;
    font-size: 14px;
    position: relative;
}

.header-menu li::after {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color_main);
    transform: scale(0, 1);
    transform-origin: center top;
    transition: 0.3s;
}

.header-menu a:hover{
    opacity: 1;
}

.header-menu li:hover::after {
    transform: scale(1, 1);
}
.m-humburgar,
.humburgarMenu {
    display: none;
}

/* ヘッダー　ドロップダウン */
.dropdown{
    position: relative;
}
.dropdown-inner{
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0;
}

.dropdown-item{
    visibility: hidden;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    height: 40px;
    padding-left: 10px;
    transition: all 0.2s ease;
    position: relative;
}
.dropdown-item a:hover{
    opacity: 0.7;
}

.dropdown-inner li:hover::after{
    transform: scale(0, 1);
}

.dropdown-item a{
    transition: none;
}

.dropdown:hover .dropdown-item{
    visibility: visible;
}

/* レスポンシブ設定 */
@media (max-width:1024px) {
    .header-menu a{
        font-size: 14px;
    }
}
@media (max-width:800px) {
    .header {
        height: 43px;
        display: flex;
        align-items: center;
    }    
.header-inner{
    width: 90%;
}
    .header-menu {
        display: none;
    }

    .site-logo {
        width: 35px;
    }


    /* ハンバーガーメニュー */
    .sr-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .m-humburgar {
        display: block;
        box-sizing: content-box;
        padding: 0;
        outline: none;
        border: none;
        background: none;
        width: 25px;
        height: 17px;
        cursor: pointer;
        color: var(--color_main);
    }

    .m-humburgar::before,
    .m-humburgar::after {
        content: '';
        display: block;
        height: 2px;
        border-radius: 10px;
        background-color: currentColor;
        transform: translateY(9px);
        transition: 0.5s ease-in-out;
    }

    .m-humburgar::before {
        transform: translateY(-9px);
        box-shadow: 0 10px currentColor;
    }

    /* ナビゲーションボタン　閉じるボタン */
    .open .m-humburgar {
        z-index: 1000;
    }

    .open .m-humburgar::before {
        transform: rotate(-45deg) translate(-30px, -2px);
        box-shadow: none;
    }

    .open .m-humburgar::after {
        transform: rotate(45deg) translate(-3px, 29px);
    }

    /* ハンバーガーメニュー　開いた状態 */

    .open .humburgarMenu {
        position: fixed;
        top: 0;
        right: 0%;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 254, 249);
        color: var(--color_main);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: all 1s ease-in-out;
    }

    .humburgarMenu ul {
        text-align: center;
        list-style: none;
        font-family: var(--font_text);
        font-weight: 500;
        font-size: 16px
    }

    .humburgarMenu li:not(:last-child) {
        margin-bottom: 40px;
    }

    .humburgarMenu li:last-child {
        font-size: 24px;
    }


    .menu-photo,
    .menu-movie {
        margin-top: -20px;
    }

    .menu-photo a,
    .menu-movie a {
        position: relative;
        padding-left: 40%;
        margin-bottom: -10px;
    }

    .menu-photo a::before,
    .menu-movie a::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 40%;
        width: 15px;
        height: 1px;
        background-color: var(--color_main);
    }

    /* ハンバーガーメニュー　閉じた状態 */
    .humburgarMenu {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        right: -120%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        color: transparent;
        transition: all 1s ease-in-out;
    }



}

@media (max-width:375px) {
    .humburgarMenu ul {
        text-align: center;
        list-style: none;
        font-family: var(--font_text);
        font-weight: 500;
        font-size: 18px
    }

    .humburgarMenu li:last-child {
        font-size: 20px;
    }

}
</style>