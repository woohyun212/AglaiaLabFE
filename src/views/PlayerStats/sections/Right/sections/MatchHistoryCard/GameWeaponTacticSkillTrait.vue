<script>

import {TRAIT_TABLE} from '@/data/data.js'

export default {
  name: "GameWeaaponTacticSkillTrait",
  props: ["bestWeapon", "tacticalSkillGroup", "traitFirstCore", "traitFirstSub", "traitSecondSub"],
  data() {
    return {}
  },
  computed: {
    getTraitSubGroupCode() {
      return TRAIT_TABLE[this.traitSecondSub[0]];
    },
  },
}
</script>

<template>
  <div class="game-weapon-tactic-skill-trait">
    <div class="group-wrapper">
      <div class="img-wrapper">
        <img
            alt="Weapon"
            :src="`${$ERCDN}/WeaponGroup/${ bestWeapon.toString().padStart(2, '0') }.png`"
        />
      </div>
      <div class="img-wrapper">
        <img
            alt="Tactic Skill"
            :src="`${$ERCDN}/TacticSkill/${ tacticalSkillGroup }.png`"
        />
      </div>
    </div>
    <div class="group-wrapper">
      <div class="img-wrapper">
        <img alt="Core Trait"
             :src="`${$ERCDN}/Trait/${ traitFirstCore }.png`"
        />
      </div>
      <div class="img-wrapper">
        <img alt="Auxiliary Trait"
             :src="`${$ERCDN}/Trait/${ getTraitSubGroupCode }.png`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-weapon-tactic-skill-trait {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  margin-left: 1%;
  width: 9%;
}

.group-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 2%
}

.img-wrapper {
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
</style>