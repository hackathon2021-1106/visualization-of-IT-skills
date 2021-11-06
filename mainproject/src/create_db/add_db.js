import {doc, setDoc,getFirestore} from "firebase/firestore";
import signin from '../views/Signin.js';

var db=getFirestore();

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
        object,
      };
      setDoc(sample1,docData);
      } 
    
    }

} 

  

