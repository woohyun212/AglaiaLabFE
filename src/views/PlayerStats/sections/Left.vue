<template>
  <div class="left">
    <RankMMRStats/>
    <MMRChart/>
    <hr/>
    <Most10CharacterList />
  </div>
</template>

<script>
import RankMMRStats from "./Left/sections/RankMMRStats.vue";
import MMRChart from "@/views/PlayerStats/sections/Left/sections/RankMMRStats/MMRChart.vue";
import Most10CharacterList from "./Left/sections/Most10CharacterList.vue";

export default {
  name: "Left",
  components: {
    MMRChart,
    RankMMRStats,
    Most10CharacterList,
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