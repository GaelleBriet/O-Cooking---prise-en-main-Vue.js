<script setup>
import { useUserStore } from '../../stores/user'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn)

function login() {
  userStore.login()
  router.push('/login')
}

function logout() {
  userStore.logout()
}


</script>

<template>
  <footer class="footer">
    <nav>
      <ul class="menu">
        <li>
          <RouterLink to="/" class="menu-link is-active">Liste des recettes</RouterLink>
        </li>
        <template v-if="isLoggedIn">
          <li>
            <RouterLink to="/createRecipe" class="menu-link">Créer une recette</RouterLink>
          </li>
          <li>
            <p class="menu-link" @click="logout">Déconnexion</p>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li>
            <RouterLink to="/register" class="menu-link">Inscription</RouterLink>
          </li>
          <li>
            <p class="menu-link" @click="login">Connexion</p>
          </li>
        </template>
      </ul>
    </nav>
  </footer>
</template>
