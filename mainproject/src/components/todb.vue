<template>
    <div>
        <form>      
            <p>Input loginId is {{ todb.loginId }} </p>
            <input type="text" placeholder="input your id" v-model="todb.loginID">
        </form>
        <button @click="writedb()">submit</button>
    </div>
</template>

<script>
//ここで認証し、認証データをdbへ
//import {doc, setDoc} from "firebase/firestore";
//Simport db from "../create_db/firestore.js"

export default{
    name:'todb',
    data:function(){
        return{
            todb:{
                Username:null,
                loginID:null
            }
        }        
    }
    }
/*
    data:
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
 
}
 



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

