import { auth } from './firebaseConfig';

const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

const signInUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

const signOutUser = () => {
    return auth.signOut();
  };

  const checkAuthState = (callback) => {
    return auth.onAuthStateChanged(callback);
  };

export { registerUser, signInUser, signOutUser, checkAuthState };
