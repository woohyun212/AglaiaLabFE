<template>
  <div class="left">
    <RankMMRStats />
<!--    <FrequentlyUsedCharacterList />-->
  </div>
</template>

<script>
import RankMMRStats from "./Left/sections/RankMMRStats.vue";
import FrequentlyUsedCharacterList from "./Left/sections/FrequentlyUsedCharacterList.vue";

export default {
  name: "Left",
  components: {
    RankMMRStats,
    FrequentlyUsedCharacterList,
  },
};
</script>


<style>
.left {
  background-color: #ffffffcc;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 2px #00000040;
  width: 33.9%;
  height: 100%;
  padding: 2%;
}
</style>