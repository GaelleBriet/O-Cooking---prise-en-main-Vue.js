<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const register = (e) => {
  e.preventDefault()

  const firstName = e.target.firstName.value
  const lastName = e.target.lastName.value
  const email = e.target.email.value
  const pseudo = e.target.pseudo.value
  const password = e.target.password.value
  const pwValidation = e.target.pwValidation.value


  const user = {
    firstName,
    lastName,
    email,
    pseudo,
    password,
    pwValidation
  }

  userStore.register(user)

  //e.target.reset()
  e.target.firstName.value = ''
  e.target.lastName.value = ''
  e.target.email.value = ''
  e.target.pseudo.value = ''
  e.target.password.value = ''
  e.target.pwValidation.value = ''

  router.push('/')
}
</script>

<template>
  <div class="main">
    <h2 class="title">créer un compte</h2>

    <form @submit="register">
      <div>
        <label class="label" for="firstName">Prénom</label>
        <input class="input" type="text" name="firstName" id="firstName" placeholder="John" />
      </div>

      <div>
        <label class="label" for="lastName">Nom</label>
        <input class="input" type="text" name="lastName" id="lastName" placeholder="Doe" />
      </div>

      <div>
        <label class="label" for="email">E-mail</label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@ocooking.local"
        />
      </div>

      <div>
        <label class="label" for="pseudo">Identifiant</label>
        <input class="input" type="text" name="pseudo" id="pseudo" placeholder="John" />
      </div>

      <div>
        <label class="label" for="password">Mot de passe</label>
        <input class="input" type="password" name="password" id="password" />
      </div>

      <div>
        <label class="label" for="pwValidation">Confirmation du mot de passe</label>
        <input class="input" type="password" name="pwValidation" id="pwValidation" />
      </div>

      <input class="submit" type="submit" value="S'inscrire" />
    </form>
  </div>
</template>

<style scoped lang="scss"></style>
