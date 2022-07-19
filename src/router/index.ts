import ContenidoVue from '../views/Contenido.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RegistroVue from '@/views/Registro.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contenido',
      name: 'contenido',
      component: ContenidoVue
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroVue
    }
  ]
})

export default router
