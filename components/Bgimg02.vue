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
    padding-top: 15vw;
    box-shadow: 0 -10px 30px 10px rgba(0, 0, 0, 0.4);
    z-index: 10;
}

.bg-img02-images-one {
    height: 800px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background: url(../assets/img/bg02-01.jpg) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-position: top center;
}

.bg-img02-images-twe {
    height: 800px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background: url(../assets/img/bg02-02.jpg) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-position: top center;
}

@media (max-width:800px) {
    .bg-img02-images-one {
        height: 400px;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    .bg-img02-images-twe {
        height: 400px;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }
}

@media (max-width:600px) {
    .bg-img02-images-one {
        background: url(../assets/img/m_A7306778.jpg);
        background-size: cover;
        background-position: center;
    }
    .bg-img02-images-twe {
        background: url(../assets/img/m_A7306792.jpg);
        background-size: cover;
        background-position: center;
    }
}
</style>