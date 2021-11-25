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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpWithEmail = (email, password) => {
       createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              setError('User Created')
            })
          .catch((error) => {
            setError('Account already exists, ');
            });
    };

    const signInWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

    return { user, signInWithEmail, signUpWithEmail, googleSignIn, logOut, isLoading, setIsLoading, error, setError, message, setMessage };
}

export default useFirebase;