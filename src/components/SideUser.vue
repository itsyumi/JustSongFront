<template>
    <div class="sideUser">
        <div class="userLogo"></div>
        <div class="userInfo">
            <p class="userName">berry</p>
            <p>得分 : <span class="score">50</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideUser'
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
            display: flex;
            flex-wrap: wrap;
            align-items: center;
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