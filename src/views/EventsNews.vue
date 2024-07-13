<template>
  <div class="events-news">
    <h1>이벤트 및 뉴스</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <div class="events">
        <h2>이벤트</h2>
        <div v-for="event in events" :key="event.id" class="event">
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <!-- 추가적인 이벤트 정보 표시 -->
        </div>
      </div>

      <div class="news">
        <h2>뉴스</h2>
        <div v-for="newsItem in news" :key="newsItem.id" class="news-item">
          <h3>{{ newsItem.title }}</h3>
          <p>{{ newsItem.description }}</p>
          <!-- 추가적인 뉴스 정보 표시 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsNews',
  data() {
    return {
      events: [],
      news: [],
      loading: true
    }
  },
  created() {
    this.fetchEventsNews()
  },
  methods: {
    async fetchEventsNews() {
      try {
        const response = await fetch('/api/events-news')
        const data = await response.json()
        this.events = data.events
        this.news = data.news
      } catch (error) {
        console.error('Error fetching events and news:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.events-news {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 1.5em;
  color: #42b983;
}

.events, .news {
  margin-bottom: 20px;
}

.event, .news-item {
  margin-bottom: 10px;
}
</style>

<!--설명

	1.	템플릿 섹션:
	•	h1 태그로 이벤트 및 뉴스 제목을 표시합니다.
	•	v-if="loading"을 사용하여 로딩 중일 때 로딩 메시지를 표시합니다.
	•	v-else를 사용하여 로딩이 완료되면 이벤트와 뉴스 데이터를 표시합니다.
	•	각각의 이벤트와 뉴스 항목을 div 태그로 나눠서 표시합니다.
	2.	스크립트 섹션:
	•	data 함수에서 컴포넌트의 상태를 정의합니다.
	•	created 라이프사이클 훅에서 컴포넌트가 생성될 때 fetchEventsNews 메소드를 호출합니다.
	•	fetchEventsNews 메소드에서 API를 호출하여 이벤트 및 뉴스 데이터를 가져오고 상태를 업데이트합니다.
	3.	스타일 섹션:
	•	각 이벤트 및 뉴스 섹션을 스타일링하여 간격을 설정합니다.

발전 방향

	•	이벤트 등록: 사용자들이 이벤트에 등록하고 참여할 수 있는 기능을 추가합니다.
	•	뉴스 상세 보기: 뉴스 제목을 클릭하면 뉴스의 상세 내용을 볼 수 있는 페이지로 이동할 수 있게 합니다.
	•	카테고리 필터: 이벤트와 뉴스를 카테고리별로 필터링할 수 있는 기능을 추가합니다.

-->