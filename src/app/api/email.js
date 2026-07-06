  
const nodemailer = require("nodemailer");

// secrets are in the process env
const USER = process.env.USER;
const PASS = process.env.PASS;

export default (req, res) => {
    // Process a POST request
    if (req.method === 'POST') {
        sendEmail(req,res).catch(function(error){
            console.log("Error sending email:");
            console.log(error);
            res.status(500);
            res.send("Error sending email");
        });
      } else {
        // Handle any other HTTP method
        console.log("Invalid Request!");
        res.status(400);
        res.send("Invalid  Request :(");
      }
  }

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER,
      pass: PASS
    }
});

function createEmailBody(req){
    let emailBody = "";
    emailBody += "M E S S A G E R   I N F O";
    emailBody += "\nName: " + req.body.name;
    emailBody += "\nEmail Address: " + req.body.emailAddress;
    emailBody += "\nM E S S A G E";
    emailBody += "\n"+req.body.message;
    return emailBody;
}

function createEmailBodyHTML(req){
    let emailBody = "";
    emailBody += "<p>+-+ I N F O +-+</p>";
    emailBody += "<p>Name: " + req.body.name +"</p>";
    emailBody += "<p>Email Address: " + req.body.emailAddress+"</p>";
    emailBody += "<p>+-+ M E S S A G E +-+</p>";
    emailBody += "<p>"+req.body.message+"</p>";
    return emailBody;
}

function createEmailSubject(req){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return(`${req.body.name} - Message - ${date}`);
}

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(req,res) {
    const emailBody = createEmailBody(req);
    const emailBodyHTML = createEmailBodyHTML(req);
    const subject = createEmailSubject(req);
    console.log(emailBody);
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: req.body.emailAddress, // sender address
      to: USER, // list of receivers
      subject: subject, // Subject line
      text: emailBody, // plain text body
      html: emailBodyHTML, // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.statusCode = 200;
    res.send("Success!");
  }