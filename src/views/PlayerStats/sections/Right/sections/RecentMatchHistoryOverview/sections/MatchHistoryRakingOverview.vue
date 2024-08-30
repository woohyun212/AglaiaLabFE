<template>
  <div class="match-history-overview">
    <div class="overview-group" v-for="(group) in groupMatch">
      <RankingBlock v-for="(gameData) in group" :game-rank="gameData.gameRank" :escape-state="gameData.escapeState"/>
    </div>
  </div>
</template>
<script>
import RankingBlock from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryOverview/sections/MatchHistoryRakingOverview/RankingBlock.vue";

export default {
  name: "MatchHistoryOverview",
  components: {RankingBlock},
  data() {
    return {
      gameOverviews: this.generateRandomData(),
    }
  },
  methods: {
    generateRandomData() {
      const data = [];
      for (let i = 0; i < 20; i++) {
        const firstElement = Math.floor(Math.random() * 8) + 1; // 1부터 8까지의 무작위 값
        const secondElement = Math.floor(Math.random() * 3) + 1; // 1부터 3까지의 무작위 값
        data.push({gameRank: firstElement, escapeState: secondElement});
      }
      return data;
    },
  },
  computed: {
    groupMatch() {
      // items를 10개씩 그룹화
      const size = 10;
      const result = [];
      for (let i = 0; i < this.gameOverviews.length; i += size) {
        result.push(this.gameOverviews.slice(i, i + size));
      }
      return result;
    }
  }
};
</script>
<style scoped>
.match-history-overview {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 2%;
  padding-right: 2%;
}

.overview-group {
  display: flex;
  flex-direction: row;
  padding-top: 1%;
  padding-bottom: 1%;
  justify-content: space-between;
}
</style>
