import { getAuth, signInWithRedirect, getRedirectResult, GithubAuthProvider,onAuthStateChanged } from "firebase/auth";
import router from '../router'

export function func1(){
  var provider = new GithubAuthProvider();
  provider.addScope('user');
  provider.setCustomParameters({
    'allow_signup': 'false'
  });

  var auth = getAuth();
  signInWithRedirect(auth,provider);
  router.push('./loading')
  //var user=auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      alert('func1,userid:'+String(uid));

    } else {
      alert('have not logined');
      
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
