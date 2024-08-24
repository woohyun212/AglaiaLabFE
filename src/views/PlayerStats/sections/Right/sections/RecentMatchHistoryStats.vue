<template>
  <div class="recent-match-history-stats">
<!--      <Recent20MatchStat />-->
<!--      <MatchHistoryRakingOverview />-->
    <div class="grid-container">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
<!--    <OverlapWrapper />-->
<!--    <OverlapGroupWrapper />-->
<!--    <View3 />-->
<!--    <View4 />-->
  </div>
</template>

<script>
import Recent20MatchStat from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/Recent20MatchStat.vue";
import OverlapWrapper from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/OverlapWrapper.vue";
import OverlapGroupWrapper from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/OverlapGroupWrapper.vue";
import View3 from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/View3/View3.vue";
import View4 from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/View4/View4.vue";
import MatchHistoryRakingOverview from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/MatchHistoryRakingOverview.vue";
import ElementWrapper from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryStats/sections/ElementWrapper.vue";

export default {
  name: "RecentMatchHistoryStats",
  components: {
    Recent20MatchStat,
    OverlapWrapper,
    OverlapGroupWrapper,
    View3,
    View4,
    MatchHistoryRakingOverview,
    ElementWrapper,
  },
};
</script>


<style>
.recent-match-history-stats {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #00000040;
  padding: 2%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 첫 번째 행: 두 개의 열 */
  gap: 10px; /* 각 셀 사이의 간격 */
}

.grid-item:nth-child(1),
.grid-item:nth-child(2) {
  grid-column: span 1; /* 첫 번째 행: 두 개의 셀 */
}

.grid-item:nth-child(3),
.grid-item:nth-child(4),
.grid-item:nth-child(5),
.grid-item:nth-child(6) {
  grid-column: span 2; /* 두 번째 행: 네 개의 셀 */
}

.grid-item {
  background-color: lightgray;
  border: 2px solid black;
  height: 100px; /* 각 셀의 높이 */
}

</style>