<template>
  <div class="stats">
    <div class="stat-block">
      <p>평균 TK</p>
      <p>{{ statsGroup.averageTeamKills }}</p>
    </div>
    <div class="stat-block">
      <p>TOP 1</p>
      <p>{{ statsGroup.top1 }}</p>
    </div>
    <div class="stat-block">
      <p>게임 수</p>
      <p>{{ statsGroup.totalGames }}</p>
    </div>
    <div class="stat-block">
      <p>평균 킬</p>
      <p>{{ statsGroup.averageKills }}</p>
    </div>
    <div class="stat-block">
      <p>TOP 2</p>
      <p>{{ statsGroup.top2 }}</p>
    </div>
    <div class="stat-block">
      <p>평균 딜량</p>
      <p>{{ statsGroup.averageDamage }}</p>
    </div>
    <div class="stat-block">
      <p>평균 어시</p>
      <p>{{ statsGroup.averageAssistants }}</p>
    </div>
    <div class="stat-block">
      <p>TOP 3</p>
      <p>{{ statsGroup.top3 }}</p>
    </div>
    <div class="stat-block">
      <p>평균 순위</p>
      <p>{{ statsGroup.averageRank }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Stats",
  props: ["statsGroup"],
  methods:{},
};
</script>

<style>
.stats {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr); /* 3열 레이아웃 */
  grid-gap: 3%; /* 그리드 아이템 사이 간격 */
  border-radius: 10px; /* 부드러운 모서리 */
}

.stat-block {
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: flex-start;

  border-radius: 8px;
  text-align: left;
  white-space: nowrap;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 각 카드에 그림자 효과 */
}

.stat-block p:first-child {
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.stat-block p:last-child {
  font-size: 1em;
  margin: 0;
  color: #333; /* 숫자나 퍼센트는 진한 색상 */
}
</style>
