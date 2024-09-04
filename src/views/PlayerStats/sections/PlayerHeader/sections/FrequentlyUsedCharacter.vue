<template>
  <div class="frequently-used-character">
    <div class="player-info-subtitle">자주 사용하는 실험체</div>
    <ol class="character-list">
      <CharacterCard
          v-for="(item, index) in characterStats"
          :character-name="item.characterName"
          :character-image-url="item.characterImageUrl"
          :key="index"
          :isClicked="selectedCharacterIndex === index"
          @click="updateSelectedCharacterIndex(index)"
      />
    </ol>
    <CharacterRouteInfo :best-weapon="characterStats[selectedCharacterIndex].bestWeapon" :tactical-skill-group="characterStats[selectedCharacterIndex].tacticalSkillGroup"
                        :trait-first-core="characterStats[selectedCharacterIndex].traitFirstCore" :trait-first-sub="characterStats[selectedCharacterIndex].traitFirstSub"
                        :trait-second-sub="characterStats[selectedCharacterIndex].traitSecondSub"/>
  </div>
</template>

<script>
import CharacterCard
  from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterCard.vue";
import CharacterRouteInfo
  from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterRouteInfo.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "FrequentlyUsedCharacter",
  components: {CharacterRouteInfo, CharacterCard},

  computed:{
    ...mapState(["characterStats"]),
    ...mapGetters(["selectedCharacterIndex"]),
  },
  methods: {
    ...mapActions(["updateSelectedCharacterIndex"]),
  }
};
</script>

<style>
.frequently-used-character {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

.frequently-used-character .character-list {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%;
  justify-content: space-evenly;
  gap: 3%;
  align-items: center;
}
</style>