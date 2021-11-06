<template>
    <div>
        <form>      
            <p>You have to login!</p>
        </form>
        <div id="login"></div>
        <button @click="login">OK</button>
        <p>↑push to {{message}}</p>
        
    </div>
</template>

<script>
//import Vue from 'vue'
//import init from './firestore.js';
import {func1} from './Signin.js';
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
            //signinwithpopup.func
            var token=func1();
            //var token=lists[0];
            //var user=lists[1];
            alert('lists'+token);
            if(token!==undefined){
                alert('func2,token is'+String(token));
                //alert('func2,user is'+String(user));
              }
            else{alert('failed to get token');}
            },
            adddb:function(){
              var object=adddb.methods.gettoken();
              if(object!==undefined){
                alert('object=>'+object);
                adddb.methods.adddb(object);
              }else{ 
              alert('bbbbb');
              }
            }
        },
        computed:{},
        watch: {
              route(to, from) {
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
