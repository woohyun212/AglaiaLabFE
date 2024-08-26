<template>
  <div class="left">
    <RankMMRStats/>
    <hr/>
    <FrequentlyUsedCharacterList />
  </div>
</template>

<script>
import RankMMRStats from "./Left/sections/RankMMRStats.vue";
import FrequentlyUsedCharacterList from "./Left/sections/FrequentlyUsedCharacterList.vue";
import MMRChart from "@/views/PlayerStats/sections/Left/sections/RankMMRStats/MMRChart.vue";

export default {
  name: "Left",
  components: {
    MMRChart,
    RankMMRStats,
    FrequentlyUsedCharacterList,
  },
};
</script>


<style>
.left {
  display: flex;
  flex-direction: column;
  background-color: #ffffffcc;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 2px #00000040;
  width: 33.9%;
  height: fit-content;
  padding: 2%;
}
</style>