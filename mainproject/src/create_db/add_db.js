import {doc, setDoc,getFirestore} from "firebase/firestore";
import {func1} from '../views/Signin.js';

var db=getFirestore();

export function adddb(){
  var array=func1();
    if(array){
      alert('gettoken,users:');
    
    var token=array[0]
    var user=array[1]
    var uid=user.uid
    const sample1=doc(db,'Users',uid);
      alert('addDB!');
      var docData={
       tokens:token
      };
      setDoc(sample1,docData);
      } 
    else{
      alert('cannot get token');
    }
    }
    
   

    
      


  

