import express from "express";
import FireAdmin from "firebase-admin"
const app = express()
import dotenv from "dotenv";
dotenv.config()



const ENV = process.env.NODE_ENV || "development"
const PORT = Number(process.env.PORT) || 5000

const admin = FireAdmin.initializeApp({
    credential: FireAdmin.credential.cert(
        {
            projectId: process.env.projectId,
            privateKey: process.env.privateKey,
            clientEmail: process.env.clientEmail,
        }
    ),
    databaseURL: "https://nodejs-blog-d85d2-default-rtdb.asia-southeast1.firebasedatabase.app"
});

admin.database().getRules().then((data) => {
    console.log(data)
})

app.listen(PORT, () => console.log(`Server is running in ${ENV} mode at ${PORT}`))