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
    <CharacterRouteInfo :best-weapon="items[selectedItem].bestWeapon" :tactical-skill-group="items[selectedItem].tacticalSkillGroup"
                        :trait-first-core="items[selectedItem].traitFirstCore" :trait-first-sub="items[selectedItem].traitFirstSub"
                        :trait-second-sub="items[selectedItem].traitSecondSub"/>
  </div>
</template>

<script>
import CharacterCard
  from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterCard.vue";
import CharacterRouteInfo
  from "@/views/PlayerStats/sections/PlayerHeader/sections/FrequentlyUsedCharacter/CharacterRouteInfo.vue";

export default {
  name: "FrequentlyUsedCharacter",
  components: {CharacterRouteInfo, CharacterCard},
  data() {
    return {
      selectedItem: 0,  // 선택된 아이템의 인덱스를 저장할 변수
      items: [ // items 배열
        {
          characterName: "Jackie",
          characterImageUrl: `${this.$ERCDN}/Character/001/1001000/mini.png`,
          bestWeapon: 13,  // 무기
          tacticalSkillGroup: 120, // 전술 스킬
          traitFirstCore: 7000401, // 주특
          traitFirstSub: [
            7010311,
            7011001
          ],
          traitSecondSub: [ // 보조 특성
            7110101,
            7110401
          ],
        },
        {
          characterName: "Aya",
          characterImageUrl: `${this.$ERCDN}/Character/002/1002000/mini.png`,
          bestWeapon: 13,  // 무기
          tacticalSkillGroup: 120, // 전술 스킬
          traitFirstCore: 7000501, // 주특
          traitFirstSub: [
            7310201,
            7310101
          ],
          traitSecondSub: [ // 보조 특성
            7211101,
            7210801
          ],
        },
        {
          characterName: "Hyunwoo",
          characterImageUrl: `${this.$ERCDN}/Character/003/1003000/mini.png`,
          bestWeapon: 13,  // 무기
          tacticalSkillGroup: 120, // 전술 스킬
          traitFirstCore: 7100501, // 주특
          traitFirstSub: [
            7111001,
            7110601
          ],
          traitSecondSub: [ // 보조 특성
            7010601,
            7011001
          ],
        },
        {
          characterName: "Magnus",
          characterImageUrl: `${this.$ERCDN}/Character/004/1004000/mini.png`,
          bestWeapon: 13,  // 무기
          tacticalSkillGroup: 120, // 전술 스킬
          traitFirstCore: 7200101, // 주특
          traitFirstSub: [
            7210101,
            7210801
          ],
          traitSecondSub: [ // 보조 특성
            7110101,
            7110401
          ],
        },
        {
          characterName: "Fiora",
          characterImageUrl: `${this.$ERCDN}/Character/005/1005000/mini.png`,
          bestWeapon: 13,  // 무기
          tacticalSkillGroup: 120, // 전술 스킬
          traitFirstCore: 7100101, // 주특
          traitFirstSub: [
            7110101,
            7110401
          ],
          traitSecondSub: [ // 보조 특성
            7010701,
            7310301
          ],
        }
      ],

    };
  },
  methods: {
    selectItem(index) {
      this.selectedItem = index;  // 클릭된 아이템의 인덱스를 업데이트
    },
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