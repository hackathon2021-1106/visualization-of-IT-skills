import {doc, setDoc} from "firebase/firestore";
import db from "./firestore.js"
import signin from '../views/Signin.js';


export default{
  data:{
    msg:{'key':'value'}
  },
  methods: {
    gettoken:function(){
      var tokens,users=signin.func2();
      if(tokens){
        alert('gettoken,users:'+users);
      }
      
      var object={users:tokens}
      this.msg=object;
      return object;
    },
    adddb:function(object){
      const sample1=doc(db,'Users',object);
      alert('addDB!');
      var docData={
        object
      };
      setDoc(sample1,docData);
      } 
    
    }

} 

  

