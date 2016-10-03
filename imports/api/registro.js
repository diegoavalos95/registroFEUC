import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Registro = new Mongo.Collection('registro');

if (Meteor.isServer) {
  Meteor.publish('registros', () => Registro.find());
}

Meteor.methods({
  'registro.insert'(registro) {
    if (!registro.terminosAceptados) { throw new Meteor.Error('terminos-no-aceptados'); }

    Registro.insert({
      folio: registro.folio,
      fechaRegistro: new Date(),
      categoria: registro.categoria,
      usuario: {
        nombres: registro.usuario.nombres,
        apPaterno: registro.usuario.apPaterno,
        apMaterno: registro.usuario.apMaterno,
        telefono: registro.usuario.telefono,
        correo: registro.usuario.correo,
        enfermedad: registro.usuario.enfermedad ? registro.usuario.enfermedad : '',
        sexo: registro.usuario.sexo,
        edad: registro.usuario.edad
      },
      contactoEmergencia: {
        nombre: registro.contactoEmergencia.nombre,
        telefono: registro.contactoEmergencia.telefono
      }
    });
  }
});
