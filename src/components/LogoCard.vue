<template>
    <div class="card" v-for="(path, index) in logoImageList" v-bind:key="index" v-on:click="updateUserLogo">
        <div class="userLogo" v-bind:style= path></div>
    </div>
</template>

<script>
export default {
    name: 'LogoCard',
    props:{
        closeModal:Function
    },
    data(){
        return{
            logoImageList: [
                {backgroundImage: `url(${require('../assets/Images/0.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/1.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/2.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/3.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/4.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/5.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/6.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/7.jpg')})`},
                {backgroundImage: `url(${require('../assets/Images/8.jpg')})`}
            ]
        }
    },
    methods:{
        updateUserLogo: function (e) {
            // console.log(e.target.querySelector('.userLogo').style.backgroundImage);
            let child = e.target.querySelector('.userLogo');
            if (child != null){
                document.getElementById('userLogo').style.backgroundImage = child.style.backgroundImage;
            }else{
                document.getElementById('userLogo').style.backgroundImage = e.target.style.backgroundImage;
            }
            
            this.closeModal();
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        width: 110px;
        height: 140px;
        padding: 5px;
        margin: 5px;
        display: flex;
        align-items: center;
        background-color: #fff;
        &:hover{
            cursor: pointer;
            .userLogo{
                box-shadow: 0 0 0 3px #043173;
            }
        }

        .userLogo{
            width: 110px;
            height: 110px;
            border: 3px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 0 1px gray;
            margin: 0 auto;
            background-image: url('../assets/Images/2.jpg');
            background-size: 150%;
            background-position: center;
            position: relative
        }
    }
</style>