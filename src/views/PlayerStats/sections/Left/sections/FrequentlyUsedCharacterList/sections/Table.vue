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
          v-for="stat in this.playerStatsData.characterStats"
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
import {mapState} from "vuex";

export default {
  name: "Table",
  components: {TableTr},
  data() {
    return {
      frequentlyUsedCharacterStats: [
        {
          name: "데비&마를렌",
          earnedRP: 5000,

          characterCode: 1,
          averageTeamKills: 1.2,
          averageKills: 3.4,
          averageAssistants: 5,

          top1: 6.07,
          top2: 8.09,
          top3: 10.01,

          totalGames: 23,
          averageDamage: 45678,
          averageRank: 1.23,
        },
      ]
    }
  },
  computed:{
    ...mapState(["playerStatsData"]),
  },
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
