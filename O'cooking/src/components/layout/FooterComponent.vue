<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <footer class="footer">
    <nav>
      <ul class="menu">
        <li>
          <RouterLink to="/" class="menu-link is-active">Liste des recettes</RouterLink>
        </li>
        <li>
          <RouterLink to="/register" class="menu-link">Inscription</RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="menu-link">Connexion</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
