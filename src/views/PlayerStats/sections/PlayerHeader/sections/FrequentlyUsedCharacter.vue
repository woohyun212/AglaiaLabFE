<template>
  <div class="frequently-used-character">
    <div class="player-info-subtitle">자주 사용하는 실험체</div>
    <ol class="character-list">
      <CharacterCard
          v-for="(item, index) in items"
          :character-name="item.characterName"
          :character-image-url="item.characterImageUrl"
          :key="index"
          :isClicked="selectedItem === index"
          @click="selectItem(index)"
      />
    </ol>
    <CharacterRouteInfo/>
  </div>
</template>

<script>
import CharacterCard from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterCard.vue";
import CharacterRouteInfo from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterRouteInfo.vue";
export default {
  name: "FrequentlyUsedCharacter",
  components: {CharacterRouteInfo, CharacterCard},
  data() {
    return {
      selectedItem: null,  // 선택된 아이템의 인덱스를 저장할 변수
      items: [ // items 배열
        {
          "characterName": "Jackie",
          "characterImageUrl": "src/assets/ER/Character/001. Jackie/02. Default - 기본/Mini.png"
        },
        {"characterName": "Aya", "characterImageUrl": "src/assets/ER/Character/002. Aya/02. Default - 기본/Mini.png"},
        {
          "characterName": "Hyunwoo",
          "characterImageUrl": "src/assets/ER/Character/0037. Hyunwoo/02. Default - 기본/Mini.png"
        },
        {
          "characterName": "Magnus",
          "characterImageUrl": "src/assets/ER/Character/004. Magnus/02. Default - 기본/Mini_Magnus_00.png"
        },
        {"characterName": "Fiora", "characterImageUrl": "src/assets/ER/Character/005. Fiora/02. Default - 기본/Mini.png"}
      ]
    };
  },
  methods: {
    selectItem(index) {
      this.selectedItem = index;  // 클릭된 아이템의 인덱스를 업데이트
    }
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