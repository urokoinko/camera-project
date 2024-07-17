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
button:hover{
    transition: 0.3s;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

@media (max-width:800px) {
    button{
    font-size: 16px;
    padding:  5px 48px;
    }
}
@media (max-width:430px) {
    button{
    font-size: 14px;
    padding:  0px 35px;
    }
}

</style>