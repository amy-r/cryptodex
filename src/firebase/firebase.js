import * as firebase from 'firebase';
 
export const config = {
  apiKey: "AIzaSyDxCiaMP6Dc5ApZ1LnmH18xwAr0XnOIBSU",
  authDomain: "cryptoex-be585.firebaseapp.com",
  databaseURL: "https://cryptoex-be585.firebaseio.com",
  projectId: "cryptoex-be585",
  storageBucket: "cryptoex-be585.appspot.com",
  messagingSenderId: "306416025442"
};



export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

