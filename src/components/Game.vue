<template>
    <div class="game">
        <div class="sideMenu">
            <SideUser :userName="userName"></SideUser>
        </div>
        <div class="mainGame">
            <div class="prepareTime" id="prepareTime" v-text="preparedTime" v-if="preparedTime!=0"></div>
            <div class="muisc">
                <img src="@/assets/Images/turntable.gif" alt="">
            </div>
            <div class="contact">
                <div class="answer">
                    <span class="title" v-on:click="playSong">答案</span>
                    <textarea name="" id="ansArea" rows="5" readonly=true></textarea>
                    <input type="text" placeholder="請輸入答案" @keyup.enter="sendAnswer">
                </div>
                <div class="chatroom">
                    <span class="title">聊天室</span>
                    <textarea name="" id="chatArea" rows="5"></textarea>
                    <input type="text" placeholder="發送訊息" @keyup.enter="sendChat">
                </div>
            </div>
            <div class="iframeBlock" v-on:click="playSong">
            </div>
        </div>
    </div>
</template>

<script>
import SideUser from './SideUser'
import signalr from '../utils/signalR'

export default {
    name: 'Game',
    components:{
        SideUser
    },
    data() {
        return {
            preparedTime: 3,
            userName: '',
            // allUser: [],
            chartName: '',
            connection: null,
            ready: false,
            kkbox: '',
            onPlay: false
        }
    },
    watch:{
        onPlay: function(value){
            console.log('123', value)
            if(value){
                this.prepare();
            }
        }
    },
    created: function(){
        var name = this.$route.params.userName;
        this.userName = name;
        // signalr.start().then(this.ready=true);
        console.log(signalr.state);
        this.GetMusic();
    },
    methods: {
        playSong(){
            var iframe = document.querySelector('.iframeBlock');
            let item = document.createElement("iframe");
            item.setAttribute("width", "300");
            item.setAttribute("height", "100");
            item.setAttribute("src", this.kkbox);
            item.setAttribute("allow", "autoplay");
            item.setAttribute("frameborder", 0);
            item.setAttribute("scrolling", "no");
            iframe.appendChild(item);
        },
        prepare(){
            document.getElementById("prepareTime").style.display = "block";
            var vm = this;
            let time = 3;

            for(let i = 1; i <= time; i++){
                window.setTimeout(function() {
                    vm.preparedTime = time-i;
                    if(time-i == 0){
                        vm.isRunning = true;
                        // document.querySelector("audio-player");
                        vm.playSong();
                    }
                }, 1000 * i);
            }
        },
        sendChat(e){
            signalr.invoke("SendChat", `${e.target.value}`)
                            .catch(function (err) {
                                return console.error(err.toString());
                            });
            e.target.value = '';
        },
        sendAnswer(e){
            signalr.invoke("Answer", `${e.target.value}`)
                            .catch(function(err) {
                                return console.error(err.toString());
                            });
        },
        GetMusic(){
            signalr.invoke("GetMusic")
                            .catch(function(err) {
                                return console.error(err.toString());
                            });
        }
    },
    mounted (){
        console.log(signalr.state)

        signalr.on("GetMusic", function(json){
            this.onPlay = true;
            this.kkbox = json;
            console.log(this.kkbox)
            console.log(this.onPlay);
        })

        signalr.on("ReceiveChat", function(json){
            document.getElementById('chatArea').value += json + '\n';
        })

        signalr.on("AnswerMusic", function(json){
            document.getElementById('ansArea').value += json + '\n';
        })
    }
}

</script>

<style lang="scss" scoped>
    .prepareTime{
        width: 180px;
        height: 100px;
        background-color: coral;
        font-size: 80px;
        border-radius: 2rem;
        border: 7px solid #fff;
        color: #fff;
        font-weight: 900;
        position: absolute;
        left: 50%;
        top: 80px;
        display: none;
    }
    .game{
        display: flex;
        justify-content: center;
        height: 480px;
        margin: 10px auto;
        .sideMenu{
            border-radius: .8rem;
            margin: 0 10px;
            background-color: #fff;
            width: 200px;
            height: 100%;
            overflow-y: auto;
            padding: 10px;
            box-sizing: border-box;
        }

        .mainGame{
            margin: 0 10px;
            width: 500px;
            .muisc{
                border-radius: .8rem;
                margin: 0px;
                background-color: #fff;
                height: 300px;
                box-sizing: border-box;
                img{
                    border-radius: .8rem;
                    width: 100%;
                    height: 100%;
                }
            }
            .contact{
                border-radius: .8rem;
                margin-top: 30px;
                background-color: #fff;
                width: 480px;
                height: 130px;
                padding: 10px;
                display: flex;
                .answer{
                    padding-right: 10px;
                    border-right: 1px solid lightgray;
                    position: relative;
                }
                .chatroom{
                    position: relative;
                    padding-left: 10px;  
                }
                textarea{
                        font-size: 20px;
                        width: 220px;
                        height: 80px;
                        border: none;
                        resize: none;
                        &:focus{
                            outline: none;
                        }
                        &::-webkit-scrollbar{
                            width: 8px;
                            background-color: #fff;
                        }
                        &::-webkit-scrollbar-thumb{
                            background-color: lightgray;
                            border-radius: 10px;
                        }
                    }
                    input{
                        font-size: 20px;
                        width: 220px;
                        height: 30px;
                        margin-top: 5px;
                        border-radius: .5rem;
                        border: 2px solid darkgray; 
                        &:focus{
                            outline: none;
                        }
                    }
                .title{
                    background-color: #4682B4;
                    color: #fff;
                    padding: 3px 30px;
                    border-radius: 5px;
                    position: absolute;
                    top: -20px;
                    right: 50px;
                    font-weight: bold;
                }
            }
        }
    }
</style>