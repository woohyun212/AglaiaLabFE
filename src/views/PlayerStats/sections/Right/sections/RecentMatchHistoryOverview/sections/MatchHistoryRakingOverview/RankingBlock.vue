<template>
  <p v-if="!isEscape" :class="computedClass">{{ gameRank }}</p>
  <div v-if="isEscape" class="basic-block escape-image" alt="Image"/>
</template>

<script>
export default {
  name: "RankingBlock",
  props: ['gameRank', 'escapeState'],
  computed: {
    isEscape() {
      if (this.escapeState === 3) {
        return true;
      }
    },
    computedClass() {
      if (this.gameRank === 1) {
        return ['basic-block', 'gold'];
      } else if (this.gameRank === 2) {
        return ['basic-block', 'silver'];
      } else if (this.gameRank === 3) {
        return ['basic-block', 'bronze'];
      } else {
        return ['basic-block', 'black-letter'];
      }

    }
  }
}
</script>

<style scoped>
.basic-block {
  position: relative;
  background-color: #d9d9d9;
  border-radius: 25%;
  aspect-ratio: 1;
  height: 100%;
  min-height: 25px;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
}

.escape-image {
  background-position: center;
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
  background-size: cover; /* 배경 이미지가 요소 크기에 맞게 확장되도록 설정 */
  background-image: url("src/assets/escape-man.svg");
  transform: scaleX(-1);
}

.gold {
  background: linear-gradient(135deg, rgb(255, 252, 163) 0%, rgb(196, 159, 70) 100%);
  color: #ffffff;
}


.silver {
  background: linear-gradient(135deg, rgb(235, 235, 235) 0%, rgb(133, 133, 133) 100%);
  color: #ffffff;
}

.bronze {
  background: linear-gradient(135deg, rgb(196, 152, 87) 0%, rgb(94, 73, 42) 100%);
  color: #ffffff;
}
</style>