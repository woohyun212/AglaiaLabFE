<template>
  <div class="leaderboard">
    <h1>리더보드</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>플레이어</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in leaderboard" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard',
  data() {
    return {
      leaderboard: [],
      loading: true
    }
  },
  created() {
    this.fetchLeaderboard()
  },
  methods: {
    async fetchLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard')
        const data = await response.json()
        this.leaderboard = data.leaderboard
      } catch (error) {
        console.error('Error fetching leaderboard:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.leaderboard {
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
설명

	1.	템플릿 섹션:
	•	h1 태그로 리더보드 제목을 표시합니다.
	•	v-if="loading"을 사용하여 로딩 중일 때 로딩 메시지를 표시합니다.
	•	v-else를 사용하여 로딩이 완료되면 리더보드 데이터를 표 형식으로 표시합니다.
	•	각 플레이어의 순위, 이름, 점수를 table 태그를 사용하여 표시합니다.
	2.	스크립트 섹션:
	•	data 함수에서 컴포넌트의 상태를 정의합니다.
	•	created 라이프사이클 훅에서 컴포넌트가 생성될 때 fetchLeaderboard 메소드를 호출합니다.
	•	fetchLeaderboard 메소드에서 API를 호출하여 리더보드 데이터를 가져오고 상태를 업데이트합니다.
	3.	스타일 섹션:
	•	table 태그를 사용하여 표를 스타일링합니다.
	•	표의 각 셀을 정렬하고 간격을 설정합니다.

발전 방향

	•	검색 및 필터링 기능: 리더보드 데이터를 검색하고 필터링할 수 있는 기능을 추가합니다.
	•	페이징: 많은 양의 데이터를 페이지로 나눠서 표시합니다.
	•	세부 정보: 각 플레이어의 이름을 클릭하면 해당 플레이어의 상세 정보를 보여주는 페이지로 이동할 수 있게 합니다.
	-->