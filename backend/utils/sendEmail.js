const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
    };

    // Use HTML if provided, otherwise use text
    if (html) {
      mailOptions.html = html;
    } else {
      mailOptions.text = text;
    }

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to:", to);
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error; // Re-throw so we can handle it in the route
  }
};

module.exports = sendEmail;