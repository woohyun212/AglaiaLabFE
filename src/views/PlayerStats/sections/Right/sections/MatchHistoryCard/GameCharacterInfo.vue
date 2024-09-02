<script>
import {CHARACTER_NUMBER_TABLE} from '@/data/data.js'

export default {
  name: 'GameCharacterInfo',
  props: ["gameCharacterInfo"],
  data() {
    return {}
  },
  computed: {
    cardCharacterImageUrl() {
      const charNum = this.gameCharacterInfo.characterNum.toString().padStart(3, '0')
      return {backgroundImage: `url("${this.$ERCDN}/Character/${charNum}/${this.gameCharacterInfo.skinCode}/mini.png")`}
    },
    getCharacterName() {
      return CHARACTER_NUMBER_TABLE[this.gameCharacterInfo.characterNum];
    }
  }
}
</script>

<template>
  <div class="game-character-info">
    <div :style="cardCharacterImageUrl" class="game-character">
      <div class="game-character-level">{{ gameCharacterInfo.characterLevel }}</div>
    </div>
    <div class="game-character-name">{{ gameCharacterInfo.getCharacterName }}</div>
  </div>
</template>

<style scoped>
.game-character-info {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 9%;
  margin-left: 0%;
  justify-content: center;
  align-items: center;
}


.game-character {
  background-color: #d6d6d6;
  background-position: center;
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
  background-size: cover;
  border-radius: 25%;
  width: 80%;
  aspect-ratio: 1;
}

.game-character-name {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  margin-top: 5%
}

.game-character-level {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1rem;
  text-align: center;
  background-color: #ffffff;
  border: 0.3px solid #dfdfdf;
  border-radius: 100%;
  height: 33%;
  width: 33%;
  position: relative;
  left: 66%;
  top: 66%
}
</style>