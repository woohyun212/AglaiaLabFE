<template>
  <div class="content">
    <img
        class="rank-image"
        alt="Rank image group"
        :src="`${$ERCDN}/RankTier/${computedTier.split(' ')[0]}.png`"
    />
    <div class="blur-layer"/>
    <PlayerHeader/>
    <div class="under-section">
<!--      <Left/>-->
<!--      <Right/>-->
    </div>
  </div>
</template>

<script>
import PlayerHeader from "@/views/PlayerStats/sections/PlayerHeader.vue";
import Left from "@/views/PlayerStats/sections/Left.vue";
import Right from "@/views/PlayerStats/sections/Right.vue";
import {mapGetters} from "vuex";

export default {
  name: "PlayerStats",
  components: {
    PlayerHeader,
    Left,
    Right,
  },
  props: ['nickname'], // 라우터 파라미터를 받음
  computed: {
    ...mapGetters(['computedTier']),
    ...mapGetters(['allData']), // Vuex에서 데이터를 가져오기
  },
  created() {
    this.$store.dispatch('fetchData', this.nickname); // 컴포넌트 생성 시 API 요청 실행
  },
};
</script>


<style>
.content {
  background-color: #6c6c6c;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;

  height: fit-content;
  flex: 1;
  align-items: center;
  overflow: hidden;
}


.content .rank-image {
  top: 0;
  left: 0;
  width: 55vw;
  height: auto;
  object-fit: cover;
  filter: brightness(90%) /*blur(1px)*/;
  position: absolute;
}

.content .blur-layer {
  position: absolute;
  background-color: #d9d9d94c;
  height: 100%;
  width: 100%;
}

.content .under-section {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 67.5vw;
  margin-top: 10px;
  gap: 10px;
}
</style>