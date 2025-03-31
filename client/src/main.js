import { createApp } from 'vue'
import App from './App.vue'
import {link} from './globals.module.js'
import axios from './axios.js'
import config from '@ceofyeast/prodchaincalculators/config'

//config.baseURL = link
config.axiosInstance = axios

createApp(App).mount('#app')
// await import('./App.vue').then((AppModule) => {
    
// })

function loadedListener(){
    console.log("I heard a load!!! (recipes loaded listener)")
}

import('@ceofyeast/prodchaincalculators/recipes').then((recipesModule) => {
    recipesModule.addRecipesLoadedListener(loadedListener)
})

