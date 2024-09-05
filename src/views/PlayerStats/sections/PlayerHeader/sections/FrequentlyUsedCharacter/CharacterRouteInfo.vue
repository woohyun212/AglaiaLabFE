<template>
  <div class="character-route-info">
    <div class="character-route-info-header">
      <h1>고승률 빌드</h1>
      <!--      Deprecated. 루트ID 가 비공개일 수 있는데 이는 어떻게 할지-->
      <!--      <p class="route-info-title">루트 번호 123124</p>-->
    </div>
    <div class="trait">
      <div class="trait-box">
        <div v-for="(items, category) in getTraitFirstGroup" :key="category" class="trait-line">
          <img v-for="traitId in items" :key="traitId" :style="getTraitStyle(traitId)" class="trait-img" :alt="traitId"
               :src="`${$ERCDN}/Trait/${traitId}.png`"/>
        </div>
      </div>
      <div class="trait-box">
        <div class="weapon-tactic-skill trait-line">
          <img class="weapon" alt="weapon"
               :src="`${$ERCDN}/WeaponGroup/${ bestWeapon.toString().padStart(2, '0') }.png`"/>
          <img class="tactic-skill" alt="tactic-skill"
               :src="`${$ERCDN}/TacticSkill/${ tacticalSkillGroup }.png`"/>
        </div>
        <div v-for="(items, category) in getTraitSecondGroup" :key="category" class="trait-line">
          <img v-if="category !== 'core' " v-for="traitId in items" :key="traitId" :style="getTraitStyle(traitId)"
               class="trait-img" :alt="traitId"
               :src="`${$ERCDN}/Trait/${traitId}.png`"/>
        </div>
      </div>
    </div>
<!--    <div style="width:100%;height:100%;display: flex;justify-content: center; align-items: center"> [ ]  [ ]  [ ]  [ ]  [ ]</div>-->
  </div>
</template>

<script>
import {TRAIT_GROUP, TRAIT_TABLE} from '@/data'

export default {
  name: "CharacterRouteInfo",
  props: ["bestWeapon", "tacticalSkillGroup", "traitFirstCore", "traitFirstSub", "traitSecondSub"],
  data() {
    return {}
  },
  computed: {
    getTraitFirstGroup() {
      return TRAIT_GROUP[TRAIT_TABLE[this.traitFirstCore]];
    },
    getTraitSecondGroup() {
      const {core, ...rest} = TRAIT_GROUP[TRAIT_TABLE[this.traitSecondSub[0]]];
      return rest
    }
  },
  methods: {
    getTraitStyle(traitId) {
      // 조건에 따라 다른 스타일 반환
      if (traitId === this.traitFirstCore || this.traitFirstSub.includes(traitId) || this.traitSecondSub.includes(traitId)) {
        return {filter: "brightness(1.2) contrast(1.2) saturate(1.2)"};
      } else {
        return {filter: "brightness(5) contrast(0.8) saturate(0)"};
      }
    }
  },
}
</script>


<style scoped>
.character-route-info {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.character-route-info-header {
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1.2rem;
  align-items: flex-end
}

.character-route-info-header h1 {
  font-size: 1.5rem;
  font-style: var(--noto-sans-kr-font-style-light);
  font-weight: var(--noto-sans-kr-font-weight-bold);
  letter-spacing: -0.5px;
  line-height: 1.5rem;
}

.character-route-info-header p {
  font-size: 1rem;
  font-style: var(--noto-sans-kr-font-style-light);
  font-weight: var(--noto-sans-kr-font-weight-medium);
  letter-spacing: -0.5px;
  line-height: 1rem;
}


.trait {
  display: flex;
  flex-direction: row;
}

.weapon-tactic-skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10%;
}

.weapon {
  background-color: #6f6f6f;
  border-radius: 100%;
  object-fit: cover;
}

.tactic-skill {
  border-radius: 100%;
  object-fit: cover;
}

.trait .trait-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

}

.trait-line {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  gap: 5%;
}

.trait-line img {
  width: 20%;
  object-fit: contain;
}
</style>