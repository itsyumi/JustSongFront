<template>
    <div class="game">
        <div class="sideMenu">
            <SideUser></SideUser>
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
                    <input type="text" placeholder="請輸入答案" @keyup.enter="keyAnswer">
                </div>
                <div class="chatroom">
                    <span class="title">聊天室</span>
                    <textarea name="" id="chatArea" rows="5"></textarea>
                    <input type="text" placeholder="發送訊息" @keyup.enter="keyChat">
                </div>
            </div>
            <div class="iframeBlock">
                <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/rCARd-7JfAg?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <!-- <iframe width="1920" height="947" src="https://widget.kkbox.com/v1/?id=0t-Nj7uwKUfrAI0IiN&amp;type=song&amp;terr=tw&amp;lang=en" frameborder="0" scrolling="no" allow=autoplay></iframe> -->
                <!-- <iframe width="300" height="100" src="https://widget.kkbox.com/v1/?id=DXRGzwVSg_DL8wrWj_&amp;type=song&amp;terr=tw&amp;lang=en&amp;autoplay=true" allow="autoplay" frameborder="0" scrolling="no"></iframe> -->
            </div>
        </div>
    </div>
</template>

<script>
import SideUser from './SideUser'

export default {
    name: 'Game',
    components:{
        SideUser
    },
    methods: {
        keyAnswer(e){
            document.getElementById('ansArea').value += e.target.value + '\n';
        },
        keyChat(e){
            document.getElementById('chatArea').value += e.target.value + '\n';
        },
        playSong(){
            // var iframe = document.querySelector('iframe');
            var src = "https://widget.kkbox.com/v1/?id=DXRGzwVSg_DL8wrWj_&type=song&terr=tw&lang=en&autoplay=true";
            var iframe = document.querySelector('.iframeBlock');
            let item = document.createElement("iframe");
            item.setAttribute("width", "300");
            item.setAttribute("height", "100");
            item.setAttribute("src", src);
            item.setAttribute("allow", "autoplay 'src'");
            item.setAttribute("frameborder", 0);
            item.setAttribute("scrolling", "no");
            iframe.appendChild(item);
            console.log(item.contentWindow.document)

            iframe.play();
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
                        vm.playSong();
                    }
                }, 1000 * i);
            }
            
        },
    },
    mounted (){
        this.prepare();
    },
    data() {
        return {
            preparedTime: 3,
        }
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

    .iframeBlock{
        // position: absolute;
        // visibility: hidden;
        // top: 0;
    }
</style>