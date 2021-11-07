<template>
  <div class="">
    <p>from github auth...</p>
    <button @click="callback">redirect to home</button>
  </div>
</template>

<script>
//import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';
import router from '../router';
var auth=getAuth();

export default {
  //props:['state'],
  methods: {
      callback:function(){auth.onAuthStateChanged((user) => {
      if (user) {
        //if(this.props=='OK'){
          alert('login!!');
          router.push('/home')
        //}
        /*else{
          alert('this.props'+this.props);
          this.$router.push('/')
        }*/
      }else{
        alert('redirect to loginpage');
        router.push('/')
      }
    })
  },
 
  }
}
</script>