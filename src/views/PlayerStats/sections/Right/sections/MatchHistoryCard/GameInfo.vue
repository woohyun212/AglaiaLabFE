<script>
export default {
  name: "GameInfo",
  props: ["gameInfo","gameRank","matchingMode","playTime","startDtm","preMadeMatchingType"],
  data() {
    return {}
  },
  computed: {
    matchingModeToString() {
      return this.gameInfo.matchingMode === 2 ? "일반" : this.gameInfo.matchingMode === 3 ? "랭크" : undefined;
    },
    formattedPlayTime() {
      const totalSeconds = Math.floor(this.gameInfo.playTime / 1000); // 밀리초를 초 단위로 변환
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`;
    },
    lastPlayedAgo() {
      const now = Date.now();
      const diffInMillis = now - this.gameInfo.startDtm;
      const diffInSeconds = Math.floor(diffInMillis / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      if (diffInSeconds < 60) {
        return `${diffInSeconds}초 전`;
      } else if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
      } else if (diffInHours < 24) {
        return `${diffInHours}시간 전`;
      } else if (diffInDays <= 6) { // 6일 이하라면 "n일 전"으로 반환
        return `${diffInDays}일 전`;
      } else { // 6일 이상이면 "a월 b일"로 반환
        const date = new Date(this.gameInfo.startDtm);
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
        const day = date.getDate();
        return `${month}월 ${day}일`;
      }
    }
  }
}
</script>

<template>
  <div class="game-info">
    <div class="game-ranking">#{{ gameInfo.gameRank }}</div>
    <div class="game-type">{{ matchingModeToString }}</div>
    <div class="game-time-info">{{ formattedPlayTime }}</div>
    <div class="game-time-info">{{ lastPlayedAgo }}</div>
  </div>
</template>

<style scoped>

.game-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  height: 100%;
  padding-left: 2%;
  white-space: nowrap;
}

.game-ranking {
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(196, 159, 70) 0%, rgb(255, 252, 163) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2rem;
  text-shadow: 0 0 2px #00000040;
  white-space: nowrap;
  margin-bottom: 5%;
}

.game-type {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5%;
}

.game-time-info {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}
</style>