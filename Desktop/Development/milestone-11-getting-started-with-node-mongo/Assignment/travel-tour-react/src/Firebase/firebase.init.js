import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationAuthentication = () => {
    return initializeApp(firebaseConfig);
};

export default initializationAuthentication;