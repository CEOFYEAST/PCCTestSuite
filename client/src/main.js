import { createApp } from 'vue'
//import App from './App.vue'
import {link} from './globals.module.js'
import setConfig from '@ceofyeast/prodchaincalculators/config'

setConfig({
    baseURL: link
})

await import('./App.vue').then((AppModule) => {
    createApp(AppModule.default).mount('#app')
})

