import { signInWithEmailAndPassword } from "firebase/auth";
import { FireAuth } from "../config/firebase";


export const VerifyEmailAndPassword = async (email: string, password: string) => {
    signInWithEmailAndPassword(FireAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
