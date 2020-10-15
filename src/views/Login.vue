<template>
    <div class="background">
        <div class="body">
            <Header></Header>
            <LoginContent></LoginContent>
            <Footer></Footer>
        </div>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import LoginContent from '@/components/LoginContent.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Layout',
    components: {
      Header, LoginContent, Footer
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