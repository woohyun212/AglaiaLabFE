<template>
  <div class="community">
    <h1>커뮤니티</h1>

    <div v-if="loading" class="loading">
      로딩 중...
    </div>

    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <!-- 추가적인 포스트 정보 표시 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  created() {
    this.fetchCommunityPosts()
  },
  methods: {
    async fetchCommunityPosts() {
      try {
        const response = await fetch('/api/community')
        const data = await response.json()
        this.posts = data.posts
      } catch (error) {
        console.error('Error fetching community posts:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.community {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 1.5em;
  color: #42b983;
}

.post {
  margin-bottom: 20px;
}
</style>
<!--
Community.vue

설명

	1.	템플릿 섹션:
	•	h1 태그로 커뮤니티 제목을 표시합니다.
	•	v-if="loading"을 사용하여 로딩 중일 때 로딩 메시지를 표시합니다.
	•	v-else를 사용하여 로딩이 완료되면 게시글 데이터를 표시합니다.
	•	각각의 게시글을 div 태그로 나눠서 표시합니다.
	2.	스크립트 섹션:
	•	data 함수에서 컴포넌트의 상태를 정의합니다.
	•	created 라이프사이클 훅에서 컴포넌트가 생성될 때 fetchCommunityPosts 메소드를 호출합니다.
	•	fetchCommunityPosts 메소드에서 API를 호출하여 게시글 데이터를 가져오고 상태를 업데이트합니다.
	3.	스타일 섹션:
	•	각 게시글 섹션을 스타일링하여 간격을 설정합니다.

발전 방향

	•	게시글 작성 및 수정: 사용자들이 게시글을 작성하고 수정할 수 있는 기능을 추가합니다.
	•	댓글 기능: 각 게시글에 댓글을 달 수 있는 기능을 추가합니다.
	•	좋아요 및 공유: 게시글에 좋아요를 누르거나 다른 사용자들과 공유할 수 있는 기능을 추가합니다.
	-->