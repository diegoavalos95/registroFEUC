import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Registro = new Mongo.Collection('registro');

if (Meteor.isServer) {
  // este es para tener acceso a todos los registros (ojo, solo los usuarios logeados pueden acceder)
  Meteor.publish('registros', () => Registro.find());
}

Meteor.methods({
  'registro.insert'(registro) {
    if (!registro.terminosAceptados) { throw new Meteor.Error('terminos-no-aceptados'); }

    Registro.insert({
      folio: registro.folio,
      fechaRegistro: new Date(),
      categoria: registro.categoria,
      usuario: registro.usuario,
      contactoEmergencia: registro.contactoEmergencia
    });
  },

  'registro.remove'(id) {
    Registro.remove({_id: id});
  },
  'registro.update'(id, registro) {
    console.log('update', registro);
    Registro.update({_id: id}, {
      folio: registro.folio,
      fechaRegistro: new Date(),
      categoria: registro.categoria,
      usuario: registro.usuario,
      contactoEmergencia: registro.contactoEmergencia
    });
  }
});
