<script setup>
import { useUserStore } from '../../stores/user'

const userStore = useUserStore();
const isLoggedIn = userStore.isLoggedIn;

</script>

<template>
  <header id="header">
    <div class="brand">
      <figure id="logo">
        <img alt="10 minutes O'Four logo" src="../../assets/images/logo.svg" />
      </figure>
      <div id="title">
        <p>10 minutes</p>
        <h1>O'Four</h1>
      </div>
    </div>

    <div v-if="isLoggedIn" id="account">
      <div id="name">
        <p>John Doe</p>
      </div>
      <img id="accountIcon" src="../../assets/images/account-icon.png" alt="account icon" />
    </div>
  </header>
</template>

<style lang="scss">
#account {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
}
</style>
