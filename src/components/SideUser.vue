<template>
    <div class="sideUser" v-for="(user, index) in allUser" v-bind:key="index">
        <div class="userLogo" v-bind:style = user.ImageUrl></div>
        <div class="userInfo">
            <p class="userName" :class="{thisUser: user.name == userName}">{{user.name}}</p>
            <p>得分 : <span class="score" v-bind:text = user.Score>0</span></p>
        </div>
    </div>
    <p>{{allUser}}</p>
</template>

<script>
import signalr from '../utils/signalR'

export default {
    name: 'SideUser',
    props:{
        userName: String
    },
    data (){
        return {
            allUser: []
        }
    },
    created: function(){
        this.InitAllUser();
    },
    mounted (){
        signalr.on("GetAllUser", function(json){
            // this.allUser = JSON.stringify(json);
            this.allUser = json;
            console.log(this.allUser)
        })
    },
    methods: {
        InitAllUser(){
            signalr.invoke("GetAllUser")
                .catch(function(err) {
                    return console.error(err.toString());
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .sideUser{
        display: flex;
        padding: 10px 5px;
        border-bottom: 1px solid gray;
        color: gray;

        .userLogo{
            width: 50px;
            height: 50px;
            border: 3px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 0 2px #043173;
            background-image: url('../assets/Images/2.jpg');
            background-size: 150%;
            background-position: center;
            position: relative;
            margin: 0 10px 0 0;
        }

        .userInfo{
            .userName{
                font-size: 20px;
            }
            .score{
                font-size: 22px;
                color: #043173;
            }
            p{
                margin: 0;
                text-align: left;
            }
        }
    }
</style>