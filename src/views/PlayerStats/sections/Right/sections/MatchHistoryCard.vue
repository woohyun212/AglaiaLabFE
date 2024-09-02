<template>
  <div>
    <div class="match-history-card">
      <div class="background-cover">
        <GameInfo/>
        <GameCharacterInfo/>
        <GameWeaponTacticSkillTrait :game-weaapon-tactic-skill-trait="gameWeaponTacticSkillTrait"/>
        <GameInfoDetail :game-info-detail="gameInfoDetail"/>
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
    <div :style="DetailDivStyle" class="more-info">
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

      equipment: {
        "0": 110412,
        "1": 202512,
        "2": 701451,
        "3": 203503,
        "4": 204413
      },
      gameInfoDetail: {
        teamKill: 0,
        playerKill: 1,
        playerAssistant: 2,
        damageToPlayer: 3,
        mmrBefore: 4,
        mmrGain: 5,
        routeIdOfStart: 6
      },
      gameWeaponTacticSkillTrait: {
        bestWeapon: 3,  // 무기
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
      },
    };
  },
  computed: {
    DetailDivStyle() {
      return {
        maxHeight: this.isDetailsVisible ? '500px' : '0px',
        transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out' // 버튼과 동일한 시간과 타이밍 함수로 설정
      };
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
  --1st-bg-gradient: linear-gradient(180deg, rgb(255, 252, 163) 0%, rgb(196, 159, 70) 100%);
  --2nd-bg-gradient: linear-gradient(180deg, rgb(235, 235, 235) 0%, rgb(133, 133, 133) 100%);
  --3rd-bg-gradient:  linear-gradient(180deg, rgb(196, 152, 87) 0%, rgb(94, 73, 42) 100%);
  --else-bg-color: #d9d9d9;
  --escape-bg-color: #009262;
  background: var(--1st-bg-gradient);
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