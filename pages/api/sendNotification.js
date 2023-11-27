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

// export default async function sendNotification (req, res) {
export default async function sendNotification (req, res) {
  
   const {data} = req.body;
    console.log(data.projectlink)
    try {
      const info = await transporter.sendMail({
        from: 'techwizardhyped@gmail.com', // Sender's email address
        to: 'admin@algorinthlabs.com', // Recipient's email address
        subject: 'New potential client', // Email subject
        // Specify the HTML content of the email
        html: `
          <html>
            <body>
              <h1>We have  a new potential client.</h1>
              <h2>${data.firstName} ${data.lastName} </h2>
              <h3>email : <a href="${data.companyMail}">${data.companyMail}</a></p>
              <p>code base : <a href="${data.projectlink}">here</a></p>
            </body>
          </html>
        `,
      });
  
      console.log('Email sent:', info.response);
      res.json({ message: "Mail sent successfully"});
    }   catch (error) {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
}
}

