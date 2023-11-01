import clientPromise from "@/db/mongo";
const createCollection = async ()=>{
    const client = await clientPromise;
    const db = client.db("algorinthtest");
    const collectionExists = await db.listCollections({ name: "Newsletter" }).hasNext();
    if(!collectionExists){
        await db.createCollection("Newsletter", )
    }
}
createCollection();
export default async function newsletter(req,res){
    try{

    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}