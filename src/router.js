import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import { useUseStore } from "./stores/user";
 const requireAuth = async(to,from,next) =>{
    const useStore = useUseStore()
    useStore.loadingSession = true
    const user = await useStore.currentUser()
    if(user){
        next()
    }else{
        next('/login')
    }
    useStore.loadingSession = false

 }

const routes = [
{path:"/", component: Home, beforeEnter : requireAuth},
{path:"/login", component: Login},
{path:"/register", component: Register},
];

const route = createRouter({
    routes,
    history: createWebHistory(),
})
export default route;