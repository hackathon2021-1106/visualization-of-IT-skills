//import {doc, setDoc} from "firebase/firestore";
//import db from "./firestore.js"
import func1 from '../views/neosign.js';


export function gettoken(){
  var [tokens,users]=func1();
    if(tokens){
      alert('gettoken,users:'+users);
      var object={users:tokens}
      this.msg=object;
      return object;
    }
    else{
      alert('token_error');
    }
  }
  
   /*
      
      
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

*/  

