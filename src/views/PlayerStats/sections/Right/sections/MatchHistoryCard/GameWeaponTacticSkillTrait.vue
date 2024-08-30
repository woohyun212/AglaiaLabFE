<script>
export default {
  name: "GameWeaaponTacticSkillTrait",
}

</script>

<template>
  <div class="game-weapon-tactic-skill-trait">
    <div class="group-wrapper">
      <div class="img-wrapper">
        <img
            alt="Weapon"
            src="https://c.animaapp.com/SjFnLgAk/img/15--twohanded-sword-5@2x.png"
        />
      </div>
      <div class="img-wrapper">
        <img
            alt="Tactic Skill"
            src="https://c.animaapp.com/SjFnLgAk/img/01--blink-5@2x.png"
        />
      </div>
    </div>
    <div class="group-wrapper">
      <div class="img-wrapper">
        <img alt="Core Trait"
             src="https://c.animaapp.com/SjFnLgAk/img/sentinel--------4@2x.png"/>
      </div>
      <div class="img-wrapper">
        <img alt="Auxiliary Trait"
             src="https://c.animaapp.com/SjFnLgAk/img/image-7-4@2x.png"/>
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
  margin-left: 2%;
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