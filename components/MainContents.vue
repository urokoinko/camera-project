<script setup lang="ts">

</script>

<template>
    <div class="main-contents">
        <div class="main-contents-inner">
            <h2 class="section-title">撮影メニュー</h2>

            <div class="contents-box01 box-innerL">
                <div class="box-Lpic cb-pic">
                    <img src="../assets/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textL">

                    <h3>家族写真</h3>
                    <p>お宮参り・七五三・マタニティフォトなど、<br>ご家族の記念撮影を承ります。</p>
                    <div class="more">
                        <PartsContentsMore />
                    </div>
                </div>
            </div>
            <div class="contents-box02  box-innerR">
                <div class="box-Rpic cb-pic">
                    <img src="../assets/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textR">

                    <h3>ブライダル</h3>
                    <p>結婚式での撮影や、前撮りを承ります。</p>
                </div>

            </div>
            <div class="contents-box03  box-innerL">
                <div class="box-Lpic cb-pic">
                    <img src="../assets/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textL">

                    <h3>ポートレート</h3>
                    <p>宣材写真・アーティスト写真など、<br>ご要望に沿った撮影を承ります。</p>
                </div>

            </div>
            <div class="contents-box04 box-innerR">
                <div class="box-Rpic cb-pic">
                    <img src="../assets/img/A7306925.jpg" alt="">
                </div>
                <div class="box-textR">

                    <h3>動画撮影</h3>
                    <p>MVや企業向けムービーなど承ります。<br>
                        行事やイベントにも対応しておりますので<br>
                        お気軽にご相談下さい。</p>
                </div>

            </div>

        </div>
    </div>


</template>

<style scoped>
.main-contents {
    margin-top: 410px;
    font-family: var(--font_text);
}

.box-innerL {
    display: flex;
    align-items: center;
    margin-bottom: 190px;
}

.box-innerR {
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 190px;
    display: flex
}

.box-inner h3 {
    font-size: 32px;
}

.box-inner p {
    font-size: 18px;
}

.cb-pic {
    width: 732px;
    height: 480px;
}

.box-textL,
.box-textR {
    display: flex;
    flex-direction: column;
}

.box-textL {
    padding-left: 80px;
}

.box-textR {
    padding-right: 80px;
    text-align: right;
}

.box-Lpic{
    box-shadow: 10px 10px 4px rgba(0, 0, 0 ,0.7);
}
</style>