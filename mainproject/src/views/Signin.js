import { getAuth, signInWithRedirect, /*signOut,*/getRedirectResult,onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import router from '../router'

export function func1(){
  var provider = new GithubAuthProvider();
  provider.addScope('user');
  provider.setCustomParameters({
    'allow_signup': 'false'
  });
  var auth = getAuth();
  var users=auth.currentUser;
  if (users !== null) {
    const uid = users.uid;
    alert('userid:'+uid);
  }
  else{
    alert('not exist user');
    signInWithRedirect(auth,provider);
    getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {

        alert('credential');
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
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
    onAuthStateChanged(auth, (user) => {
    if (user){
      alert('aaaa');
      router.push('/loading')
    }
    else{
      alert('bbbb');
      router.push('/')
    }
    
  });
}
}
  