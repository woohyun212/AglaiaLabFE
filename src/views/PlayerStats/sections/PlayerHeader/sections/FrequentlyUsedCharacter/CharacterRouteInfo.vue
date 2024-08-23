<template>
  <div class="character-route-info">
    <div class="character-route-info-header">
      <h1>루트 정보</h1>
      <p class="route-info-title">루트 번호 6974747</p>
    </div>
    <div class="trait">
      <div class="trait-box">
        <div class="trait-line">
          <img class="trait-img selected" alt="trait-first-core"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Accelerator.png"/>
          <img class="trait-img unselected" alt="trait-first-core"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Adrenaline_아드레날린.png"/>
          <img class="trait-img unselected" alt="trait-first-core"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Vampiric Bloodline_흡혈마.png"/>
          <img class="trait-img unselected" alt="trait-first-core"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Frailty Infliction_취약.png"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Havoc_파괴/Endorphin.png"/>
          <img class="trait-img selected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Anima Reaper_영혼흡수장치.png"/>
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Havoc_파괴/Carnivore.png"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Havoc_파괴/Frenzy.png"/>
          <img class="trait-img unselected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Dismantle Goliath_열세극복.png"/>
          <img class="trait-img selected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Havoc_파괴/Contempt for the Weak.png"/>
        </div>
      </div>

      <div class="trait-box">
        <div class="weapon-tactic-skill trait-line">
          <img class="weapon" alt="weapon"
               src="../../../../../../assets/ER/Item/01. Weapons/00. Weapon Group/13. Axe.png"/>
          <img class="tactic-skill" alt="tactic-skill"
               src="../../../../../../assets/ER/Loadout/Tactical Skills/01. Blink.png"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Support_지원/Thrill of the Hunt.png">
          <img class="trait-img selected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Support_지원/Thorn Shackles_가시덤불.png" height="64" width="64"/>
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Support_지원/Coin Toss.png"
               height="64" width="64"/>
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Support_지원/Camping Guide.png"
               height="64" width="64"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub" src="../../../../../../assets/ER/Loadout/Support_지원/Logistics_후방보급.png"
               height="64" width="64"/>
          <img class="trait-img unselected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Support_지원/Urban Warfare_시가전.png" height="64" width="64"/>
          <img class="trait-img selected" alt="trait-sub"
               src="../../../../../../assets/ER/Loadout/Support_지원/Penny Pincher_할인 쿠폰.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterRouteInfo",
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
  margin-top: 0.5rem;
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
  height: 100%;
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
  gap: 5%;

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

.unselected {
  filter: brightness(5) contrast(0.8) saturate(0);
}

.selected {
  filter: brightness(1.2) contrast(1.2) saturate(1.2);
}
</style>