import clientPromise from "@/db/mongo";
const createCollection = async () => {
    const client = await clientPromise;
    const db = client.db("algorinthtest");
    const collectionName = "Newsletter";
    
    const collectionExists = await db.listCollections({ name: collectionName }).hasNext();

    if (!collectionExists) {
        await db.createCollection(collectionName);
        console.log(`Collection "${collectionName}" created.`);
    } else {
        console.log(`Collection "${collectionName}" already exists.`);
    }
}
//createCollection();
const isValidMail = (mail)=>{
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(mail)
}
export default async function newsletter(req,res){
    const mail = req.body
    console.log(mail)
    const client = await clientPromise;
    const db = client.db("algorinthtest");
    try{

        if(isValidMail(mail.mail)){
            let result;
            result = await db.collection("Newsletter").insertOne(mail);
            res.json({ message: "Thanks We'll be in touch", result });
        }else{
            res.json({message:"please enter valid email"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}