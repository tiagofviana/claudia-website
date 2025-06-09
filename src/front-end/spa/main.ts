import { createApp } from 'vue'
import CustomFontAwesome from '@/components/icons/CustomFontAwesome.vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.component('font-awesome-icon', CustomFontAwesome)
app.use(router)
const vm = app.mount('#app')
