<template>
  <div class="rank-overview">
    <p class="mmr">{{ playerStatsData.mmr }} RP</p>
    <div class="tier">
      <p>이터니티 - {{ playerStatsData.tireMmr }} RP</p>
      <p>랭크 {{ playerStatsData.rank.toLocaleString() }}위 (상위 {{ playerStatsData.rankPercent }}%)</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "RankOverview",
  computed: {
    ...mapState(["playerStatsData"]),
  }
};
</script>


<style>
.rank-overview {
  display: flex;
  flex-direction: column;
}

.rank-overview .mmr {
  color: #abdb64;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 2.5rem;
  font-weight: var(--noto-sans-kr-font-weight-bold);
  letter-spacing: 0;
  line-height: 2.5rem;
  text-shadow: 4px 4px 4px #00000040;
  white-space: nowrap;
  margin-bottom: 0.8rem;
}

.rank-overview .tier {
  display: flex;
  flex-direction: column;
}

.rank-overview .tier p {
  color: #000000;
  font-family: "Noto Sans KR", Helvetica, serif;
  font-size: 1rem;
  font-weight: var(--noto-sans-kr-font-weight-medium);
  letter-spacing: 0;
  line-height: 1.2;
  white-space: nowrap;
}
</style>
