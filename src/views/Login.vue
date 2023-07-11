<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="enviarDato">
            <input type="text" name="email" placeholder="Ingrese Email" v-model.trim="correo">
            <input type="password" placeholder="Ingrese Contraseña" v-model.trim="clave">  
            <button  type="submit" :disabled="useUseStore.loginUser">Acceso</button>    
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUseStore} from "../stores/user"
//import { useRouter } from "vue-router"
//const ruta = useRouter();

const dataUser = useUseStore();

const correo = ref(''); // le asignamos el dato reactivo con string vacio
const clave = ref('');
const enviarDato = async ()=>{
   // console.log(correo.value)
   if(!correo.value || clave.value.length < 6){ // si no existe correo o password
    return alert("Llena los campos")
   }
  await dataUser.loginUser(correo.value,clave.value)
  //  ruta.push("/");
   // console.log("Enviando formulario")
   // console.log(clave.value)
}

</script>

<style lang="scss" scoped>

</style>