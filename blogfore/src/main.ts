import { createApp } from 'vue'
import { useI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App as never).use(store).use(router).use(useI18n)
  .mount('#app')
