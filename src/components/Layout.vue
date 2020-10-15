<template>
    <div class="background">
        <div class="body">
            <Header></Header>
            <Login v-if="true"></Login>
            <Game v-else></Game>
            <Footer></Footer>
            <div class="footer"></div>
        </div>
    </div>
</template>


<script>
import Header from './Header'
import Login from './Login'
import Footer from './Footer'
import Game from './Game'

export default {
    name: 'Layout',
    components: {
      Header,
      Login,
      Footer,
      Game
    }
}
</script>

<style>
    .background{
        height: 100%;
    }

    .body{
        width: 800px;
        margin: 0 auto;
    }
</style>