<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const login = (e) => {
  e.preventDefault()

  const email = e.target.email.value
  const password = e.target.password.value

  const user = {
    email,
    password
  }

  userStore.login(user)

  //e.target.reset()
  e.target.email.value = ''
  e.target.password.value = ''

  router.push('/')
}
</script>

<template>
  <div class="main">
    <h2 class="title">connexion</h2>

    <form @submit="login">
      <div>
        <label class="label" for="email">E-mail</label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@ocooking.local"
          v-model="email"
        />
      </div>

      <div>
        <label class="label" for="password">Mot de passe</label>
        <input class="input" type="password" name="password" id="password" v-model="password" />
      </div>

      <input class="submit" type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<style scoped lang="scss">
input {
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 2rem;
}
</style>
