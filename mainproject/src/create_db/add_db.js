import {doc, setDoc} from "firebase/firestore";
import db from "./firestore.js"
import signin from '../views/Signin.js';

export default{
  data:{},
  methods: {
    gettoken:function(){
    const {tokens,users}=signin.func2();
    console.log('aaaaa');
    this.data.set(users,tokens)
    console.log(this.data)
    },
    adddb:function(){
      const dir='Users'+String(this.users);
      const sample1=doc(db,dir);
      const docData={
        token:this.tokens,
      };
      setDoc(sample1,docData);
      } 
    
    }

} 

  

