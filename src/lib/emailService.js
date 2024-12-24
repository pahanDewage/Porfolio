// lib/emailService.js
import emailjs from "emailjs-com";

export const sendEmail = async (userEmail, subject, message) => {
  const templateParams = {
    user_email: userEmail,
    subject: subject,
    message: message,
  };

  try {
    const response = await emailjs.send(
      "service_i89750a", // Replace with your EmailJS service ID
      "template_zlqn9do", // Replace with your EmailJS template ID
      templateParams,
      "SwS9gcrIPPBJonSwr" // Replace with your EmailJS user ID
    );
    

    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email.");
  }
};
