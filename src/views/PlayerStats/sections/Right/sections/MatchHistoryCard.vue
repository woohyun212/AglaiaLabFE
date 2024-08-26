<template>
  <div class="match-history-card">
    <!--    37 + 40 = 77 -->
    <div class="background-cover">
      <!-- 2 + 10 = 12% -->
      <div class="game-info">
        <div class="game-ranking">#1</div>
        <div class="game-type">랭크</div>
        <div style="height: 20%"/>
        <div class="game-time-info">15:57</div>
        <div class="game-time-info">23시간 전</div>
      </div>
      <!-- 9 + 7 = 16% -->
      <div class="game-character-info">
        <div class="game-character">
          <div class="game-character-level">20</div>
        </div>
        <div class="game-character-name">데비&amp;마를렌</div>
      </div>
      <!-- 2 + 9 = 11% -->
      <div class="game-weapon-tactic-skill-trait">
        <div class="group-wrapper">
          <div class="img-wrapper">
            <img
                class="element-twohanded-sword-2"
                alt="Element twohanded sword"
                src="https://c.animaapp.com/SjFnLgAk/img/15--twohanded-sword-5@2x.png"
            />
          </div>
          <div class="img-wrapper">
            <img
                class="element-blink-2"
                alt="Element blink"
                src="https://c.animaapp.com/SjFnLgAk/img/01--blink-5@2x.png"
            />
          </div>
        </div>
        <div class="group-wrapper">
          <div class="img-wrapper">
            <img class="" alt="Sentinel"
                 src="https://c.animaapp.com/SjFnLgAk/img/sentinel--------4@2x.png"/>
          </div>
          <div class="img-wrapper">
            <img class="" alt="Image"
                 src="https://c.animaapp.com/SjFnLgAk/img/image-7-4@2x.png"/>
          </div>
        </div>
      </div>
      <!-- 40 + 2 = 42% -->
      <div class="game-info-detail">
        <div class="detail-box">
          <p class="data-name">TK / K / A</p>
          <p class="played-data">11 / 1 / 13</p>
        </div>
        <div class="detail-box">
          <p class="data-name">딜량</p>
          <p class="played-data">18,757</p>
        </div>
        <div class="detail-box">
          <p class="data-name">RP</p>
          <p class="played-data">10301<span class="earned-rp">+241</span></p>
        </div>
        <div class="detail-box">
          <p class="data-name">루트 ID</p>
          <p class="played-data">비공개</p>
        </div>
      </div>
      <!-- least -->
      <GameItems/>
    </div>
  </div>
</template>

<script>
import GameItems from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameItems.vue";

export default {
  name: "MatchHistoryCard",
  components: {GameItems},
};
</script>

<style scoped>
.match-history-card {
  background: linear-gradient(180deg, rgb(255, 252, 163) 0%, rgb(196, 159, 70) 100%);
  border-radius: 4px;
  box-shadow: 0px 0px 4px #00000040;
  height: 91px;
  position: relative;
  width: 100%;
}

.match-history-card .background-cover {
  background-color: #ffffff;
  height: 100%;
  margin-left: 1%;
  margin-right: 4%;
  position: relative;
  width: 95%;
  display: flex;
  flex-direction: row;

}

.match-history-card .game-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  height: 100%;
  padding-left: 2%;
  white-space: nowrap;
}

.match-history-card .game-ranking {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(255, 252, 163) 0%, rgb(196, 159, 70) 100%);
  background-clip: text;
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  text-fill-color: transparent;
  text-shadow: 0px 4px 4px #00000040;
  white-space: nowrap;
}

.match-history-card .game-type {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
}

.match-history-card .game-time-info {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.match-history-card .game-character-info {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 9%;
  margin-left: 0%;
  justify-content: center;
  align-items: center;
}


.match-history-card .game-character {
  background-image: url(https://c.animaapp.com/SjFnLgAk/img/--------4@2x.png);
  background-position: center;
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
  background-size: cover;
  width: 80%;
  aspect-ratio: 1;
}

.match-history-card .game-character-name {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  margin-top: 5%
}

.match-history-card .game-character-level {
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

.match-history-card .game-weapon-tactic-skill-trait {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 2%;
  width: 9%;
}

.match-history-card .group-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 2%
}

.match-history-card .img-wrapper {
  background-color: #565656;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  aspect-ratio: 1;
  position: relative;
}

.img-wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.match-history-card .game-info-detail {
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

.match-history-card .played-data {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 15px;
  letter-spacing: 0;
}

.match-history-card .data-name {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 400;;
  letter-spacing: 0;
}

.match-history-card .earned-rp {
  color: #ff0000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
}
</style>
