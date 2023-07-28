import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FireAuth } from "../config/firebase";


export const SignOut = async (email: string, password: string) => {
    await signOut(FireAuth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
