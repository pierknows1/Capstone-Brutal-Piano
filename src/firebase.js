import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_WRd_qPT2ojq1ahsD1QsFSBzf8b-r_aU",
  authDomain: "brutal-piano.firebaseapp.com",
  projectId: "brutal-piano",
  storageBucket: "brutal-piano.appspot.com",
  messagingSenderId: "498401741430",
  appId: "1:498401741430:web:df0a9ca9583b5af1746d57",
  measurementId: "G-9FGJ2J8BR7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};