const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
);

admin.initializeApp();

exports.sendContactMessage = functions.database
  .ref('/messages/{pushKey}')
  .onWrite(event => {
    const snapshot = event.data;
    const val = snapshot.val();

    const mailOptions = {
      to: 'carpinocaptures@gmail.com',
      subject: `Contact Submission from ${val.name}`,
      html: val.html,
      replyTo: val.email
    };

    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: carpinocaptures@gmail.com');
    });
  });
