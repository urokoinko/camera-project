<script setup>
onMounted(()=>{

    
    function navFunc() {
        document.querySelector('html').classList.toggle('open');
    }
})
</script>

<template>
    <div class="header">
        <div class="header-inner">
            <div class="site-logo">
                <a href="#"><img src="../assets/img/camera_saite_logo.png" alt=""></a>
            </div>
            <div class="header-menu">
                <ul>
                    <li><a href="#">撮影メニュー</a></li>
                    <li><a href="#">料金表</a></li>
                    <li><a class="cameraman" href="#">カメラマンについて</a></li>
                    <li><a href="#">Q&A</a></li>
                    <li><a href="#">お問い合わせ</a></li>
                </ul>
            </div>
            <button type="button" class="m-humburgar" @click="navFunc()">
                <span class="sr-only">MENU</span>
            </button>
            <nav class="humburgarMenu">
                <ul>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </nav>
        </div>
    </div>


</template>

<style scoped>
/* ヘッダー　設定 */
.site-logo {
    width: 53px;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    z-index: 1000;
    padding: 0 80px;
}
    
    .header-inner {
        position: inherit;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    padding-right: 10px;
}

.header-menu ul {
    display: flex;
    gap: 30px;
}

.header-menu a{
    display: block;
    position: relative;
}
.header-menu a::after{
    position: absolute;
    content: '';
    bottom: -5px;
    left: -7px;
    width: 0;
    height: 1px;
    background-color: var(--color_main);
}
.header-menu a:hover::after{
    width: 120%;
    transition: 0.5s;
}
.header-menu .cameraman:hover::after{
    width: 110%;
}
.m-humburgar{
    display: none;
}


/* モバイル設定 */
@media (max-width:430px) {
    .header-menu{
        display: none;
    }
    .site-logo{
        width: 35px;
    }
    .header{
        height: 43px;
        padding: 0 20px;
    }
    /* ハンバーガーメニュー */
    .sr-only{
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding:0;
        position: absolute;
        width: 1px;
    }
    .m-humburgar{
        display: block;
        box-sizing: content-box;
        padding: 0;
        outline: none;
        border: none;
        background: none;
        width: 29px;
        height: 20px;
        cursor: pointer;
        color: var(--color_main);
    }
    .m-humburgar::before,
    .m-humburgar::after{
        content: '';
        display: block;
        height: 1px;
        background-color: currentColor;
        transform: translateY(10px);
        transition:  0.3s ease-in-out;
    }
    .m-humburgar::before{
        transform: translateY(-10px);
        box-shadow: 0 10px currentColor;
    }

    /* ナビゲーションボタン　閉じるボタン */
    .open .m-humburgar{
        z-index: 1000;
    }
    .open .m-humburgar::before{
        transform: rotate(-45deg);
        box-shadow: none;
    }
    .open .m-humburgar::after{
        transform: rotate(45deg);
        box-shadow: none;
    }
    /* ハンバーガーメニュー　開いた状態 */
    html.open , .open body{
        height: 100%;
        overflow: hidden;
    }
    .open .header{
        position: relative;
        margin-bottom: -60px;
    }
    .open .humburgarMenu{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.8);
        color: var(--color_main);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open .m-humburgar ul{
        list-style: none;
    }
    .open .m-humburgar li:not(:last-child){
        margin-bottom: 20px;
    }

    /* ハンバーガーメニュー　開いた状態 */
    /* .m-humburgar{
        width: 0;
        height: 0;
        position: absolute;
        left: 100%;
        overflow: hidden;
        color: transparent;
        transition: 0.5s ease-in-out;
    } */

}
</style>