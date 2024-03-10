import { mongo_uri } from "@/lib/constants";
import { getSession } from "@auth0/nextjs-auth0";
import { MongoClient } from "mongodb";

export async function getListOfMedicine(session){
    const client = new MongoClient(mongo_uri)
    await client.connect()
    const medicationCollection = await client.db("medivault").collection("medication")
    const patient_id = session.user.email;
    const medication = await medicationCollection.find({
        patient_id:  session.user.email
    })
    return (await medication.toArray())
}

export default async function handler(req, res) {
    const session = await getSession(req, res)
    const client = new MongoClient(mongo_uri)
    await client.connect()
    const medicationCollection = await client.db("medivault").collection("medication")
    const patient_id = session.user.email;

    if(req.method === "POST"){
        const formData = JSON.parse(req.body);
        medicationCollection.insertOne({
            "patient_id": patient_id,
            "name": formData.name,
            "amount": formData.amount,
            "type": formData.type,
            "enddate": formData.enddate,
        })     
        res.status(200).json({ "ok": true });   
    }else{
        const medication = await medicationCollection.find({
			patient_id:  session.user.email
		})
        return res.status(200).json(await medication.toArray())
    }
}