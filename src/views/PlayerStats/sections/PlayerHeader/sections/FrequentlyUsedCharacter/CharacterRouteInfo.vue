<template>
  <div class="character-route-info">
    <div class="character-route-info-header">
      <h1>루트 정보</h1>
      <p class="route-info-title">루트 번호 123124</p>
    </div>
<!-- TODO: 1. 특성 그룹별로 나눠서 JSON 만들기
           2. 데이터에서 선택한 가져와서 선택한 특성 그룹 2개 가져옴
           3. un / selected 반영-->
    <div class="trait">
      <div class="trait-box">
        <div class="trait-line">
          <img class="trait-img selected" alt="trait-first-core"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img unselected" alt="trait-first-core"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img unselected" alt="trait-first-core"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img unselected" alt="trait-first-core"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img selected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub" :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
          <img class="trait-img selected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7000201.png`"/>
        </div>
      </div>

      <div class="trait-box">
        <div class="weapon-tactic-skill trait-line">
          <img class="weapon" alt="weapon"
               :src="`${$ERCDN}/WeaponGroup/Pistol.png`"/>
          <img class="tactic-skill" alt="tactic-skill"
               :src="`${$ERCDN}/TacticSkill/4000000.png`"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
          <img class="trait-img selected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
        </div>
        <div class="trait-line">
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
          <img class="trait-img unselected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
          <img class="trait-img selected" alt="trait-sub"
               :src="`${$ERCDN}/Trait/7310401.png`"/>
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