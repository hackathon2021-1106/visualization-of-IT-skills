import { getAuth, signInWithRedirect, getRedirectResult, GithubAuthProvider } from "firebase/auth";
import router from '../router'

export function func1(){
  var provider = new GithubAuthProvider();
  provider.addScope('user');
  provider.setCustomParameters({
    'allow_signup': 'false'
  });

  var auth = getAuth();
  //var user=auth.currentUser;
  signInWithRedirect(auth,provider);
  auth.onAuthStateChanged((user) => {
    if (user) {
      alert('stateOK');
      router.push('./loading')
      }
    else{
      alert('redirect to loginpage');
      router.push('/')
    }});
  var username=auth.currentUser;
  if(username){alert('func2,username='+String(username));}
  getRedirectResult(auth)
    .then((result) => {
      //alert('then');
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        //const user = result.user;
        // ...
        alert('credential,Success!');
        router.push({path:'/loading',params:{state:'OK'}})
        return token;  
      }
      else{
        alert('credential error!');
        router.push('/')
      }

      // The signed-in user info.
    })
    .catch((error) => {
      // Handle Errors here.
      alert('catch');
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
  
      // The AuthCredential type that was used.
      // ...
      alert('errorcode'+errorCode,errorMessage);
      router.push('/')
    });

}

  

/*
function func2(){ 
  var provider=new GithubAuthProvider();
  var auth = getAuth();
  var username=auth.currentUser;
  if(username){alert('func2,username='+String(username));}
  getRedirectResult(auth)
    .then((result) => {
      //alert('then');
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        const user = result.user;
        // ...
        alert('credential,Success!');
        router.push({path:'/loading',params:{state:'OK'}})
        return [token,user];  
      }
      else{
        alert('credential error!');
        signInWithRedirect(auth,provider);
        router.push({path:'/loading',params:{state:'error'}})
      }

      // The signed-in user info.
    })
    .catch((error) => {
      // Handle Errors here.
      alert('catch');
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
  
      // The AuthCredential type that was used.
      // ...
      alert('errorcode'+errorCode,errorMessage);
      signInWithRedirect(auth,provider);
    });
}

export default {func1,func2};*/