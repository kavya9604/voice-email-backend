const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",   // ✅ IMPORTANT
      auth: {
        user: "navyakammampati9604@gmail.com",
        pass: "npod exqr rjdq vkim" // ✅ your app password
      }
    });

    await transporter.sendMail({
      from: "navyakammampati9604@gmail.com",
      to: email,
      subject: subject,
      text: message
    });

    res.send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});