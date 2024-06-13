<template>
<div class="more">
    <a href="#">more</a>
</div>
</template>

<style>
.more a{
    position: relative;
}
.more a::before{
    position: absolute;
    content: '';
    top: 0;
    width: 300px;
    height: 150px;
    background-image: url(@/assets/img/camera_tree_line.png;);
}
</style>