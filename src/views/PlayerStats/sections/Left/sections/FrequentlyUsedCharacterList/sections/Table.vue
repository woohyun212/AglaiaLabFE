<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>실험체</th>
        <th>승률</th>
        <th>RP</th>
        <th>TK</th>
        <th>평균 딜량</th>
      </tr>
      </thead>
      <tbody>
      <TableTr
          v-for="stat in frequentlyUsedCharacterStats"
          :stat="stat"
      />
      <!-- 반복 -->
      </tbody>
    </table>
  </div>
</template>

<script>
import TableTr
  from "@/views/PlayerStats/sections/Left/sections/FrequentlyUsedCharacterList/sections/TableTr.vue";

export default {
  name: "Table",
  components: {TableTr},
  data() {
    return {
      frequentlyUsedCharacterStats: [
        {
          name: "데비&마를렌",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }, {
          name: "캐릭터이름",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }, {
          name: "캐릭터이름",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }, {
          name: "캐릭터이름",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }, {
          name: "캐릭터이름",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }, {
          name: "캐릭터이름",
          playedCount: 123,
          winRate: 12.51,
          earnedRP: 5000,
          averageTK: 7.2,
          averageK: 5.2,
          averageDamage: 23051,
        }
      ]
    }
  }
};
</script>


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 10px;
  font-family: "Noto Sans KR", Helvetica;
}

th {
  padding-bottom: 10px;
}
</style>
