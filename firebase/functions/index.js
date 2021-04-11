const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', {structuredData: true});
//   response.send('Hello from Firebase!');
// });


exports.sendEmail = functions.https.onRequest((req, res) => {
  console.log('sendgrid key:', process.env.SENDGRID_API_KEY);

  // TODO: move hard code to config
  try {
    const requestBody = JSON.parse(req.body);
    if (requestBody.message) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: 'bishnu.das@outlook.in',
        from: 'bishnu.das@outlook.in',
        subject: 'BISDAS - New Message',
        text: requestBody.message,
      };

      sgMail
          .send(msg)
          .then(() => {
            console.log((new Date()).toISOString(), ': Email sent');
            res.status(200).send();
          })
          .catch((error) => {
            console.log((new Date()).toISOString(), 'Error :', error);
            res.status(400).send(`Failed sending email : ${error}`);
          });
    } else {
      console.log('Cannot send empty message');
      res.status(400).send('Cannot send empty message');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
