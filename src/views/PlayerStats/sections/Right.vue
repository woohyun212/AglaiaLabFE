<template>
  <div class="right">
    <MatchTypeTab/>
    <div class="recent-match-stats">
      <RecentMatchHistoryOverview/>
      <MatchHistoryCard/>
    </div>
  </div>
</template>

<script>
import MatchTypeTab from "./Right/sections/MatchTypeTab.vue";
import RecentMatchHistoryOverview from "./Right/sections/RecentMatchHistoryOverview.vue";
import MatchHistoryCard from "./Right/sections/MatchHistoryCard.vue";

export default {
  name: "Right",
  components: {
    MatchTypeTab,
    RecentMatchHistoryOverview,
    MatchHistoryCard
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