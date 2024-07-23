<template>
  <div class="character-builds">
    <h1>캐릭터 빌드 가이드</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <div v-for="build in builds" :key="build.id" class="build">
        <h2>{{ build.character }}</h2>
        <p>{{ build.description }}</p>
        <!-- 추가적인 빌드 정보 표시 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBuilds',
  data() {
    return {
      builds: [],
      loading: true
    }
  },
  created() {
    this.fetchBuilds()
  },
  methods: {
    async fetchBuilds() {
      try {
        const response = await fetch('/api/character-builds')
        const data = await response.json()
        this.builds = data.builds
      } catch (error) {
        console.error('Error fetching character builds:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.character-builds {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 1.5em;
  color: #42b983;
}

.build {
  margin-bottom: 20px;
}
</style>
<!--
CharacterBuilds.vue

설명

	1.	템플릿 섹션:
	•	h1 태그로 캐릭터 빌드 가이드 제목을 표시합니다.
	•	v-if="loading"을 사용하여 로딩 중일 때 로딩 메시지를 표시합니다.
	•	v-else를 사용하여 로딩이 완료되면 빌드 데이터를 표시합니다.
	•	각 캐릭터의 빌드와 설명을 div 태그로 나눠서 표시합니다.
	2.	스크립트 섹션:
	•	data 함수에서 컴포넌트의 상태를 정의합니다.
	•	created 라이프사이클 훅에서 컴포넌트가 생성될 때 fetchBuilds 메소드를 호출합니다.
	•	fetchBuilds 메소드에서 API를 호출하여 빌드 데이터를 가져오고 상태를 업데이트합니다.
	3.	스타일 섹션:
	•	각 빌드 섹션을 스타일링하여 간격을 설정합니다.

발전 방향

	•	빌드 필터링: 캐릭터나 빌드 유형을 기준으로 빌드를 필터링할 수 있는 기능을 추가합니다.
	•	유저 빌드 공유: 사용자들이 자신만의 빌드를 업로드하고 공유할 수 있는 기능을 추가합니다.
	•	평점 및 리뷰: 각 빌드에 대한 평점과 리뷰를 추가하여 사용자 피드백을 받을 수 있게 합니다.
-->