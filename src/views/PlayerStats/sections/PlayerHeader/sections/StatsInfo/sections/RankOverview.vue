<template>
  <div class="rank-overview">
    <p class="mmr">10301 RP</p>
    <div class="tier">
      <p>이터니티 - 3308 RP</p>
      <p>랭크 1위 (상위 0.01%)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankOverview",
};
</script>


<style>
.rank-overview {
  display: flex;
  flex-direction: column;
}

.rank-overview .mmr {
  color: #abdb64;
  font-family: "Noto Sans KR", Helvetica;
  font-size: 2.3rem;
  font-weight: var(--noto-sans-kr-font-weight-bold);
  letter-spacing: 0;
  line-height: 2rem;
  text-shadow: 4px 4px 4px #00000040;
  white-space: nowrap;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.rank-overview .tier {
  display: flex;
  flex-direction: column;
}

.rank-overview .tier p{
  color: #000000;
  font-family: "Noto Sans KR", Helvetica, serif;
  font-size: 1rem;
  font-weight: var(--noto-sans-kr-font-weight-medium);
  letter-spacing: 0;
  line-height: 1.2;
  white-space: nowrap;
}
</style>
