const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmailService = async (email) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ACCOUNT, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: '"LT Handmade" <lttd02024@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Send api email", // Subject line
    text: "Hello world?", // plain text body
    html: "<div><b>Hello world?</b><i>Send email from LT Handmade</i></div>",
    attachments: [
      {
        // utf-8 string as an attachment
        filename: "text1.txt",
        content: "hello world!",
      },
      {
        // binary buffer as an attachment
        filename: "text2.txt",
        content: new Buffer("hello world!", "utf-8"),
      },
      {
        path: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F870%2F1*5bI6CmFysmvhHYYTGIUSQg.png&tbnid=5unRNBAYnCq67M&vet=12ahUKEwiw8_av9qr-AhU6mFYBHTSnAdoQMygDegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fwww.codingninjas.com%2Fcodestudio%2Flibrary%2Fnodemailer-and-sending-emails&docid=IQbIHeiiTKVMHM&w=870&h=273&q=nodemailer&ved=2ahUKEwiw8_av9qr-AhU6mFYBHTSnAdoQMygDegUIARDBAQ",
      },
      {
        path: "https://strapengine.com/wp-content/uploads/2022/07/contact-form-with-nodemailer-in-nodejs.webp",
      },
    ], // html body
  });
  return info;
};
const sendResetPasswordEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      //   service: process.env.SERVICE,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASSWORD,
      },
      // tls: {
      //   ciphers: "SSLv3",
      // },
    });
    await transporter.sendMail({
      from: process.env.MAIL_ACCOUNT,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};
module.exports = { sendResetPasswordEmail, sendEmailService };
