<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'

const router = useRouter()
const userStore = useUserStore()

const user = ref({
  email: '',
  password: ''
})

// const login = (e) => {
//   e.preventDefault()

//   let password = ""

//  // const email = user.value.email
//   if (user.value.password === 'pass') {
//      password = user.value.password
//   } else {
//     console.error('Erreur de mot de passe!')
//   }

//   const userCredentials = {
//    // email,
//     password,
//   }

//   userStore.login(userCredentials)

//   // user.value.email = ''
//   user.value.password = ''

//   router.push('/')
// }

const error = ref('');
async function login2() {
  error.value = "";
  //simuler authentification
  const { success, message} = await userStore.loginUser(user.value.password);
  if (success) {
    console.log(message);
    await router.push('/');
  } else {
    error.value = message;
  }
}
</script>

<template>
  <div class="main">
    <h2 class="title">connexion</h2>

    <form @submit.prevent="login2">
      <div>
        <label class="label" for="email">E-mail</label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@ocooking.local"
          v-model="user.email"
          disabled
        />
      </div>

      <div>
        <label class="label" for="password">Mot de passe</label>
        <input
          class="input"
          type="password"
          name="password"
          id="password"
          v-model="user.password"
        />
      </div>

      <input class="submit" type="submit" value="Se connecter" />
    </form>
    <div v-if="error">{{  error  }}</div>
  </div>
</template>

<style scoped lang="scss">
input {
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 2rem;
}
</style>
