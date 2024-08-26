<template>
  <div class="right">
    <MatchTypeTab/>
    <div class="recent-match-stats">
      <MatchHistoryStats/>
      <MatchHistoryCard/>
<!---->
<!--      <Element3/>-->
<!--      <Element4/>-->
<!--      <Element5/>-->
<!--      <View6/>-->
    </div>
  </div>
</template>
<!--!TODO: 동일한 색상은 styleguide에 변수로 등록하기-->
<script>
import MatchTypeTab from "./Right/sections/MatchTypeTab.vue";
import MatchHistoryStats from "./Right/sections/RecentMatchHistoryOverview.vue";
import MatchHistoryCard from "./Right/sections/MatchHistoryCard.vue";
import Element3 from "./Right/sections/Element3.vue";
import Element4 from "./Right/sections/Element4.vue";
import Element5 from "./Right/sections/Element5.vue";
import View6 from "./Right/sections/View6.vue";

export default {
  name: "Right",
  components: {
    MatchTypeTab,
    MatchHistoryStats,
    MatchHistoryCard,
    Element3,
    Element4,
    Element5,
    View6,
  },
};
</script>


<style>
.right {
  background-color: #ffffffcc;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 2px #00000040;
  width: 71.2%;
  height: 100%;
}

.recent-match-stats {
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  width: 100%;
  padding: 2%;
  gap:10px;
}
</style>