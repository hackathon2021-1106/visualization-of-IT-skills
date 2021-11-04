import { getAuth, signInWithRedirect, getRedirectResult, GithubAuthProvider  } from "firebase/auth";

function func1(){
  const provider = new GithubAuthProvider();

  provider.addScope('user');

  provider.setCustomParameters({
      'allow_signup': 'false'
    });

  const auth = getAuth();
  signInWithRedirect(auth, provider);
}

function func2(){
  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
        alert('Success!');
        return{token,user};
        
      }
      else{
        alert('error!');
      }

      // The signed-in user info.
      const user = result.user;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
      alert(errorCode,errorMessage)
      return{errorCode,errorMessage,email,credential}
    });
}

export default {func1,func2};