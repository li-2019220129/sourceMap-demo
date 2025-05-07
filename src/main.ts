import './assets/main.css'
import ErrorStackParser from 'error-stack-parser'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { findSourceMap } from './utils'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.config.errorHandler = (err: any, instance, info) => {
  const stack = ErrorStackParser.parse(err)
  const jsError = {
    stack_frames: stack,
    message: err.message,
    error_name: err.name,
    stack: err.stack,
  }
  instance!.$message.error(`您触发了一个${err.name}错误`)
  localStorage.setItem('jsError', JSON.stringify(jsError))
  // findSourceMap(stack[0])
}
app.mount('#app')
