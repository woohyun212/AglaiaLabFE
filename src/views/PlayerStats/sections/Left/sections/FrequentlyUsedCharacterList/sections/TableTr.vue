<script>
  export default {
    name: 'TableTr',
    props:['stat'],
  }
</script>

<template>
    <tr>
      <td>
        <div class="character-box">
          <div class="image-wrapper">
            <img class="character-img" alt="character-img"
                 :src="`${$ERCDN}/Character/065/1065000/mini.png`"/>
          </div>
          <div class="character-play-info">
            <p>{{ stat.name }}</p>
            <p>{{ stat.playedCount }}게임</p>
          </div>
        </div>
      </td>
      <td>{{ stat.winRate }}</td>
      <td>{{ stat.earnedRP }}</td>
      <td>
        <div>
          <div>TK {{ stat.averageTK }}</div>
          <div>K {{ stat.averageK }}</div>
        </div>
      </td>
      <td>{{ stat.averageDamage }}</td>
    </tr>
<!-- TODO : tr 태그 사이에 hr 넣고 싶다-->
</template>

<style scoped>

tr {
  display: table-row;
  text-align: left;
  letter-spacing: 0;
  font-size: 0.9rem;
  font-weight: 500;
  vertical-align: middle;
  border-bottom: #6f6f6f;
}


td {
  display: table-cell;
  letter-spacing: 0;
  font-size: 0.7rem;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  padding-bottom: 10px;
}


.character-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 36%;
  height: 36px;
  border-radius: 25%;
  object-fit: cover;
  object-position: center center;
  background: rgb(214, 214, 214);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.character-play-info {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}
</style>