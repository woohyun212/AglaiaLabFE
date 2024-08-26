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
  border: #000000 solid 1px;
  position: relative;
  color: #ffffff;
  background-color: #d9d9d9;
  border-radius: 25%;
  aspect-ratio: 1;
  height: 100%;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.5rem;
  text-align: center;
}

.escape-image {
  border: #009262 solid 1.5px;
  background-position: center;
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
  background-size: cover; /* 배경 이미지가 요소 크기에 맞게 확장되도록 설정 */
  background-image: url("https://thumb.ac-illust.com/c5/c5dfa3da4b7d546a7bbfaf68d10b3e6e_t.jpeg");
  transform: scaleX(-1);
}

.gold {
  background: rgb(255, 204, 110);
  border-radius: 5px;
}


.silver {
  color: rgb(255, 255, 255);
  background: rgb(154, 154, 154);
  border-radius: 5px;
}

.bronze {
  background: rgb(184, 87, 66);
  border-radius: 5px;
}

.black-letter {
  color: #000000;
}

</style>