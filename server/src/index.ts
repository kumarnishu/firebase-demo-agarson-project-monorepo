import express from "express";
const app = express()
import FireAdmin from "firebase-admin";
import dotenv from "dotenv";
import { getProfile } from "./utils/FIrestore";

dotenv.config()
const ENV = process.env.NODE_ENV || "development"
const PORT = Number(process.env.PORT) || 5000


export const admin = FireAdmin.initializeApp({
    credential: FireAdmin.credential.cert(
        {
            projectId: process.env.projectId,
            privateKey: process.env.privateKey,
            clientEmail: process.env.clientEmail,
        }
    )
});

export const db = admin.firestore()
export const auth = admin.auth()


getProfile()

app.listen(PORT, () => console.log(`Server is running in ${ENV} mode at ${PORT}`))
