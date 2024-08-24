<template>
  <div class="frequently-used-character-list">
    <h2 class="sub-title">자주 사용한 실험체</h2>
    <Table />
  </div>
</template>

<script>
import Table from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/Table.vue";

export default {
  name: "FrequentlyUsedCharacterList",
  components: {
    Table,
  },
};
</script>


<style>
.frequently-used-character-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

</style>