import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue'),
      props: true
    },
    {
      path: '/createRecipe',
      name: 'createRecipe',
      component: () => import('../views/RecipeFormView.vue')
    }
  ]
})

export default router
