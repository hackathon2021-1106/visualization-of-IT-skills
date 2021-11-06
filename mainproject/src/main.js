import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey:process.env.VUE_APP_API_KEY,
  authDomain: "hackathon2021-1106.firebaseapp.com",
  projectId: "hackathon2021-1106",
  storageBucket: "hackathon2021-1106.appspot.com",
  messagingSenderId:process.env.VUE_APP_MESSAGEING_SEND_ID,
  appId:process.env.VUE_APP_APP_ID,
};

initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
