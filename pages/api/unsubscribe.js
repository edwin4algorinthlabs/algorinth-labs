import clientPromise from "@/db/mongo";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport(
    {
      host: 'smtp.elasticemail.com', // SMTP server host
      port: 2525, // SMTP server port (usually 587 for TLS)
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'techwizardhyped@gmail.com', // Your SMTP username
        pass: process.env.NEXT_PUBLIC_EMAILELASTIC_KEY, // Your SMTP password or API key
      },
    }
  )
const client = await clientPromise;
const db = client.db("algorinthtest");
const collectionName = "Newsletter";

export default async function Unsubscribe(req,res){
    const mail = req.body.mail
    console.log(mail)
     const emailData = await db.collection("Newsletter").findOne({ mail: `${mail}` });
     console.log("test "+emailData)
   try{

       // Delete the entry from the collection
       if(emailData){
       await db.collection("Newsletter").deleteOne({ mail: mail});

       const info = await transporter.sendMail({
        from: 'techwizardhyped@gmail.com', // Sender's email address
        to: 'anajembaedwin@gmail.com', // Recipient's email address
        subject: 'Unsubscription notification', // Email subject
        // Specify the HTML content of the email
        html: `
          <html>
            <body>
              <h1>${mail} just unsubscribed.</h1>
              <h2>Refresh Mailing List!!</h2>
            </body>
          </html>
        `,
      });
  
      console.log('Email sent:', info.response);
       res.json({ message: "Unsubscribed sucessfully!!" });
    }else{
      res.json({message:"You're not subscribed"})
    }
   }catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
   }
}