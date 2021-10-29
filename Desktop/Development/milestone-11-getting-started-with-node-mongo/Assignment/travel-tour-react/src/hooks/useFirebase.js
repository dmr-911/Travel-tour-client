import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";


initializationAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
            })
            .catch((error) => {
            });
    };

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // const user = userCredential.user;
          })
            .catch((error) => {
          });
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
          } else {
            // User is signed out
            // ...
          }
        });
    },[])

    return { user, signInWithEmail, signUpWithEmail, googleSignIn, logOut };
}

export default useFirebase;