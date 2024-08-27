<template>
  <div class="right">
    <MatchTypeTab/>
    <div class="recent-match-stats">
      <RecentMatchHistoryOverview/>
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
import RecentMatchHistoryOverview from "./Right/sections/RecentMatchHistoryOverview.vue";
import MatchHistoryCard from "./Right/sections/MatchHistoryCard.vue";
import Element3 from "./Right/sections/silver.vue";
import Element4 from "./Right/sections/bronze.vue";
import Element5 from "./Right/sections/else.vue";
import View6 from "./Right/sections/escape.vue";

export default {
  name: "Right",
  components: {
    MatchTypeTab,
    RecentMatchHistoryOverview,
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