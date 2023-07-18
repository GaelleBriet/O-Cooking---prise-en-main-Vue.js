<script setup>
import { useUserStore } from '../../stores/user'
import { ref, computed } from 'vue'

const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.user.isLoggedIn)

// définition d'une valeur pour voir ou cacher le bouton déconnexion
// au départ le bouton est caché
let showLogout = ref(false)

// définition de fonctions pour afficher ou masquer le bouton déconnexion avec un évènement au click
const showLogoutBtn = () => {
  if (isLoggedIn.value) {
    showLogout.value = true
  } else {
    showLogout.value = false
  }
}

const logout = () => {
  userStore.logout()
  showLogout.value = false
}
</script>

<template>
  <header id="header">
    <div class="brand">
      <router-link to="/" class="menu-link is-active">
        <figure id="logo">
          <img alt="10 minutes O'Four logo" src="../../assets/images/logo.svg" />
        </figure>
      </router-link>
      <div id="title">
        <p>10 minutes</p>
        <h1>O'Four</h1>
      </div>
    </div>
    <div v-if="isLoggedIn" id="account">
      <div id="name">
        <p>John Doe</p>
      </div>
      <ul>
        <li>
          <img
            id="accountIcon"
            src="../../assets/images/account-icon.png"
            alt="account icon"
            @click="showLogoutBtn"
          />
        </li>
        <li>
          <div v-if="showLogout" class="logoutButton">
            <a href="#" id="logout" @click="logout">Déconnexion</a>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
#account {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 10px;

  .logoutButton{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    position: absolute;
    top: 60px;
    right: 10px;
  }
  #logout {
    border: solid 1px #ccc;
    border-radius: 5%;
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-align: center;
    letter-spacing: 1px;
    background-color: #ccc;
    outline: none;
  }
}
</style>
