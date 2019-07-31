const sendgrid = require('sendgrid');
const { mail: helper } = sendgrid;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  
}
