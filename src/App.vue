<template>
<!--    <Header />-->
      <router-view />
<!--    <Footer />-->
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // Header,
    // Footer
  }
}
</script>

<style>
@import './assets/styles.css';
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>