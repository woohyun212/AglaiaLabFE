<script>
import PlayerStats from "@/views/PlayerStats.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "HomePage",
  components: {SearchBar, PlayerStats},

}
console.log()
</script>

<template>
  <div id="homepage">
    <h1 style="font-size: 100px">아글라이아 프로젝트</h1>
    <!--    <a style="font-size: 200px"href="/player-stats">player-stats</a>-->
    <router-link style="font-size: 200px" to='/player-stats'>Player Stats</router-link>
    <SearchBar/>
    <!--    <img-->
    <!--        style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;"-->
    <!--        src="https://cdn.w00.kr/ER/RankTier/Gold.png">-->
    <!--    <img :src="`${$ERCDN}/image.png`" alt="CDN Image" />-->

  </div>
</template>

<style scoped>

</style>