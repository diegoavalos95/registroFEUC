import { Meteor } from 'meteor/meteor';
import { Registro } from '/imports/api/registro.js';
import { createContainer } from 'meteor/react-meteor-data';
import  RegistroView from './Registro';

export default RegistroContainer = createContainer(({ params }) => {
  const { id } = params;
  const registrosHandle = Meteor.subscribe('registros');
  const loading = !registrosHandle.ready();
  const registro = Registro.findOne({_id: id});
  return {
    loading,
    registro,
  };
}, RegistroView);
