<template>
    <div class="login content">
        <Title :title='title'></Title>
        <div class="userLogin">
            <h3>快速開始</h3>
            <div class="userLogo" id="userLogo" v-bind:style="{ backgroundImage: userPath }">
                <div class="camera" @click="showLogo">
                    <span class="iconify" data-icon="icomoon-free:camera" data-inline="false"></span>
                </div>
            </div>
            <div class="userInfo">
                <div class="nickName">
                    <span class="iconify" data-icon="fa-regular:user" data-inline="false"></span>
                    <span>暱稱 : </span>
                    <label class="text">
                        <input v-model="userName" type="text" maxlength="20" placeholder="您的暱稱">
                    </label>
                </div>
                <span v-if="checkName"  style="color: red; position: absolute">❌ 請輸入暱稱</span>
            </div>
        </div>
        <GameButton :loadBtn='startGame'></GameButton>
    </div>

    <div class="modal" id="logoModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="chooseBlock">
                <LogoCard :closeModal="closeModal"
                            @handle="handle">
                </LogoCard>
            </div>
        </div>
    </div>
    
</template>

<script>
import LogoCard from './LogoCard'
import GameButton from './GameButton'
import Title from './Title'

export default {
    name: 'LoginContent',
    components:{
        LogoCard, GameButton, Title
    },
    watch:{
        userPath: function(){
            console.log(this.userPath);
        }
    },
    methods:{
        showLogo,
        closeModal,
        handle: function(value){
            this.userPath = value;
        },
        startGame: function(){
            console.log(this.userPath);
            if (this.userName == ''){
                this.checkName = true;
            }else{
                this.checkName = false;
                this.$router.push({ name:'Set', params:{ userName: this.userName,
                                                            userPath: this.userPath }});
            }
        }
    },
    data (){
        return{
            title: '開始遊戲',
            userName: '',
            userPath: `url(${require('../assets/Images/5.jpg')})`,
            checkName: false
        }
    },
    created(){
    }
}

function showLogo(){
    document.getElementById("logoModal").style.display = "block";
}
function closeModal(){
    document.getElementById("logoModal").style.display = 'none';
}

</script>

<style lang="scss" scoped>
    .content {
        background-color:#fff;
        width: 800px;
        height: 480px;
        margin: 10px 0;
        border-radius: .8rem;

        .userLogin{
            width: 400px;
            margin: 0 auto;

            & h3{
                color: #6495ed;
                margin-top: 0;
            }

            .userLogo{
                width: 110px;
                height: 110px;
                border: 3px solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 0 3px #043173;
                margin: 0 auto;
                // background-image: url('../assets/Images/0.jpg');
                background-size: 150%;
                background-position: center;
                position: relative;

                .camera{
                    position: absolute;
                    right: -10px;
                    top: -5px;
                    border: 3px solid #fff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    background-color: #6495ed;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &:hover{
                        cursor: pointer;
                        background-color: #4eb2f5;
                    }
                    .iconify{
                        width: 24px;
                        height: 24px;
                        line-height: 40px;
                        color: #fff;
                    }
                }
            }
            .userInfo{
                margin: 40px;
                color:#797979;
                font-size: 18px;
                .nickName{
                    display: flex;
                    align-items: center;
                    .iconify{
                        margin: 0 5px;
                        color: #6495ed;
                        width: 24px;
                        height: 24px;
                        
                    }

                    label{
                        margin: 0 10px;
                        input[type="text"] {
                            width: 150px;
                            height: 30px;
                            padding: 0 10px;
                            // font-size: 20px;
                            border: 3px solid #797979;
                            border-radius: 10px;

                            &:focus{
                                border-color: #6495ed;
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
    }

    .modal{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: .6);
        display: none;
        position: fixed;
        z-index: 1;
        margin: 0 auto;
        top: 0;
        left: 0;
        .modal-content{
            margin: 10% auto;
            width: 600px;
            height: 350px;
            background-color: #fff;
            border-radius: 1rem;
            padding: 20px 50px;
            position: relative;
            .close {
                color: #aaa;
                right: 10px;
                top: 0;
                position: absolute;
                font-size: 60px;
                font-weight: bold;

                &:hover,
                &:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
        }
    }

    .chooseBlock{
        width: 540px;
        border: 1px solid black;
        height: 300px;
        margin: 20px auto;
        background-color: rgba(159,189,201,0.7);
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;

        justify-content:left;
        .card{
            width: 110px;
            height: 140px;
            padding: 5px;
            margin: 5px;
            display: flex;
            align-items: center;
            background-color: #fff;
        }
    }

    .userLogo{
                width: 110px;
                height: 110px;
                border: 3px solid #fff;
                border-radius: 50%;
                box-shadow: 0 0 0 3px #043173;
                margin: 0 auto;
                background-image: url('../assets/Images/0.jpg');
                background-size: 150%;
                background-position: center;
                position: relative;

                .camera{
                    position: absolute;
                    right: -10px;
                    top: -5px;
                    border: 3px solid #fff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    background-color: #6495ed;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &:hover{
                        cursor: pointer;
                    }
                    .iconify{
                        width: 24px;
                        height: 24px;
                        line-height: 40px;
                        color: #fff;
                        
                    }
                }
            }
</style>