<template>
    <div>
        <h1>Home</h1>
        <p>{{ userStore.userData?.email }}</p>
    </div>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebaseConfig"
import {useUseStore} from '../stores/user'

const userStore = useUseStore()


</script>

<style lang="scss" scoped>

</style>