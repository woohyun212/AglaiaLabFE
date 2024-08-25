<template>
  <div class="recent20-stats">
    <div class="win-rate-bar">
      <CircleProgressBar
          :value="value"
          :max="100"
          colorBack="#000000"
          colorUnfilled="#A5D261"
          colorFilled="#ffD261"
          stroke-width="8"
          :size="60"
      />
      <span
          style="color:#A5D261;
          font-weight: 800;
          position: absolute;
          top:50%;
          left: 50%;
          white-space: nowrap;
          transform: translate(-50%, -50%); ">{{ value }}%</span>
    </div>

    <div class="stat">
      <div class="stats-title">평균 TK</div>
      <div class="stats-value">14.3</div>
    </div>
    <img class="line" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-5.svg"/>
    <div class="stat">
      <div class="stats-title">TOP 3</div>
      <div class="stats-value">20</div>
    </div>
    <img class="line" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-5.svg"/>
    <div class="stat">
      <div class="stats-title">승리 횟수</div>
      <div class="stats-value">10</div>
    </div>
    <img class="line" alt="Line" src="https://c.animaapp.com/SjFnLgAk/img/line-5.svg"/>
    <div class="stat">
      <div class="stats-title">평균 순위</div>
      <div class="stats-value">#1.5</div>
    </div>
  </div>
</template>
<script>
import {CircleProgressBar} from 'circle-progress.vue';

export default {
  name: "Recent20MatchStat",
  components: {CircleProgressBar},
  data() {
    return {
      value: 50
    }
  }
};
</script>

<style>
.recent20-stats {
  grid-area:recent20-stats;
  position: relative;
  background-color: #545454;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
}

.recent20-stats .win-rate-bar {
  position: relative;
  height: 100%;
}

.recent20-stats .line {
  height: 22px;
  object-fit: cover;
  position: relative;
  width: 1px;
}

.recent20-stats .stat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
}

.stat .stats-title {
  color: #ffffff;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 12px;
  font-weight: 300;
  height: 17px;
  letter-spacing: -0.36px;
  line-height: normal;
  position: relative;
  text-align: center;

}

.stat .stats-value {
  color: #ffffff;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.42px;
  line-height: normal;
  text-align: center;

}
</style>
