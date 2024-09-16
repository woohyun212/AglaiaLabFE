<template>
  <div class="player-header">
    <div class="image-container">
      <img ref="animatedDiv" class="character-image"
           :src="`${$ERCDN}/Character/${ formattedSelectedCharacterNumber }/${ selectedCharacterStats.mostUsedSkinCode }/full.png`"/>
    </div>
    <div class="player-header-cover"/>
    <div class="info">
      <div class="player-name"><h1>{{ playerStatsData.player.nickname }}</h1>
        <ButtonWrapper/>
      </div>
<!--      <div class="recent-update">최근 업데이트: 12일 전</div>-->
      <div style="display: flex; flex-direction: row;width: 100%;height: 100%;">
        <StatsInfo/>
        <FrequentlyUsedCharacter/>
      </div>

      <div class="recent-update">최근 업데이트: 12일 전</div>
    </div>
  </div>
</template>

<script>
import ButtonWrapper from "@/views/PlayerStats/sections/ButtonWrapper.vue";
import StatsInfo from "@/views/PlayerStats/sections/PlayerHeader/sections/StatsInfo.vue";
import FrequentlyUsedCharacter from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter.vue";
import {mapGetters, mapState} from "vuex";

export default {
  name: "Info",
  components: {
    ButtonWrapper,
    StatsInfo,
    FrequentlyUsedCharacter,
  },
  data() {
    return {
      isAnimating: false, // 트랜지션 진행 여부를 추적하는 변수
    };
  },
  computed: {
    ...mapState(["playerStatsData", "selectedCharacterIndex"]),
    ...mapGetters(["selectedCharacterStats", "formattedSelectedCharacterNumber"]),
  },
  methods: {
    animateBox() {
      if (this.isAnimating) return; // 이미 트랜지션 중이면 새로운 애니메이션 무시
      this.isAnimating = true; // 트랜지션 시작

      const box = this.$refs.animatedDiv;
      // 1. 투명도가 0으로 한 후, 오른쪽으로 2배 이동 (왼쪽 이동의 2배) 및 이미지 변경
      box.style.transition = 'none'; // transition을 잠깐 비활성화
      box.style.opacity = '0'; // 투명도 복구
      box.style.transform = 'translateX(50px)'; // 오른쪽으로 2배 이동
      // 2. 다시 원래 위치로 복구하면서 투명도를 1로 복구
      setTimeout(() => {
        box.style.transition = 'all 1s'; // 다시 트랜지션 활성화
        box.style.transform = 'translateX(0px) scale(1.4)'; // 원래 위치로 복귀
        box.style.opacity = '1'; // 투명도 복구
      }, 0); // 오른쪽으로 이동한 후 원래 위치로 돌아오기 시작하는 시간
      // 트랜지션이 끝났을 때 다시 새로운 트랜지션을 허용
      setTimeout(() => {
        this.isAnimating = false; // 트랜지션 완료 후 플래그 해제
      }, 0); // 전체 애니메이션이 끝나는 시간 (1초 + 1.1초)
    },

  },
  watch: {
    selectedCharacterIndex() {
      this.animateBox(); // 상태가 true로 바뀌면 애니메이션 실행
    }
  },
  mounted() {
  }
};
</script>


<style>
.player-header {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 15vh;
  width: 67.5vw;
  height: 65vh;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgb(255, 255, 255) 61.5%,
      rgba(255, 255, 255, 0) 100%
  );
  border-radius: 15px;
  box-shadow: 0 0 4px 1px #00000040;
}

.image-container {
  position: absolute;
  top: -15vh;
  width: 100vw; /* 화면 너비 */
  height: 100vh; /* 화면 높이 */
  /*overflow: hidden; /* 이미지를 화면 밖으로 넘기지 않음 */
  opacity: 1;
  transition: all 1s; /* 기본 transition 설정 */
}

.character-image {
  position: absolute;
  top: 0%; /* 상단에 위치 */
  right: -15%; /* 우측에 위치 */
  height: 100%; /* 이미지의 높이를 화면에 맞춤 */
  width: auto; /* 비율을 유지하면서 너비를 자동으로 조정 */
  object-fit: cover; /* 비율을 유지하며 맞춤 */
  transform: scale(1.1); /* 이미지를 10% 확대 */
  transform-origin: top right; /* 확대할 때 우측 상단을 기준으로 */
}

.player-header-cover {
  position: absolute;
  width: 56%;
  height: 100%;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 37.5%,
      rgb(255, 255, 255) 65.5%,
      rgba(255, 255, 255, 0) 100%
  );
}

.info {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.info .player-name {
  display: flex;
  align-items: end;
  flex-direction: row;
  width: 100%;
  gap: 2%;
  justify-content: flex-start; /* 수평 방향 정렬: 필요에 따라 수정 가능 */
  align-items: flex-end; /* 수직 방향으로 하단 정렬 */
}

.info .player-name h1 {
  color: #000000;
  font-family: var(--noto-sans-kr-font-style-bold);
  font-size: 4.5rem;
  font-style: normal;
  font-weight: var(--noto-sans-kr-font-style-bold);
  white-space: nowrap;
}

.info .recent-update {
  color: #555555;
  font-family: var(--noto-sans-kr-font-family);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  white-space: nowrap;
}

</style>