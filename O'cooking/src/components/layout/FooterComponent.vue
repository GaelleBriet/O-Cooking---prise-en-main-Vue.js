<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <footer class="footer">
    <nav>
      <ul class="menu">
        <li>
          <router-link to="/recipe" class="menu-link is-active">Liste des recettes</router-link>
        </li>
        <li>
          <router-link to="/register" class="menu-link">Inscription</router-link>
        </li>
        <li>
          <router-link to="/login" class="menu-link">Connexion</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
