<template>
  <li class="character-card"
      v-bind:style="backgroundStyle"
      :class="{ clicked: isClicked }"
  />
<!--      @click="$emit('click')"-->
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "CharacterCard",
  props: {
    isClicked: {
      type: Boolean,
      default: false
    },
    characterCode:{
      type: Number,
      required: true
    } ,
  },
  computed: {
    ...mapState(["playerStats"]),
    backgroundStyle() {
      const characterCode = this.characterCode.toString().padStart(3, '0');
      return {
        backgroundImage: `url(${this.$ERCDN}/Character/${characterCode}/1${characterCode}000/mini.png`
      };
    },
  }
}
</script>

<style scoped>
.character-card {
  background-color: #d9d9d9;
  background-position: center;
  background-size: cover;
  background-clip: padding-box;
  height: 90%;
  width: 16.5%;
  border: rgba(0, 0, 0, 0) 2px solid;
  transition: width 0.3s ease, height 0.3s ease, border 0.3s ease;
}

.character-card:hover {
  height: 100%;
  width: 18.15%;
  border: #ff6c88 2px solid;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
}

.clicked {
  height: 100%;
  width: 18.15%;
  border-color: red!important; /* 클릭된 상태에서 적용할 스타일 */
  /* 추가 스타일이 필요하면 여기에 작성하세요 */
}

</style>