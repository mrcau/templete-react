import  firebase from 'firebase';


const login=(providerName) => {
  const authProvier = new firebase.auth[`${providerName}AuthProvider`]();
  return firebase.auth().signInWithPopup(authProvier);
}

export default login;