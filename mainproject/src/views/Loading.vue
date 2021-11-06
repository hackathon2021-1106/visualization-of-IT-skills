<template>
  <div class="">
    <p>Now Loading...</p>
    <p>{{state}}</p>
  </div>
</template>

<script>
//import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';

var auth=getAuth();

export default {
  props:['state'],
  methods: {
      function(){auth.onAuthStateChanged((user) => {
      if (user) {
        if(this.props=='OK'){
          alert('login!!');
          this.$router.push('/home')
        }
        else{
          alert('this.props'+this.props);
          this.$router.push('/')
        }
      }else{
        alert('redirect to loginpage');
        this.$router.push('/')
      }
    })
  },
 
  }
}
</script>