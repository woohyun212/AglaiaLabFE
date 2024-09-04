<template>
  <div class="stats-info">
    <RankOverview/>
    <hr/>
    <Stats :stats-group="playerStats"/>
    <hr/>
    <h2 class="player-info-subtitle">실험체 통계</h2>
    <Stats :stats-group="selectedCharacterStats"/>
  </div>
</template>

<script>
import RankOverview from "@/views/PlayerStats/sections/PlayerHeader/sections/StatsInfo/sections/RankOverview.vue";
import Stats from "@/views/PlayerStats/sections/PlayerHeader/sections/StatsInfo/sections/Stats.vue";
import {mapGetters, mapState} from "vuex";
export default {
  name: "StatsInfo",
  components: {
    RankOverview,
    Stats,
  },
  data() {

  },
  computed: {
    ...mapState(["playerStats"]),
    ...mapGetters(["selectedCharacterIndex", "selectedCharacterStats"]),

  },
};
</script>


<style>
.stats-info {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
}

hr {
  border: 0.01rem solid var(--gray-line-color);
  width: 100%;
  /*
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  */
}

.player-info-subtitle {
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: var(--noto-sans-kr-font-family);
  font-size: 1.5rem;
  font-style: var(--noto-sans-kr-font-style-light);
  font-weight: var(--noto-sans-kr-font-weight-bold);
  letter-spacing: -0.5px;
  line-height: 1.5rem;
  white-space: nowrap;
  height: 1.5rem;
}

</style>