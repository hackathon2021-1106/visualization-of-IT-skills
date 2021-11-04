<template>
  <div id="app">
    <todb title='ログインフォーム'></todb>
  </div>
</template>

<script>
import todb from '../components/todb.vue'


export default {
  name:'app',
  components:{
    todb
  },
}

</script>
<!--
export default {
  name: 'user',
  data () {
    return {
      todb: ''
    }
  }
}

  
  


/*
import Vue from 'vue'
//ここで認証し、認証データをdbへ
import {doc, setDoc} from "firebase/firestore";
import db from "../create_db/firestore.js"


new Vue({
  el: '#app',
  data: {
    todb: []
  },
  methods:{
    writedb(){
      const sample1=doc(db,'sample/20211103');
      const docData={
        description:'This is sample1',
        add_db:this.todb,
      };
      setDoc(sample1,docData);
      console.log(this.todb);
      } 

  }
})


<script src="../create_db/firestore.js">
//ここで認証し、認証データをdbへ
import {doc, setDoc} from "firebase/firestore";
import db from "../create_db/firestore.js"

const sample1=doc(db,'sample/20211102');

function writedb(){
  const docData={
    description:'This is sample1',
    todb:[],
  };
  setDoc(sample1,docData);
  } 

export default writedb;
*/

</script>
-->