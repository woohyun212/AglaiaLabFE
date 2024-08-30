<template>
  <div class="rank-match-stats">
    <h2 class="sub-title">랭크 게임</h2>
    <p class="match-info-text">
      팀운 좋음<br/>
      상위 0.01%
    </p>
  </div>
  <hr/>
  <div class="rank-mmr-stats">
    <img class="rank-icon" alt="Rank icon" :src="`${$ERCDN}/RankTier/Immortal.png`"/>
    <div class="rank-info">
      <p class="rank-info-pre"><span class="rank-tag">이터니티</span><span class="mmr-sub">10,301 RP</span></p>
      <p class="rank-info-pre">승률 99.9 % <span class="mmr-sub">319승 12패</span></p>
    </div>
  </div>
  <MMRChart/>
</template>

<script>
import {Bar} from 'vue-chartjs'
import MMRChart from "@/views/PlayerStats/sections/Left/sections/RankMMRStats/MMRChart.vue";

export default {
  name: "RankMMRStats",
  components: {MMRChart},
};

</script>

<style >
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
  background-color: #ea70a9;
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
