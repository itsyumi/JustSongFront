<template>
    <div class="content">
        <router-link to="/">
            <span class="iconify back" data-icon="whh:stepbackward" data-inline="false"></span>
        </router-link>
        <Title :title='title'></Title>
        <div class="chooseBlock">
            <div class="top">
                <p>主題</p>
                <p>選擇一個歌曲清單</p>
            </div>
            <div class="songList">
                <SongListCard v-for="(item, index) in songList" 
                              v-bind:key="index" 
                              :songListImg="item.songListImg" 
                              :songListName="item.songListName">
                </SongListCard>
            </div>
        </div>
        <GameButton :loadBtn='startGame'></GameButton>
    </div>
</template>

<script>
import Title from './Title'
import GameButton from './GameButton'
import SongListCard from './SongListCard'

export default {
    name: 'Setting',
    components:{
        Title, GameButton, SongListCard
    },
    methods:{
        startGame
    },
    data (){
        return{
            title: '遊戲設定',
            songList:[
                {songListImg: "#", songListName: "國語經典歌曲1"},
                {songListImg: "#", songListName: "國語經典歌曲2"},
                {songListImg: "#", songListName: "國語經典歌曲3"},
                {songListImg: "#", songListName: "國語經典歌曲4"},
                {songListImg: "#", songListName: "國語經典歌曲5"},
            ]
        }
    }
}

function startGame(){
    this.$router.push('/game');
}

</script>

<style lang="scss" scoped>
    .back{
        width: 40px;
        height: 40px;
        color: green;
        left: 20px;
        top: 20px;
        position: absolute;
        &:hover{
            cursor: pointer;
        }
    }
    .content{
        background-color: #fff;
        height: 480px;
        width: 800px;
        border-radius: .8rem;
        margin: 10px 0;
        position: relative;
    }
    .chooseBlock{
        width: 520px;
        border: 1px solid #5d8899;
        height: 280px;
        margin: 0 auto 10px;
        background-color: rgba(159,189,201,0.7);
        border-radius: .8rem;
        padding: 10px;
        .songList{
            height: 200px;
            margin: 10px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            overflow: auto;
            &::-webkit-scrollbar{
                width: 8px;
            }
            &::-webkit-scrollbar-thumb{
                background-color: gray;
                border-radius: 10px;
            }
        }
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ghostwhite;
            border-radius: .8rem;
            box-shadow: .5px .5px gray;
            border: 1px solid gray;
            padding: 0 20px;
            p:nth-child(1){
                color: blue;
                font-weight: bold;
            }
            p:nth-child(2){
                color: gray;
                font-size: 14px;
            }
        }
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
</style>