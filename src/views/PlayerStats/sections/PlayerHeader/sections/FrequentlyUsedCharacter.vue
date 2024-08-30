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
        {"characterName": "Jackie",
          "characterImageUrl": `${this.$ERCDN}/Character/001/1001000/mini.png`,
        },
        {"characterName": "Aya",
          "characterImageUrl": `${this.$ERCDN}/Character/002/1002000/mini.png`},
        {"characterName": "Hyunwoo",
          "characterImageUrl": `${this.$ERCDN}/Character/003/1003000/mini.png`
        },
        {"characterName": "Magnus",
          "characterImageUrl": `${this.$ERCDN}/Character/004/1004000/mini.png`
        },
        {"characterName": "Fiora",
          "characterImageUrl":`${this.$ERCDN}/Character/005/1005000/mini.png`
        }
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