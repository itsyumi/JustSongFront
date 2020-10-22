<template>
    <div class="songListCard">
        <input type="checkbox" />
        <div class="songListBlock" v-on:click="bindCheckBox">
            <img v-bind:src="songListImg" alt="">
            <p class="listName">{{songListName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SongListCard',
    props:{
        songListImg:String,
        songListName:String
    },
    methods:{
        bindCheckBox
    }
}


function bindCheckBox(e) {  
    var cbox = e.currentTarget.parentNode.firstChild;
    cbox.checked = !cbox.checked;
    this.$emit('handle', this.songListName)
    document.querySelectorAll(".songList input").forEach(function(item){
        if(item != cbox){
            item.checked = false;
        }
    })
}

</script>

<style lang="scss" scoped>
    input:checked{
        & + .songListBlock{
            border: 5px solid #6495ed;
        }
    }
    .songListBlock{
        width: 120px;
        height: 150px;
        background-color: ghostwhite;
        margin-bottom: 5px;
        border: .5px solid gray;
        box-sizing: border-box;
        border-radius: .8rem;
        overflow: hidden;
        &:hover{
            border: 5px solid #6495ed;
            cursor: pointer;
        }
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px 0;
            background-color: lightgray;
            border-radius: .8rem;
        }
        p{
            margin: 0 auto;
            font-weight: bold;
        }
    }
</style>