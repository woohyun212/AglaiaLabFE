<template>
  <div class="player-header">
<!--    <img class="character-image" alt="Character image" src="https://c.animaapp.com/SjFnLgAk/img/&#45;&#45;&#45;&#45;.png"/>-->
    <img class="character-image"
      src="../../../assets/ER/Character/065/1065002/full.webp" height="2048"
      width="2048"/>
    <div class="player-header-cover"/>
    <div class="info">
      <div class="player-name"><h1>김현우</h1>
        <ButtonWrapper/>
      </div>
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

export default {
  name: "Info",
  components: {
    ButtonWrapper,
    StatsInfo,
    FrequentlyUsedCharacter,
  },
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

.character-image {
  position: absolute;
  top: -15vh;
  right: -25vw;
  width: 75vw;
  height: auto;
  object-fit: contain;
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
  gap: 2%
}

.info .player-name h1 {
  color: #000000;
  font-family: var(--noto-sans-kr-font-style-bold);
  font-size: 5vw;
  font-style: normal;
  font-weight: var(--noto-sans-kr-font-style-bold);
  white-space: nowrap;
}

.info .recent-update {
  color: #898989;
  font-family: var(--noto-sans-kr-font-family);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0;
  white-space: nowrap;
}

</style>