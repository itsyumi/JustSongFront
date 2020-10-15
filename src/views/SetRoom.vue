<template>
    <div class="background">
        <div class="body">
            <Header></Header>
            <Setting></Setting>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Setting from '@/components/Setting.vue'

export default {
    name: 'SetRoom',
    components: {
      Header, Footer, Setting
    }
}
</script>

<style lang="scss" scoped>
    .background{
        height: 100%;
    }

    .body{
        width: 800px;
        margin: 0 auto;
    }
</style>