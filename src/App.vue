<template>
  <div id="app">
<!--    <Header />-->
    <div class="content">
      <router-view />
    </div>
<!--    <Footer />-->
  </div>
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

.content {
  flex: 1;
}
</style>