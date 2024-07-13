<template>
  <div class="match-history">
    <h1>{{ playerName }}님의 매치 히스토리</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <table>
        <thead>
          <tr>
            <th>게임 ID</th>
            <th>결과</th>
            <th>KDA</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="match in matches" :key="match.id">
            <td>{{ match.id }}</td>
            <td>{{ match.result }}</td>
            <td>{{ match.kda }}</td>
            <td>{{ match.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchHistory',
  data() {
    return {
      playerName: '',
      matches: [],
      loading: true
    }
  },
  created() {
    this.fetchMatchHistory()
  },
  methods: {
    async fetchMatchHistory() {
      try {
        const playerId = this.$route.params.player_id
        const response = await fetch(`/api/match-history/${playerId}`)
        const data = await response.json()

        this.playerName = data.player_id
        this.matches = data.matches
      } catch (error) {
        console.error('Error fetching match history:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.match-history {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 1.5em;
  color: #42b983;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
}

th {
  background-color: #f4f4f4;
}
</style>
<!--

MatchHistory.vue

설명

	1.	템플릿 섹션:
	•	h1 태그로 플레이어 이름과 매치 히스토리 제목을 표시합니다.
	•	v-if="loading"을 사용하여 로딩 중일 때 로딩 메시지를 표시합니다.
	•	v-else를 사용하여 로딩이 완료되면 매치 데이터를 표 형식으로 표시합니다.
	•	각 매치의 게임 ID, 결과, KDA, 날짜를 table 태그를 사용하여 표시합니다.
	2.	스크립트 섹션:
	•	data 함수에서 컴포넌트의 상태를 정의합니다.
	•	created 라이프사이클 훅에서 컴포넌트가 생성될 때 fetchMatchHistory 메소드를 호출합니다.
	•	fetchMatchHistory 메소드에서 API를 호출하여 매치 히스토리 데이터를 가져오고 상태를 업데이트합니다.
	3.	스타일 섹션:
	•	table 태그를 사용하여 표를 스타일링합니다.
	•	표의 각 셀을 정렬하고 간격을 설정합니다.

발전 방향

	•	그래프 시각화: KDA와 같은 통계 데이터를 그래프로 시각화하여 더 쉽게 이해할 수 있게 합니다.
	•	필터 및 정렬: 날짜나 결과 등을 기준으로 매치 데이터를 필터링하고 정렬할 수 있는 기능을 추가합니다.
	•	상세 보기: 각 매치를 클릭하면 해당 매치의 상세 정보를 보여주는 페이지로 이동할 수 있게 합니다.
-->