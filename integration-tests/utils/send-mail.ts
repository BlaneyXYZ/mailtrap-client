import * as nodemailer from "nodemailer";
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MT_USERNAME,
    pass: process.env.MT_PASSWORD,
  },
});

export const sendMail = async (mailOptions: IMailOptions) => {
  await new Promise<void>(resolve => transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    resolve();
  }));
};

interface IMailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  cc: string;
  bcc: string;
};
