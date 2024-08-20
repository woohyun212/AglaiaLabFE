<template>
  <div class="content">
    <img
        class="rank-image"
        alt="Rank image group"
        src="https://c.animaapp.com/SjFnLgAk/img/rank-image-group.png"
    />
    <div class="blur-layer" />
    <div class="player-header"/>
    <img class="character-image" alt="Character image" src="https://c.animaapp.com/SjFnLgAk/img/----.png"/>
    <div class="player-header-cover"/>
    <!--        <ButtonWrapper />-->
            <Info />
    <!--        <Left />-->
    <!--        <Right />-->
  </div>
</template>

<script>
import ButtonWrapper from "@/views/PlayerStats/sections/ButtonWrapper.vue";
import Info from "@/views/PlayerStats/sections/Info.vue";
import Left from "@/views/PlayerStats/sections/Left.vue";
import Right from "@/views/PlayerStats/sections/Right.vue";

export default {
  name: "MacbookProWhite",
  components: {
    ButtonWrapper,
    Info,
    Left,
    Right,
  },
};
</script>


<style>
.content {
  background-color: #6c6c6c;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
}


.content .rank-image {
  top:0;
  left:0;
  width: 57.5vw;
  height: auto;
  object-fit: cover;
  filter: brightness(90%) /*blur(1px)*/;
  position: absolute;
}

.content .character-image {
  top:0;
  right:0;
  width: 75vw;
  height: auto;
  object-fit: cover;
  position: absolute;
}

.content .blur-layer {
  position: absolute;
  background-color: #d9d9d94c;
  height: 100%;
  width: 100%;
}

.content .player-header {
  width: 67.5vw;
  height: 60vh;
  position: absolute;
  margin-top:15vh;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgb(255, 255, 255) 61.5%,
      rgba(255, 255, 255, 0) 100%
  );
  border-radius: 15px;
  box-shadow: 0px 0px 4px 1px #00000040;
}

.content .player-header-cover {
  width: 38vw;
  height: 60vh;
  margin-top:15vh;
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 37.5%,
      rgb(255, 255, 255) 65.5%,
      rgba(255, 255, 255, 0) 100%
  );
}
</style>