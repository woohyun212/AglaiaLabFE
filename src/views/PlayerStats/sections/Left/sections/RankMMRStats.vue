<template>
  <div class="rank-match-stats">
    <h2 class="sub-title">랭크 게임</h2>
    <p class="match-info-text">
      <!--      TODO: 팀운 만들기 -->
      팀운 좋음<br/>
      상위 {{ (Math.ceil(playerStats.rank / playerStats.rankSize * 10000) / 100).toFixed(2) }}%
    </p>
  </div>
  <hr/>
  <div class="rank-mmr-stats">
    <img class="rank-icon" alt="Rank icon" :src="`${$ERCDN}/RankTier/${computedTier.split(' ')[0]}.png`"/>
    <div class="rank-info">
      <p class="rank-info-pre">
        <span class="rank-tag" :style="{backgroundColor: RANK_TIER_RP_TABLE[rankTire].bgColorCode}">
          <span :style="{color: RANK_TIER_RP_TABLE[rankTire].fontColorCode}">{{ rankTire }}</span></span>
        <span class="mmr-sub">{{ playerStats.mmr.toLocaleString() }} RP</span></p>
      <p class="rank-info-pre">승률 {{ (playerStats.totalWins / playerStats.totalGames * 100).toFixed(2) }} %
        <span class="mmr-sub">{{ playerStats.totalWins }}승 {{ playerStats.totalGames - playerStats.totalWins }}패</span>
      </p>
    </div>
  </div>
  <MMRChart/>
</template>

<script>
import {RANK_TIER_RP_TABLE} from '@/data'
import MMRChart from "@/views/PlayerStats/sections/Left/sections/RankMMRStats/MMRChart.vue";
import {mapGetters, mapState} from "vuex";

export default {
  name: "RankMMRStats",
  components: {MMRChart},
  computed: {
    ...mapState(["playerStats"]),
    ...mapGetters(['computedTier']),
    rankTire() {
      return this.computedTier;
    },

    RANK_TIER_RP_TABLE() {
      console.log(RANK_TIER_RP_TABLE[this.rankTire])
      return RANK_TIER_RP_TABLE
    },
  },
};

</script>

<style>
.sub-title {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
}

.rank-match-stats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.rank-match-stats .match-info-text {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  text-align: right;
}

.rank-mmr-stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.rank-mmr-stats .rank-icon {
  width: 35%;
}

.rank-mmr-stats .rank-info {
  display: flex;
  flex-direction: column;
}


.rank-mmr-stats .rank-info-pre {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.rank-tag {
  color: #ffffff;
  border-radius: 4px;
  padding: 1px 6px;
}

.rank-mmr-stats .mmr-sub {
  color: #666666;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 5%;
  white-space: nowrap;
}


.chart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}

.chart .graph-box {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1.23;
  background-color: #d6d6d6a8;
}

.chart .date {
  display: flex;
  flex-direction: row;
}

.date .date-text {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.33px;
  line-height: normal;
  transform: rotate(-44.15deg);
}

</style>
