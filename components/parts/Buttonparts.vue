<template>

    <button type="button"><slot /></button>
    
</template>

<style scoped>
button{
    font-family: var(--font_text);
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: #ffcd4b;
    max-width: 276px;
    height: 49px;
    border-radius: 50px;
    border: none;
    padding:  10px 48px;
}
</style>