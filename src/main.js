import './assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import dayjs from 'dayjs'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
app.use(bootstrap)
app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
