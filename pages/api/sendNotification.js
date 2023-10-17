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

export default async (req, res) => {

   const {data} = req.body;
    console.log(data.firstName)
    try {
      const info = await transporter.sendMail({
        from: "techwizardhyped@gmail.com", // Sender's email address
        to: 'hollandroden419@gmail.com', // Recipient's email address
        subject: "New potential client", // Email subject
        text: `${data.firstName} ${data.lastName} could be a new potential client see how you can help them `, // Email body
      });
  
      console.log('Email sent:', info.response);
      res.json({ message: "Mail sent successfully", result });
    }   catch (error) {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
}
}