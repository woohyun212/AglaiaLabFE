import './assets/styles.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// CDN ORIGIN 등록
app.config.globalProperties.$ERCDN = 'https://cdn.w00.kr/ER';

app.mount('#app')