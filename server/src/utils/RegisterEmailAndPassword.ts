import { createUserWithEmailAndPassword } from "firebase/auth";
import { FireAuth } from "../config/firebase";


export const RegisterEmailAndPassword = async (email: string, password: string) => {
    createUserWithEmailAndPassword(FireAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}