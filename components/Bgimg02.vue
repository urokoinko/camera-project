<template>
    <div class="bg-img02">
        <div class="bg-img02-images-one">
        </div>
        <div class="block" id="QandA">
            <QandAParts />

</div>
        <div class="bg-img02-images-twe">
        </div>
    </div>
</template>

<style scoped>
.block {
    position: relative;
    padding: 250px;
    z-index: 10;
    box-shadow: 0 0 30px 20px rgba(0,0,0,0.4);
}

.bg-img02-images-one {
    padding-top: 400px;
    padding-bottom: 350px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background: url(../public/img/A7306778.jpg) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* -moz-background-size: cover;
    -webkit-background-size: cover; */
    background-position: top center;
}

.bg-img02-images-twe {
    padding-top: 400px;
    padding-bottom: 350px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background: url(../public/img/A7306792.jpg) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* -moz-background-size: cover;
    -webkit-background-size: cover; */
    background-position: top center;
}

@media (max-width:800px) {
    .block {
        background-color: #fff;
        padding: 200px;
    }

    .bg-img02-images-one {
        background: url(../public/img/m_A7306778.jpg) no-repeat;
        background-attachment: fixed;
        background-size: contain;
    }

    .bg-img02-images-twe {
        background: url(../public/img/m_A7306792.jpg) no-repeat;
        background-attachment: fixed;
        background-size: contain;
    }
}
</style>