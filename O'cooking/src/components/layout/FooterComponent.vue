<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import { ref } from 'vue'

const router = useRouter()

const userStore = useUserStore()
const isLoggedIn = ref(userStore.$state.isLoggedIn)
console.log('isLoggedIn.value : ', isLoggedIn.value);
const login = () => {
  userStore.login()
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
          <RouterLink to="/createRecipe" class="menu-link">Créer une recette</RouterLink>
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
