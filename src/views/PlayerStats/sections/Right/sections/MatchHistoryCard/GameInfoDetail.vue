<script>
export default {
  name: 'GameInfoDetail',
  props: ["teamKill", "playerKill", "playerAssistant", "damageToPlayer", "mmrBefore", "mmrGain", "routeIdOfStart"],
  data() {
    return {}
  },
  computed: {
    upDownColor() {
      let color;
      if (this.mmrGain > 0) {
        color = 'red';
      } else if (this.mmrGain < 0) {
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
    mmrGainWithSign() {
      const mmrGain = this.mmrGain;
      if (mmrGain > 0) {
        return `+${mmrGain}`;
      } else if (mmrGain < 0) {
        return `${mmrGain}`;
      } else {
        return mmrGain;
      }
    },
    routeId() {
      if (this.routeIdOfStart) {
        return this.routeIdOfStart;
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
      <p class="played-data">{{ teamKill }} / {{ playerKill }} / {{ playerAssistant }}</p>
    </div>
    <div class="detail-box">
      <p class="data-name">딜량</p>
      <p class="played-data">{{ damageToPlayer }}</p>
    </div>
    <div class="detail-box">
      <p class="data-name">RP</p>
      <p class="played-data">{{ mmrBefore }} <span :style="upDownColor">{{ mmrGainWithSign }}</span></p>
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
  justify-content: center;
  width: 40%;
  padding-left: 1%;
  padding-right: 1%;
  height: 100%;
  gap: 2%;
}

.detail-box {
  display: flex;
  flex-direction: column;
  gap: 2%;
  width: fit-content;
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