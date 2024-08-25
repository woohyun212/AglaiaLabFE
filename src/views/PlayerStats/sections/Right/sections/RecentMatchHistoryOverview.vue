<template>
  <div ref="container" :style="{ gap: computedGap }" class="recent-match-history-stats">
    <div class="stats-group">
      <Recent20MatchStat/>
      <MatchHistoryOverview/>
    </div>
    <div class="stats-group">
      <p id="fast-out" class="stat-box bad">
        사출<span style="margin-left: 20px;"></span><span class="value-wrapper">12</span><span
          class="unit-wrapper">회</span>

      </p>
      <p id="carry-power" class="stat-box good">
        캐리력<span style="margin-left: 20px;"></span><span class="value-wrapper">99 </span><span
          class="unit-wrapper">회</span>

      </p>
      <p id="average-contribute" class="stat-box">
        평균<span style="margin-left: 20px;"></span><span class="value-wrapper">2 </span><span
          class="unit-wrapper">인분</span>

      </p>
      <p id="mental" class="stat-box bad">
        멘탈<span style="margin-left: 20px;"></span><span class="value-wrapper">9 </span><span
          class="unit-wrapper">점</span>
      </p>
    </div>
  </div>
</template>

<script>
import Recent20MatchStat
  from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryOverview/sections/Recent20MatchStat.vue";
import MatchHistoryOverview
  from "@/views/PlayerStats/sections/Right/sections/RecentMatchHistoryOverview/sections/MatchHistoryRakingOverview.vue";

export default {
  name: "RecentMatchHistoryStats",
  components: {
    Recent20MatchStat,
    MatchHistoryOverview,
  },
  data() {
    return {
      computedGap: '0px' // 기본 gap 값
    };
  },
  mounted() {
    this.updateGap();
    window.addEventListener('resize', this.updateGap); // 창 크기 조정 시에도 갭 업데이트
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateGap); // 컴포넌트가 파괴되기 전에 리스너 제거
  },
  methods: {
    updateGap() {
      const containerWidth = this.$refs.container.offsetWidth; // 컨테이너의 현재 너비를 가져옴
      console.log(containerWidth);
      this.computedGap = `${containerWidth * 0.02}px`; // 너비의 2%를 gap으로 설정
    }
  }
};
</script>


<style scoped>
.recent-match-history-stats {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 4px #00000040;
  padding: 2%;
  display: flex;
  flex-direction: column;
}

.stats-group {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 2%;
}

.stat-box {
  width: 100%;
  height: 100%;
  padding: 1%;
  border-radius: 4px;
  background-color: #525252;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  font-family: "Noto Sans KR", Helvetica;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
}

.value-wrapper {
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 5px;
}

.unit-wrapper {

}

.good {
  background-color: #96bdd3;
}

.bad {
  background-color: #aa6464;
}

.normal {
}

</style>