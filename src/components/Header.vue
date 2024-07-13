<template>
  <header>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="Eternal Return" />
        </router-link>
      </div>
      <ul class="nav-links" :class="{ open: isOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/player-stats">전적 분석</router-link></li>
        <li><router-link to="/leaderboard">리더보드</router-link></li>
        <li><router-link to="/match-history">매치 히스토리</router-link></li>
        <li><router-link to="/character-builds">캐릭터 빌드 가이드</router-link></li>
        <li><router-link to="/events-news">이벤트 및 뉴스</router-link></li>
        <li><router-link to="/community">커뮤니티</router-link></li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div class="line" :class="{ 'line1': isOpen }"></div>
        <div class="line" :class="{ 'line2': isOpen }"></div>
        <div class="line" :class="{ 'line3': isOpen }"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo img {
  width: 40px; /* Adjust the size to match the nav-links li */
  height: 40px; /* Adjust the size to match the nav-links li */
  transform: rotate(180deg);
  filter: hue-rotate(90deg);
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #42b983;
}

.burger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
}

.burger .line {
  height: 3px;
  background-color: white;
  border-radius: 10px;
  transition: transform 0.3s, opacity 0.3s;
}

.line1 {
  transform: rotate(45deg) translate(5px, 5px);
}

.line2 {
  opacity: 0;
}

.line3 {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    top: 60px;
    background-color: #333;
    flex-direction: column;
    width: 200px;
    height: calc(100vh - 60px);
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    margin: 20px 0;
  }

  .burger {
    display: flex;
  }
}
</style>