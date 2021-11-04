<template>
    <div>
        <form>      
            <p>You have to login!</p>
        </form>
        <div id="login"></div>
        <button @click="login(); adddb()">OK</button>
        <p>{{message}}</p>
        
    </div>
</template>

<script>
//import Vue from 'vue'
//import init from './firestore.js';
import signin from './Signin.js';
import init from './firestore.js';
import router from '../router';
import adddb from '../create_db/add_db.js';

//import signinwithpopup from './Signinwithpopup';
export default {
        data () {
            return {
                message:'login'
            }
        },
        methods: {
            login:function(){
            init.init;
            //signinwithpopup.func
            signin.func1();
            signin.func2();
            alert('aaaaa');
            },
            adddb:function(){
              adddb.gettoken();
              adddb.adddb();
              alert('bbbbb')
            },
            jump:function(){
            router.push('./home');
            }},
        computed:{},
        watch: {
              $route(to, from) {
                console.log({to});
                console.log({from});
                console.log('ページ遷移されました');
    }
  }


            }
        
  
/*new Vue({
  el:"#bb",
  data:{
    message:'login'

  },
  methods: {
    login:function(){
      //init.db(),
      //signinwithpopup.func
      signin.func1(),
      signin.func2()
      }

    }

      
    });*/
</script>


<!--{
    name: "App",

    mounted() {
      // モジュール名.関数名で呼び出します。
      signin.func();
    },
  };
-->
