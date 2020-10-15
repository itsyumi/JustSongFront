<template>
    <div class="gameBtn" v-on:click='loadBtn'>
        <span class="iconify" data-icon="cil:gamepad" data-inline="false"></span>
        <h3>新遊戲 !</h3>   
    </div>
</template>

<script>
export default {
    name: 'GameButton',
    props:{
        loadBtn:Function
    }
}
</script>

<style lang="scss" scoped>

    .gameBtn{
        margin: 0 auto;
        border: 5px solid #000;
        box-shadow: 2px 2px #fff inset, -3px -3px #977201 inset;
        background-color: #ffbf00;
        width: 200px;
        height: 36px;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;

        &:hover{
            cursor: pointer;
            background-color: #fcd04e;
        }
        &:active{
            background-color: #ffbf00;
            box-shadow: none;
        }
        .iconify{
            width: 30px;
            height: 30px;
            margin: 0 20px;
        }
        h3{
            margin: 0 20px;
        }
    }
</style>