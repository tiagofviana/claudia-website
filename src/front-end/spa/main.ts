// import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faHouse, faPhone)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
