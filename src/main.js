import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import rutas from './router'
import {createPinia} from 'pinia'


createApp(App).use(rutas).use(createPinia()).mount('#app')
