<template>
    <div class="header">
        <h1>Just Song</h1>
    </div>
</template>


<script>
export default {
    name: 'Header'
}
</script>


<style lang="scss" scoped>
    .header{
        height: 100px;
        color: goldenrod;
        font-weight: bolder;
        // text-shadow: 5px 5px darkgoldenrod;
        -webkit-text-stroke: 4px #fff;
        font-size: 40px;
        h1{
            line-height: 100px;
            margin: 0;
        }
    }
</style>