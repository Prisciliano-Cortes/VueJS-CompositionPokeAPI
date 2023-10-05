
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "@tanstack/vue-query";
import './assets/main.css'

import './store/store';


const app = createApp(App)

// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, //*** Two minutes */
                refetchOnReconnect: 'always'
            }
        }
    }
})
app.use(router)

app.mount('#app')
