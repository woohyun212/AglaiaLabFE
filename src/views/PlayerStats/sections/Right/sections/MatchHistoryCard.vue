<template>
  <div>
    <div :style="cardBackgroundColor" class="match-history-card">
      <div class="background-cover">
        <GameInfo :game-rank="gameRank" :matching-mode="matchingMode" :play-time="playTime" :start-dtm="startDtm"
                  :escape-state="escapeState"/>
        <GameCharacterInfo :character-level="characterLevel" :character-num="characterNum" :skin-code="skinCode"/>
        <GameWeaponTacticSkillTrait :best-weapon="mostWeapon" :tactical-skill-group="tacticalSkillGroup"
                                    :trait-first-core="traitFirstCore" :trait-first-sub="traitFirstSub"
                                    :trait-second-sub="traitSecondSub"/>
        <GameInfoDetail :team-kill="teamKill" :player-kill="playerKill" :player-assistant="playerAssistant"
                        :damage-to-player="damageToPlayer" :mmr-before="mmrBefore" :mmr-gain="mmrGain"
                        :route-id-of-start="routeIdOfStart"/>
        <GameItems :equipment="equipment"/>
      </div>
      <button @click="toggleDetails">
        <svg
            :style="{
            transform: isDetailsVisible ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out'
          }"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M14.7517 5.43781L8.53689 11.7582C8.37419 11.8964 8.17896 12 7.98373 12C7.7885 12 7.59327 11.8964 7.46312 11.7582L1.24827 5.43781C0.922882 5.12697 0.922882 4.57436 1.21573 4.26352C1.50857 3.91814 1.99665 3.91814 2.32204 4.22898L8.01627 10.0313L13.678 4.22898C13.9708 3.91814 14.4914 3.91814 14.7843 4.26352C15.0771 4.57436 15.0771 5.12697 14.7517 5.43781Z"
          />
        </svg>
      </button>
    </div>
    <div :style="detailButtonAnimation" class="more-info">
      <p>
        기능이 개발 중 입니다..!<br/><br/>
        추가 정보가 여기에 표시됩니다.
      </p>
      <!--TODO: Detail 기능 만들기 -->
    </div>
  </div>
</template>

<script>
import GameItems from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameItems.vue";
import GameInfo from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameInfo.vue";
import GameCharacterInfo from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameCharacterInfo.vue";
import GameWeaponTacticSkillTrait
  from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameWeaponTacticSkillTrait.vue";
import GameInfoDetail from "@/views/PlayerStats/sections/Right/sections/MatchHistoryCard/GameInfoDetail.vue";

export default {
  name: "MatchHistoryCard",
  components: {GameInfoDetail, GameWeaponTacticSkillTrait, GameCharacterInfo, GameInfo, GameItems},
  data() {
    return {
      isDetailsVisible: false,

      // GameItems
      equipment: {
        "0": 110412,
        "1": 202512,
        "2": 701451,
        "3": 203503,
        "4": 204413
      },
      // gameInfoDetail
      teamKill: 24,
      playerKill: 23,
      playerAssistant: 22,
      damageToPlayer: 30000,
      mmrBefore: 10000,
      mmrGain: 256,
      routeIdOfStart: 54321,

      // gameWeaponTacticSkillTrait

      mostWeapon: 3,  // 무기
      tacticalSkillGroup: 120, // 전술 스킬
      traitFirstCore: 7200501, // 주특
      traitFirstSub: [
        7010901,
        7110901
      ],
      traitSecondSub: [ // 보조 특성
        7110801,
        7110601
      ],
      // gameCharacterInfo
      characterNum: 27,
      characterLevel: 15,
      skinCode: 1027001,

      // GameInfo
      gameRank: 1, // 게임 등수
      escapeState: 0, // 탈출 여부
      matchingMode: 3, // 2:일반 , 3:랭크
      preMadeMatchingType: 3, // 사전 구성 타입
      playTime: 957000, // 유저의 플레이 시간. (초)
      startDtm: 1725173200000, // 서버의 게임 시작 시간.
    };
  },
  computed: {
    detailButtonAnimation() {
      return {
        maxHeight: this.isDetailsVisible ? '500px' : '0px',
        transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out' // 버튼과 동일한 시간과 타이밍 함수로 설정
      };
    },

    cardBackgroundColor() {
      if (this.escapeState === 3) {
        return {background: "var(--escape-bg-color)"}
      } else if (this.gameRank === 1) {
        return {background: "var(--1st-bg-gradient)"}
      } else if (this.gameRank === 2) {
        return {background: "var(--2nd-bg-gradient)"}
      } else if (this.gameRank === 3) {
        return {background: "var(--3rd-bg-gradient)"}
      } else {
        return {background: "var(--base-bg-color)"}
      }
    },
    isEscape(){
      return this.escapeState === 3;
    }
  },
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    }
  }
};
</script>

<style scoped>
.match-history-card {
  border-radius: 4px;
  box-shadow: 0px 0px 4px #00000040;
  height: 90px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.match-history-card .background-cover {
  background-color: #ffffff;
  height: 100%;
  margin-left: 1%;
  position: relative;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

button {
  width: 4%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: none;
}

path {
  fill: white;
}

.more-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 200px;
}
</style>