import clientPromise from "@/db/mongo";

async function initDatabase(){
    try{
        const client = await clientPromise;
        const db = client.db("algorinthtest");
        const collectionExists = await db.listCollections({ name: "Contact" }).hasNext();
        if (!collectionExists){
            await db.createCollection("Contact", {
              validator: {
                $jsonSchema: {
                  bsonType: "object",
                  required: ["firstName", "lastName", "companyMail", "inquiry", "message", "link"],
                  properties: {
                    firstName: { bsonType: "string" },
                    lastName: { bsonType: "string" },
                    companyMail: {
                      bsonType: "string",
                      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                    },
                    //company: { bsonType: "string" },
                    inquiry: {
                      enum: ["Smart Contract Audit", "Smart Contract Testing", "Smart Contract Security", "Web3 Development","Web3 Consultation"]
                    },
                    message: { bsonType: "string" },
                    link: {
                      bsonType: "string",
                      pattern: "^https://github.com/.+$"
                    },
                    timestamp: { bsonType: "date" },
                    replied: {bsonType: "bool"}
                  }
                }
              }
            });
          }

    }catch(error){
        console.error(error)
    }
}
initDatabase();
export default async (req, res) => {
    try {
      const client = await clientPromise;
      const db = client.db("algorinthtest"); // Replace with your actual database name
      const { data } = req.body;
      data.timestamp = new Date()
      let result;
      result = await db.collection("Contact").insertOne(data);
      res.json({ message: "Data registered successfully", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }; 