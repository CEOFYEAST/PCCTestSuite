import { createApp } from 'vue'
import App from './App.vue'
import {link} from './globals.module.js'
import config from '@ceofyeast/prodchaincalculators/config'

config.baseURL = link

createApp(App).mount('#app')
// await import('./App.vue').then((AppModule) => {
    
// })

