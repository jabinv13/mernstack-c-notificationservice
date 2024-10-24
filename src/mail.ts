import nodemailer, { Transporter } from "nodemailer";
import { Message, NotificationTransport } from "./types/notification-types";
import config from "config";

export class MailTransport implements NotificationTransport {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.get("mail.host"),
      port: config.get("mail.port"),
      secure: false, // true for port 465, false for other ports
      auth: {
        user: config.get("mail.auth.user"),
        pass: config.get("mail.auth.pass"),
      },
    });
  }
  async send(message: Message) {
    //email send .
    // send mail with defined transport object
    const info = await this.transporter.sendMail({
      from: config.get("mail.from"), // sender address
      //todo:validate for valid email
      to: message.to, // list of receivers
      subject: message.subject, // Subject line
      text: message.text, // plain text body
      html: message.html, // html body
    });

    console.log("Message sent:", info.messageId);
  }
}
