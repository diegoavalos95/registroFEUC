import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import RegistroForm from './RegistroForm';

export default class NuevoRegistro extends React.Component {
  constructor(props) {
    super(props);
    const reg = this.props.registro;
    this.state = {
      open: false,
      folio: reg ? reg.folio : '',
      categoria: reg ? reg.categoria : '',
      usuario: reg ? reg.usuario : {
        nombres: '',
        apPaterno: '',
        apMaterno: '',
        telefono: '',
        correo: '',
        edad: '',
        sexo: 'h',
        enfermedad: ''
      },
      contactoEmergencia: reg ? reg.contactoEmergencia : {
        nombre: '',
        telefono: ''
      },
      categoria: reg ? reg.categoria : '10k',
      terminosAceptados: false
    }

    this.handleFolioChange = this.handleFolioChange.bind(this);
    this.handleNombreChange = this.handleNombreChange.bind(this);
    this.handleApPaternoChange = this.handleApPaternoChange.bind(this);
    this.handleApMaternoChange = this.handleApMaternoChange.bind(this);
    this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
    this.handleCorreoChange = this.handleCorreoChange.bind(this);
    this.handleContactoNombreChange = this.handleContactoNombreChange.bind(this);
    this.handleContactoTelefonoChange = this.handleContactoTelefonoChange.bind(this);
    this.handleCategoriaChange = this.handleCategoriaChange.bind(this);
    this.handleSexoChange = this.handleSexoChange.bind(this);
    this.handleTerminosChange = this.handleTerminosChange.bind(this);
    this.handleEdadChange = this.handleEdadChange.bind(this);
    this.registrarse = this.registrarse.bind(this);
    this.handleEnfermedadChange = this.handleEnfermedadChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
  }

  handleFolioChange(e) {
    this.setState({folio: e.target.value});
  }

  handleNombreChange(e) {
    const usuario = {
      ...this.state.usuario,
      nombres: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleApPaternoChange(e) {
    const usuario = {
      ...this.state.usuario,
      apPaterno: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleApMaternoChange(e) {
    const usuario = {
      ...this.state.usuario,
      apMaterno: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleEdadChange(e) {
    const usuario = {
      ...this.state.usuario,
      edad: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleTelefonoChange(e) {
    const usuario = {
      ...this.state.usuario,
      telefono: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleCorreoChange(e) {
    const usuario = {
      ...this.state.usuario,
      correo: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleContactoNombreChange(e) {
    const contactoEmergencia = {
      ...this.state.contactoEmergencia,
      nombre: e.target.value
    }
    this.setState({contactoEmergencia: contactoEmergencia});
  }

  handleContactoTelefonoChange(e) {
    const contactoEmergencia = {
      ...this.state.contactoEmergencia,
      telefono: e.target.value
    }
    this.setState({contactoEmergencia: contactoEmergencia});
  }

  handleCategoriaChange(e) {
    this.setState({categoria: e.target.value});
  }

  handleSexoChange(e) {
    const usuario = {
      ...this.state.usuario,
      sexo: e.target.value
    }
    this.setState({usuario: usuario});
  }

  handleTerminosChange(e) {
    this.setState({terminosAceptados: !this.state.terminosAceptados});
  }

  handleEnfermedadChange(e) {
    const usuario = {
      ...this.state.usuario,
      enfermedad: e.target.value
    }
    this.setState({usuario: usuario});
  }

  registrarse() {
    const registro = {
      terminosAceptados: this.state.terminosAceptados,
      folio: this.state.folio,
      categoria: this.state.categoria,
      usuario: {
        nombres: this.state.usuario.nombres,
        apPaterno: this.state.usuario.apPaterno,
        apMaterno: this.state.usuario.apMaterno,
        telefono: this.state.usuario.telefono,
        correo: this.state.usuario.correo,
        enfermedad: this.state.usuario.enfermedad,
        sexo: this.state.usuario.sexo,
        edad: this.state.usuario.edad
      },
      contactoEmergencia: {
        nombre: this.state.contactoEmergencia.nombre,
        telefono: this.state.contactoEmergencia.telefono
      }
    };

    if (this.props.registro && this.props.registro.usuario) {
      Meteor.call('registro.update', this.props.registro._id, registro);
    } else {
      if(!this.state.terminosAceptados) {
        this.setState({open : true});
      }
      else {
        Meteor.call('registro.insert', registro);
        FlowRouter.go('/registro/exitoso');
      }      
    }

    
  }

  render() {
    return <RegistroForm
      usuario={this.state.usuario}
      showTerminos={!this.props.registro}
      contactoEmergencia={this.state.contactoEmergencia}
      folio={this.state.folio}
      terminosAceptados={this.state.terminosAceptados}
      handleFolioChange={this.handleFolioChange}
      handleCategoriaChange={this.handleCategoriaChange}
      handleNombreChange={this.handleNombreChange}
      handleApPaternoChange={this.handleApPaternoChange}
      handleApMaternoChange={this.handleApMaternoChange}
      handleSexoChange={this.handleSexoChange}
      handleEdadChange={this.handleEdadChange}
      handleTelefonoChange={this.handleTelefonoChange}
      handleCorreoChange={this.handleCorreoChange}
      handleEnfermedadChange={this.handleEnfermedadChange}
      handleContactoNombreChange={this.handleContactoNombreChange}
      handleContactoTelefonoChange={this.handleContactoTelefonoChange}
      handleTerminosChange={this.handleTerminosChange}
      accion={this.registrarse}
      open={this.state.open}
      handleClose={this.handleClose}
      categoria={this.state.categoria} />; 
  }
}
