<template>
    <div class="background">
        <div class="body">
            <Header></Header>
            <Game></Game>
            <Footer></Footer>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Game from '@/components/Game'

export default {
    name: 'Layout',
    components: {
      Header, Footer, Game
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