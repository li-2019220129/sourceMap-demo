import './assets/main.css'
import ErrorStackParser from 'error-stack-parser'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.config.errorHandler = (err, instance, info) => {
//   const stack = ErrorStackParser.parse(err)
//   console.log(stack)
// }
app.mount('#app')
