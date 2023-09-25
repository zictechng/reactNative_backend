const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'rugipoalumni.zictech-ng.com',
    port: 465,
    auth: {
      user: 'support@rugipoalumni.zictech-ng.com',
      pass: 'hA7ByOvHt}Qv'
    }
});

module.exports = transporter;