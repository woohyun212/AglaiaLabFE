<template>
  <div class="home">
    <section class="banner">
      <h1>이터널리턴 게임 데이터 분석 및 통계</h1>
      <p>플레이어 전적 분석, 리더보드, 매치 히스토리 등 다양한 기능을 제공합니다.</p>
      <button @click="startAnalysis">지금 분석하기</button>
    </section>

    <section class="features">
      <div class="feature">
        <h2>전적 분석</h2>
        <p>플레이어의 전적을 분석하고 통계를 시각화하여 성과를 확인하세요.</p>
      </div>
      <div class="feature">
        <h2>리더보드</h2>
        <p>전 세계 및 지역별 상위 플레이어들의 순위를 확인하세요.</p>
      </div>
      <div class="feature">
        <h2>매치 히스토리</h2>
        <p>게임 기록을 상세히 분석하고 자신의 플레이 스타일을 개선하세요.</p>
      </div>
      <div class="feature">
        <h2>캐릭터 빌드 가이드</h2>
        <p>캐릭터별 전략과 빌드를 확인하여 게임에서 승리하세요.</p>
      </div>
      <div class="feature">
        <h2>이벤트 및 뉴스</h2>
        <p>최신 게임 이벤트와 뉴스를 빠르게 확인하세요.</p>
      </div>
      <div class="feature">
        <h2>커뮤니티</h2>
        <p>포럼과 게시판을 통해 다른 플레이어들과 소통하세요.</p>
      </div>
    </section>

    <section class="reviews">
      <h2>사용자 리뷰</h2>
      <p>사용자 리뷰가 여기에 표시됩니다.</p>
    </section>

    <section class="how-to-start">
      <h2>시작하는 방법</h2>
      <ol>
        <li>회원가입 및 로그인</li>
        <li>플레이어 검색</li>
        <li>데이터 분석 및 통계 확인</li>
      </ol>
    </section>

    <section class="partners">
      <h2>파트너 및 협력사</h2>
      <p>협력사 로고가 여기에 표시됩니다.</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    startAnalysis() {
      this.$router.push('/player-stats')
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.banner {
  background-color: #42b983;
  color: white;
  padding: 50px 20px;
}

.banner h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.banner p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.banner button {
  background-color: white;
  color: #42b983;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px 0;
}

.feature {
  flex: 1 1 30%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.reviews, .how-to-start, .partners {
  margin: 40px 0;
}


</style>

<!--
홈페이지는 애플리케이션의 첫 인상을 결정짓는 중요한 요소입니다. 사용자들이 이터널리턴 게임 데이터 통계/관전 분석 서비스의 핵심 기능과 혜택을 빠르게 이해할 수 있도록 구성하는 것이 좋습니다. 다음은 홈페이지에 포함할 수 있는 내용의 추천 목록입니다:

1. 메인 배너

	•	타이틀: “이터널리턴 게임 데이터 분석 및 통계”
	•	서브타이틀: “플레이어 전적 분석, 리더보드, 매치 히스토리 등 다양한 기능을 제공합니다.”
	•	콜 투 액션 버튼: “시작하기” 또는 “지금 분석하기”

2. 주요 기능 소개

각 기능에 대한 간략한 설명과 아이콘을 포함한 섹션:

	•	전적 분석: “플레이어의 전적을 분석하고 통계를 시각화하여 성과를 확인하세요.”
	•	리더보드: “전 세계 및 지역별 상위 플레이어들의 순위를 확인하세요.”
	•	매치 히스토리: “게임 기록을 상세히 분석하고 자신의 플레이 스타일을 개선하세요.”
	•	캐릭터 빌드 가이드: “캐릭터별 전략과 빌드를 확인하여 게임에서 승리하세요.”
	•	이벤트 및 뉴스: “최신 게임 이벤트와 뉴스를 빠르게 확인하세요.”
	•	커뮤니티: “포럼과 게시판을 통해 다른 플레이어들과 소통하세요.”

3. 사용자 리뷰 및 추천

실제 사용자들의 리뷰와 추천 글을 포함하여 신뢰성을 높입니다.

4. 시작하는 방법

서비스 사용 방법을 간단하게 설명하는 섹션:

	•	회원가입 및 로그인
	•	플레이어 검색
	•	데이터 분석 및 통계 확인

5. 파트너 및 협력사

게임 데이터 제공 업체 또는 협력사 로고를 포함하여 신뢰성을 높입니다.

6. 소셜 미디어 및 뉴스레터 구독

소셜 미디어 링크와 뉴스레터 구독 폼을 포함하여 사용자와의 소통을 강화합니다.

7. 푸터

회사 정보, 이용 약관, 개인정보 처리방침 등의 링크를 포함합니다.

-->