import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PlayerStats from '../views/PlayerStats.vue'
// import Leaderboard from '../views/Leaderboard.vue'
// import MatchHistory from '../views/MatchHistory.vue'
// import CharacterBuilds from '../views/CharacterBuilds.vue'
// import EventsNews from '../views/EventsNews.vue'
// import Community from '../views/Community.vue'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/player-stats/:nickname', // 검색된 플레이어 통계 페이지
    name: 'PlayerStats',
    component: PlayerStats,
    props: true, // 라우트 파라미터를 컴포넌트로 전달
  },
  // { path: '/leaderboard', component: Leaderboard },
  // { path: '/match-history', component: MatchHistory },
  // { path: '/character-builds', component: CharacterBuilds },
  // { path: '/events-news', component: EventsNews },
  // { path: '/community', component: Community }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router