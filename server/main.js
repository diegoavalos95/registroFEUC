import { Meteor } from 'meteor/meteor';
import '../imports/api/registro.js';

Meteor.startup(() => {
  // code to run on server at startup
  console.log('hola');
  //Accounts.createUser({email: 'admin@admin.com', password : 'admin1234'});
});
