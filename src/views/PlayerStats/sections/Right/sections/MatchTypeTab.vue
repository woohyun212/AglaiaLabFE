<template>
  <div class="match-type-tab">
    <a href='#1' class="type-tab selected">전체</a>
    <a href='#2' class="type-tab ">랭크</a>
    <a href='#3' class="type-tab ">일반</a>
    <a href='#4' class="type-tab ">코발트</a>
  </div>
</template>

<script>
export default {
  name: "MatchTypeTab",
};
</script>


<style scoped>
.match-type-tab {
  display: flex;
  flex-direction: row;
  height: 3rem;
}

.match-type-tab .type-tab {
  color: black;
  height: 100%;
  width:100%;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  display: inline-block; /* 또는 block */
  line-height: 3rem;  /* height와 동일하게 설정 */
  text-align: center;  /* 수평 정렬 */
  vertical-align: middle;  /* 수직 정렬 */


}

.match-type-tab .type-tab:first-of-type {
  border-radius: 15px 0 0 0;
}
.match-type-tab .type-tab:last-of-type {
  border-radius: 0 15px 0 0;
}

.match-type-tab .selected {
  color: #ffffff;
  background-color: #abdb64;
  font-size: 24px;
  font-weight: 900;
}

</style>
