/*
 * @Author: lzy 3312202467@qq.com
 * @Date: 2025-05-05 15:20:43
 * @LastEditors: lzy 3312202467@qq.com
 * @LastEditTime: 2025-05-05 16:44:18
 * @FilePath: \vite-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'
import ErrorStackParser from 'error-stack-parser'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = (err, instance, info) => {
  const stack = ErrorStackParser.parse(err)
  console.log(stack)
}
app.mount('#app')
