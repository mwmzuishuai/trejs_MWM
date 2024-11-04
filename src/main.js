import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tres from '@tresjs/core'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'dayjs/locale/zh-cn'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Tres).use(router).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
