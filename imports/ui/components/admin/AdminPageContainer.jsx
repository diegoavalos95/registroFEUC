import { Meteor } from 'meteor/meteor';
import { Registro } from '/imports/api/registro.js';
import { createContainer } from 'meteor/react-meteor-data';
import AdminPage from './AdminPage';

export default ListPageContainer = createContainer(({ params }) => {
  const registrosHandle = Meteor.subscribe('registros');
  const loading = !registrosHandle.ready();
  const registros = Registro.find().fetch();
  return {
    loading,
    registros,
  };
}, AdminPage);
