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
    )
});

const db = admin.firestore()

// Add a new document in collection "cities"
async function setData() {
    await db.collection("production").doc("1").create({
        name: "power"
    })
}

async function getData() {
    // await db.collection('cities').doc("MA").get()
    const data = await db.collection('production').listDocuments()
    if (data[0]) {
        let result = await data[0].get().then(data => {
            console.log(data.createTime?.toDate().toLocaleString())
            console.log(data.updateTime?.toDate().toLocaleString())
            console.log(data.readTime?.toDate().toLocaleString())
            return data;
        })
        console.log(result.data())
    }
}

// async function deleteData(id: string) {
//     await db.collection('cities').doc(id).delete()
// }

async function updateData(id: string) {
    let findCity = await db.collection('production').doc(id).get()
    if (findCity.exists) {
        await db.collection("production").doc("1").update({
            name: "innova",
            sizes: [6, 7, 8, 9],
            is_active: true,
            per: {
                permissions: {
                    readonly: false,
                    hidden: true
                }
            },
            token:null
        })
    }
    else
        console.log(`not found ${id}`)
}
// setData()
updateData("1")
getData()


app.listen(PORT, () => console.log(`Server is running in ${ENV} mode at ${PORT}`))