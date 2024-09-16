<template>
  <div class="frequently-used-character">
    <div class="player-info-subtitle">자주 사용하는 실험체</div>
    <ol class="character-list">
      <CharacterCard
          v-for="(item, index) in playerStatsData.characterStats"
          :character-code="item.characterCode"
          :key="index"
          :isClicked="selectedCharacterIndex === index"
          @click="updateSelectedCharacterIndex(index)"
      />
    </ol>
    <CharacterRouteInfo :weapon="selectedCharacterStats.mostWeapon"
                        :tactical-skill-group="selectedCharacterStats.mostTacticalSkillGroup"
                        :trait-first-core="selectedCharacterStats.mostTraitFirstCore"
                        :trait-first-sub="selectedCharacterStats.mostTraitFirstSub"
                        :trait-second-sub="selectedCharacterStats.mostTraitSecondSub"/>
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

  computed: {
    ...mapState(["playerStatsData"]),
    ...mapGetters(["selectedCharacterIndex", "selectedCharacterStats"]),
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