<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import { ref } from 'vue'

const router = useRouter()

// définition du store et de la valeur de isLoggedIn
const userStore = useUserStore()
const isLoggedIn = ref(userStore.$state.isLoggedIn)
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
            <p class="menu-link">Connexion</p>
          </li>
        </template>
      </ul>
    </nav>
  </footer>
</template>
