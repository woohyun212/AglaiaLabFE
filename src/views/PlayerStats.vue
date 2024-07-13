<template>
  <div class="player-stats">
    <h1>{{ stats.nickname }}님의 전적 분석</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <div class="stats-container">
        <div class="basic-stats card">
          <h2>기본 통계</h2>
          <p><strong>유저 고유 번호:</strong> {{ stats.userNum }}</p>
          <p><strong>시즌 ID:</strong> {{ stats.seasonId }}</p>
          <p><strong>MMR:</strong> {{ stats.mmr }}</p>
          <p><strong>순위:</strong> {{ stats.rank }} / {{ stats.rankSize }} (상위 {{ stats.rankPercent }}%)</p>
          <p><strong>총 게임 수:</strong> {{ stats.totalGames }}</p>
          <p><strong>총 승리 수:</strong> {{ stats.totalWins }}</p>
          <p><strong>팀의 총 킬 수:</strong> {{ stats.totalTeamKills }}</p>
          <p><strong>평균 순위:</strong> {{ stats.averageRank }}</p>
          <p><strong>평균 킬 수:</strong> {{ stats.averageKills }}</p>
          <p><strong>평균 어시스트 수:</strong> {{ stats.averageAssistants }}</p>
          <p><strong>평균 사냥 수:</strong> {{ stats.averageHunts }}</p>
        </div>

        <div class="top-rank-stats card">
          <h2>상위 랭크 달성 비율</h2>
          <p><strong>Top 1 달성:</strong> {{ stats.top1 * 100 }}%</p>
          <p><strong>Top 2 달성:</strong> {{ stats.top2 * 100 }}%</p>
          <p><strong>Top 3 달성:</strong> {{ stats.top3 * 100 }}%</p>
          <p><strong>Top 5 달성:</strong> {{ stats.top5 * 100 }}%</p>
          <p><strong>Top 7 달성:</strong> {{ stats.top7 * 100 }}%</p>
        </div>

        <div class="character-stats card">
          <h2>캐릭터 통계</h2>
          <table>
            <thead>
              <tr>
                <th>캐릭터 코드</th>
                <th>캐릭터 이름</th>
                <th>사용 수</th>
                <th>최대 킬 수</th>
                <th>Top 3 수</th>
                <th>승리 수</th>
                <th>Top 3 비율</th>
                <th>평균 순위</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="charStat in stats.characterStats" :key="charStat.characterCode">
                <td>{{ charStat.characterCode }}</td>
                <td>{{ l10n_korean["Character/Name/"+charStat.characterCode] }}</td>
                <td>{{ charStat.usages }}</td>
                <td>{{ charStat.maxKillings }}</td>
                <td>{{ charStat.top3 }}</td>
                <td>{{ charStat.wins }}</td>
                <td>{{ charStat.top3Rate }}%</td>
                <td>{{ charStat.averageRank }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import test_d from "@/assets/test.json"
import l10n_korean from "@/assets/l10n-Korean-20240705012554.json"

export default {
  name: 'PlayerStats',
  data() {
    return {
      stats: {},
      loading: true,
      l10n_korean: l10n_korean
    }
  },
  created() {
    this.fetchPlayerStats()
  },
  methods: {
    async fetchPlayerStats() {
      try {
        // const playerId = this.$route.params.player_id
        // const response = await fetch(`/api/player-stats/${playerId}`)
        // const data = await response.json()
        // this.stats = data
        this.stats = test_d
      } catch (error) {
        console.error('Error fetching player stats:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.player-stats {
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.loading {
  font-size: 1.5em;
  color: #42b983;
}

.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

.card h2 {
  margin-top: 0;
  color: #333;
}

.card p {
  margin: 10px 0;
  color: #555;
}

.card strong {
  color: #333;
}

.character-stats table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.character-stats th, .character-stats td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.character-stats th {
  background-color: #f4f4f4;
  color: #333;
}

.character-stats td {
  background-color: #fff;
  color: #555;
}
</style>