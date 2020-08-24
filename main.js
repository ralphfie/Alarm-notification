const {sendMail} = require('./notification');

const prompt = require('prompt-sync')({sigint: true});
const value = prompt('What the Value today? ');
 if ( value  > 50 ) {
     console.log('Send alarm notification through email Success!');
     sendMail(`Alarm Notifier`, "Alarm Trigger by Value: "+ value);
     
 } else {
      console.log(`The ${value} is low`);
 }