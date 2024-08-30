<template>
  <div class="game-items">
    <div class="items-line">
      <img alt="Weapon" class="item hero" :src="`${$ERCDN}/Item/${equipment['0']}.png`"/>
      <img alt="Chest" class="item legend" :src="`${$ERCDN}/Item/${equipment['1']}.png`"/>
      <img alt="Head" class="item mystic" :src="`${$ERCDN}/Item/${equipment['2']}.png`"/>
    </div>
    <div class="items-line">
      <img alt="Arm" class="item rare" :src="`${$ERCDN}/Item/${equipment['3']}.png`"/>
      <img alt="Leg" class="item uncommon" :src="`${$ERCDN}/Item/${equipment['4']}.png`"/>
      <img v-if="equipment['5']" alt="Trinket" class="item common" :src="`${$ERCDN}/Item/${equipment['5']}.png`"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameItems",
  props: ["equipment"],
  data() {
    return {}
  },
}

</script>

<style scoped>
.game-items {
  width: 27%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
}

.items-line {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%
}

.item {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 2px;
  height: 27px;
  width: 49px;
}

.mystic {
  background: linear-gradient(180deg, rgb(97, 0, 0) 0%, rgb(255, 0, 0) 100%);
  border: 1px solid #ff5555;
}

.legend {
  background: linear-gradient(180deg, rgb(99, 73, 47) 0%, rgb(199, 140, 30) 100%);
  border: 1px solid #9d8948;
}

.hero {
  background: linear-gradient(180deg, rgba(90, 62, 122) 0%, rgba(165, 113, 224, 100%) 100%);
  border: 1px solid #8a6eba;
}

.rare {
  background: linear-gradient(180deg, rgb(62, 76, 122) 0%, rgb(113, 132, 224) 100%);
  border: 1px solid #6e80ba;
}

.uncommon {
  background: linear-gradient(180deg, rgb(86, 122, 62) 0%, rgb(133, 224, 113) 100%);
  border: 1px solid #76ba6e;
}

.common {
  background: linear-gradient(180deg, rgb(107, 109, 122) 0%, rgb(190, 194, 213) 100%);
  border: 1px solid #a7abb8;
}

.none {
  background: #808080FF;
  border: 1px solid #a7abb8;
}
</style>