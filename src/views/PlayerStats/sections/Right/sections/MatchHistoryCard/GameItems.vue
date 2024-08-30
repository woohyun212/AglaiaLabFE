<template>
  <div class="game-items">
    <!--transcendence / legend / hero-->

    <div class="items-line">
      <img alt="Weapon" class="item hero" src="https://c.animaapp.com/SjFnLgAk/img/nephleon-4@2x.png"/>
      <img alt="Chest" class="item legend" src="https://c.animaapp.com/SjFnLgAk/img/the-revenant-4@2x.png"/>
      <img alt="Head" class="item mystic" src="https://c.animaapp.com/SjFnLgAk/img/the-black-death-4@2x.png"/>

    </div>
    <div class="items-line">
      <img alt="Arm" class="item hero" src="https://c.animaapp.com/SjFnLgAk/img/music-box-4@2x.png"/>
      <img alt="Leg" class="item hero" src="https://c.animaapp.com/SjFnLgAk/img/emerald-tablet-4@2x.png"/>
<!--      TODO: Show Trinket Item_old -->
<!--      <img alt="Trinket" class="item hero" src="https://c.animaapp.com/SjFnLgAk/img/emerald-tablet-4@2x.png"/>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "GameItems",

}

</script>

<!-- TODO : Add background linear-gradient -->
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
}

.uncommon {
}

.common {
}

.none {
}

.view-14 {
  background: url(""),
  linear-gradient(180deg, rgb(90, 62, 122) 0%, rgb(165.25, 113.84, 224) 100%),
  50% 50%;
  background-size: cover;
  border-radius: 2px;
  height: 27px;
  width: 49px;
}

.view-15 {
  //background: linear-gradient(180deg, rgb(90, 62, 122) 0%, rgb(165.25, 113.84, 224) 100%);
  //background-image: url();
}

.view-16 {
  height: 27px;
  width: 49px;
  background: linear-gradient(180deg, rgb(90, 62, 122) 0%, rgb(165.25, 113.84, 224) 100%);
}

.view-17 {
  background-image: url();

}

.view-18 {
  background-image: url(https://c.animaapp.com/SjFnLgAk/img/the-revenant-4@2x.png);
}

</style>