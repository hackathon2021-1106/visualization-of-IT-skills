<template>
    <div>
        <form>      
            <p>You have to login!</p>
        </form>
        <div id="login"></div>
        <button @click="login(); adddb()">OK</button>
        <p>↑push to {{message}}</p>
        
    </div>
</template>

<script>
//import Vue from 'vue'
//import init from './firestore.js';
import signin from './Signin.js';
import init from './firestore.js';
//import router from '../router';
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
            var userid=signin.func1();
            var lists=signin.func2();
            let token=lists[0];
            let user=lists[1]
            if (userid){
              alert('func1,userid is'+userid);
            }
            if (token){
              alert('func2,token is'+String(token));
              alert('func2,user is'+String(user));
            }
            
            
            },
            adddb:function(){
              var object=adddb.methods.gettoken();
              if(object!==undefined){
                alert('object=>'+object);
                adddb.methods.adddb(object);
              }else{ 
              alert('bbbbb');
              }
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
