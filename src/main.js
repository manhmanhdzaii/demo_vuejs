import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createStore } from 'vuex'
import './assets/main.css'
const store = createStore({
    state () {
      return {
        cart: [
        ],
        name: localStorage.getItem("name"),
        page_login: true,
      }
    },
    getters: {
    },
    mutations: {
        add_cart(state, arr){
            state.cart = arr;
        },
        add_name(state, name){
            state.name = name;
        },
        chane_page_login(state, value){
            state.page_login = value;
        }
    }

})
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAxios,{$request : axios})
app.mount('#app')
