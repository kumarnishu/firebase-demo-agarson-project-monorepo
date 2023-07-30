import { db } from ".."


export async function setData() {
    await db.collection("production").doc("1").create({
        name: "power"
    })
}

export async function getProfile() {
    let snapshot = await db.collection('profiles').where('username', '==', 'nishu').limit(2).get()
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
}

export async function getData() {
    // await db.collection('cities').doc("MA").get()
    const data = await db.collection('production').listDocuments()
    let profile = await db.collection('profiles').doc("1").get()
    let production = (await data[0].get()).data()
    let created_by = profile.data()
    let updated_production = {
        ...production,
        created_by: created_by
    }
    console.log(updated_production)
}

export async function deleteData(id: string) {
    await db.collection('cities').doc(id).delete()
}

export async function updateData(id: string) {
    let findCity = await db.collection('production').doc(id).get()
    if (findCity.exists) {
        await db.collection("production").doc("1").update({
            name: "innova",
            sizes: [6, 7, 8, 9],
            is_active: true,
            created_by: "1"
        })
    }
    else
        console.log(`not found ${id}`)
}


