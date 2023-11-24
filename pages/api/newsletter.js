import clientPromise from "@/db/mongo";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
const createCollection = async () => {
  const client = await clientPromise;
  const db = client.db("algorinthtest");
  const collectionName = "Newsletter";

  const collectionExists = await db
    .listCollections({ name: collectionName })
    .hasNext();

  if (!collectionExists) {
    await db.createCollection(collectionName);
    console.log(`Collection "${collectionName}" created.`);
  } else {
    console.log(`Collection "${collectionName}" already exists.`);
  }
};

const transporter = nodemailer.createTransport(  smtpTransport({
  service: 'gmail',
  auth: {
    user: 'algorinthlabs@gmail.com', // Your Gmail username
    pass: process.env.NEXT_PUBLIC_GMAIL_SMTP_PASS, // Your Gmail password
  },
}));

const isValidMail = (mail) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(mail);
};

export default async function newsletter(req, res) {
  const mail = req.body;
  console.log(mail.mail);

  const client = await clientPromise;
  const db = client.db("algorinthtest");

  try {
    if (isValidMail(mail.mail)) {
      // Check if the email already exists in the collection
      const existingEmail = await db
        .collection("Newsletter")
        .findOne({ mail: mail.mail });

      if (existingEmail) {
        res.json({ message: "Email already signed up for the newsletter" });
      } else {
        // Email doesn't exist, insert it into the collection
        const result = await db.collection("Newsletter").insertOne(mail);
        res.json({ message: "Thanks We'll be in touch", result });

        //send notification to registrant 
        const info = await transporter.sendMail({
            from: 'algorinthlabs@gmail.com', // Sender's email address
            to: mail.mail, // Recipient's email address
            subject: 'Thanks For signing up To AlgorinthLabs', // Email subject
            // Specify the HTML content of the email
            html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        padding: 20px;
                    }
                    h1 {
                        color: #007bff;
                    }
                    p {
                        margin-bottom: 10px;
                    }
                    .unsubscribe-button {
                        display: inline-block;
                        background-color: #dc3545;
                        color: #fff;
                        text-decoration: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to AlgorinthLabs!</h1>
                <p>Hi there!</p>
                <p>We're thrilled to have you as a part of the AlgorinthLabs community. Thank you for signing up for our newsletter.</p>
                <p>If you have any questions or need assistance, feel free to reach out to us. Here's to exciting updates and valuable insights!</p>
                <p>Best regards,<br> The AlgorinthLabs Team</p>
                <p style="font-size: 12px; color: #999;">If you wish to unsubscribe, click <a class="unsubscribe-button" href="http://localhost:3000/unsubscribe/${mail.mail}">here</a>.</p>
            </body>
        </html>
            `,
          });
      
          console.log('Email sent:', info.response);
      }
    } else {
      res.json({ message: "Please enter a valid email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
