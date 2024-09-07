<template>
  <div class="most-10-character-list">
    <h2 class="sub-title">모스트 10 실험체</h2>
    <Table />
  </div>
</template>

<script>
import Table from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Table.vue";

export default {
  name: "Most10CharacterList",
  components: {
    Table,
  },
};
</script>


<style>
.most-10-character-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

</style>