<template>
    <div class="title">
        <div class="gtitle">
            <h1>{{title}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props:{
        title:String
    }
}
</script>

<style lang="scss" scoped>
    .title{
        padding: 20px 0;
        height: 70px;
        display: flex;
        align-items: center;
        .gtitle{
            width: 300px;
            height: 50px;
            border-radius: .5rem;
            box-shadow: 4px 4px #ffdead;
            background-color: #fce6c9;
            margin: 0 auto;
            & h1{
                color: #6495ed;
                line-height: 50px;
                margin: 0;
            }
        }
    }
</style>