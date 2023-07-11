<template>
  <h1>Bienvenido Vite</h1>
  <nav v-if="!userStore.loadingSession">
    <router-link v-if="userStore.userData" to="/">Home</router-link> |
    <router-link v-if="!userStore.userData" to="/Login">Login</router-link> |
    <router-link v-if="!userStore.userData" to="/Register">Register</router-link> |
    <button v-if="userStore.userData" @click="cerrar.cerrarSession()">Logout</button>  
  </nav>
  <div v-else>
   loading user...
  </div>
  <router-view/>
</template>

<script setup>
import {useUseStore} from "../src/stores/user"
const cerrar = useUseStore();
const userStore = useUseStore();

</script>