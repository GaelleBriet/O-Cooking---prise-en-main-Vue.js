<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'

const router = useRouter()
// définition du store et de la valeur de isLoggedIn
const userStore = useUserStore()
const isLoggedIn = userStore.isLoggedIn
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
            <RouterLink to="/login" class="menu-link">Connexion</RouterLink>
          </li>
        </template>
      </ul>
    </nav>
  </footer>
</template>
