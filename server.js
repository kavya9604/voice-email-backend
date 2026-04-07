const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ✅ Test route (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("Server is running");
});


// ✅ Email sending route
app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "navyakammampati9604@gmail.com",
        pass: "npod exqr rjdq vkim"          
      }"           
      }
    });

    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: to,
      subject: subject,
      text: message
    });

    res.send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});


// ✅ PORT for Render (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
      
