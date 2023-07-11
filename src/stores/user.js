import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import {defineStore} from 'pinia'
import { auth } from "../firebaseConfig";
import rutas from "../router"

// el state es el dato global que lo voy a usar en cualquier parte del proyecto
export const useUseStore = defineStore('useStore',{
    state: () =>({
        userData : null,
        loadingUser:false,
        loadingSession : false,
    }),
    actions:{
        async registerUser(email,password){
            this.loadingUser = true
            try {
                // CreateUserWithEmailPassword me devuelve una propiedad llamada user
             const {user} =   await createUserWithEmailAndPassword(auth,email, password)
            this.userData ={ 
                email:user.email, 
                idUser : user.uid
                }
                rutas.push('/')
             console.log(user)
            } catch (error) {
                console.log(error);
            } finally {
             this.loadingUser = false
            }
        },
        async loginUser(email,password) {
            this.loadingUser = true
            try {
              const {user} =  await signInWithEmailAndPassword(auth,email,password)
              this.userData ={ 
                email:user.email, 
                idUser : user.uid
                }
                rutas.push('/')
            } catch(e){
                console.log(e)
            }
            finally {
                this.loadingUser = false
               }
        },
        // creamos una promesa para rutas protegidas
        //Resolve respuesta positiva
        // reject respuesta negativa
        currentUser(){
            return new Promise((resolve,reject) =>{
              const unsuscribe =  onAuthStateChanged(auth,user => {
                    if(user){
                        this.userData ={ email:user.email, idUser : user.uid}

                    }else{ // el usuario no esta autenticado
                         this.userData = null   
                    }
                    resolve(user)
                },e=>reject(e))
                unsuscribe()
            })
        },
       async cerrarSession() {
        try {
            await signOut(auth)
            this.userData = null
            rutas.push('/login')
        }catch(e){
            console.log(e)
        }
       }
    },
})
