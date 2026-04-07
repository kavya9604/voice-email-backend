const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Send email
app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
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
    console.log(error);
    res.status(500).send("Error sending email");
  }
});

// Port (Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
  console.log("updated");S
});
