<script>
export default {
  name: 'GameInfoDetail',
  props: ["gameInfoDetail"],
  data() {
    return {

    }
  },
  computed: {
    upDownColor() {
      let color;
      if (this.gameInfoDetail.mmrGain > 0) {
        color = 'red';
      } else if (this.gameInfoDetail.mmrGain < 0) {
        color = 'blue';
      } else {
        color = 'gray';
      }
      return {
        color: color,
        fontFamily: ["Inter", "Helvetica"],
        fontSize: "12px",
        fontWeight: 400,
        letterSpacing: 0,
      };
    },
    mmrGain() {
      const mmrGain = this.gameInfoDetail.mmrGain;
      if (mmrGain > 0) {
        return `+${mmrGain}`;
      } else if (mmrGain < 0) {
        return `${mmrGain}`;
      } else {
        return mmrGain;
      }
    },
    routeId() {
      if (this.gameInfoDetail.routeIdOfStart) {
        return this.gameInfoDetail.routeIdOfStart;
      } else {
        return "비공개";
      }
    },
  }
}

</script>

<template>
  <div class="game-info-detail">
    <div class="detail-box">
      <p class="data-name">TK / K / A</p>
      <p class="played-data">{{ gameInfoDetail.teamKill }} / {{ gameInfoDetail.playerKill }} /
        {{ gameInfoDetail.playerAssistant }}</p>
    </div>
    <div class="detail-box">
      <p class="data-name">딜량</p>
      <p class="played-data">{{ gameInfoDetail.damageToPlayer }}</p>
    </div>
    <div class="detail-box">
      <p class="data-name">RP</p>
      <p class="played-data">{{ gameInfoDetail.mmrBefore }} <span :style="upDownColor">{{ mmrGain }}</span></p>
    </div>
    <div class="detail-box">
      <p class="data-name">루트 ID</p>
      <p class="played-data">{{ routeId }}</p>
    </div>
  </div>
</template>

<style scoped>
.game-info-detail {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  padding-left: 2%;
  padding-right: 2%;
  height: 100%;
}

.detail-box {
  display: flex;
  flex-direction: column;
  gap: 2%;
  height: 100%;
  justify-content: center;

}

.played-data {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 15px;
  letter-spacing: 0;
}

.data-name {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 400;;
  letter-spacing: 0;
}
</style>