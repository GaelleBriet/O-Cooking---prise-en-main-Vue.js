<script setup>
// import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import { computed, ref } from 'vue'

// const router = useRouter()

const userStore = useUserStore()
const isLoggedIn = ref(userStore.isLoggedIn)
// const isLoggedIn = computed(() => userStore.isLoggedIn)
</script>

<template></template>
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
            <p class="menu-link" @click="isLoggedIn = false">Déconnexion</p>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li>
            <RouterLink to="/register" class="menu-link">Inscription</RouterLink>
          </li>
          <li>
            <p class="menu-link" @click="isLoggedIn = true">Connexion</p>
          </li>
        </template>
      </ul>
    </nav>
  </footer>
</template>
