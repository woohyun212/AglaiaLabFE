<script>
export default {
  name: 'GameInfoDetail',
}

</script>

<template>
<div class="game-info-detail">
        <div class="detail-box">
          <p class="data-name">TK / K / A</p>
          <p class="played-data">11 / 1 / 13</p>
        </div>
        <div class="detail-box">
          <p class="data-name">딜량</p>
          <p class="played-data">18,757</p>
        </div>
        <div class="detail-box">
          <p class="data-name">RP</p>
          <p class="played-data">10301<span class="earned-rp">+241</span></p>
        </div>
        <div class="detail-box">
          <p class="data-name">루트 ID</p>
          <p class="played-data">비공개</p>
        </div>
      </div>
</template>

<style scoped>
.game-info-detail {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  padding-left: 2%;
  padding-right: 2%;
  height: 100%;
}

.detail-box {
  display: flex;
  flex-direction: column;
  gap: 2%;
  height: 100%;
  justify-content: center;

}

.played-data {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 600;
  height: 15px;
  letter-spacing: 0;
}

.data-name {
  color: #6f6f6f;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 400;;
  letter-spacing: 0;
}

.earned-rp {
  color: #ff0000;
  font-family: "Inter", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
}
</style>