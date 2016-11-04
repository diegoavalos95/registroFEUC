import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class RegistroForm extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      open: false
    }
	}

  handleClose() {
    this.setState({open: false});
  }

	render() {
		const actions = [
	      <FlatButton
	        label="Aceptar"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleClose}
	      />,
    	];

		return <div>
			<h1>Registro</h1>
			<TextField
	      floatingLabelText="Folio"
				value={this.props.folio}
				onChange={this.props.handleFolioChange}
	    />
		<h2>Categoria</h2>
		<RadioButtonGroup name="categoria" defaultSelected="10k" onChange={this.props.handleCategoriaChange}>
      <RadioButton
        value="10k"
        label="10 K"
      />
      <RadioButton
        value="5k"
        label="5 K"
      />
			<RadioButton
				value="3k"
				label="3 K"
			/>
		</RadioButtonGroup>
		<br />
		<h2>Informacion personal</h2>
		<TextField
      floatingLabelText="Nombre(s)"
			value={this.props.usuario.nombres}
			onChange={this.props.handleNombreChange}
    />
		<TextField
			floatingLabelText="Apellido Paterno"
			value={this.props.usuario.apPaterno}
			onChange={this.props.handleApPaternoChange}
		/>
		<TextField
			floatingLabelText="Apellido Materno"
			value={this.props.usuario.apMaterno}
			onChange={this.props.handleApMaternoChange}
		/>
		<h2>Sexo</h2>
		<RadioButtonGroup name="sexo" defaultSelected="h" onChange={this.props.handleSexoChange}>
			<RadioButton
				value="h"
				label="Hombre"
			/>
			<RadioButton
				value="m"
				label="Mujer"
			/>
		</RadioButtonGroup>
		<TextField
			floatingLabelText="Edad"
			value={this.props.usuario.edad}
			onChange={this.props.handleEdadChange}
		/>
		<TextField
			floatingLabelText="Teléfono"
			value={this.props.usuario.telefono}
			onChange={this.props.handleTelefonoChange}
		/>
		<TextField
			floatingLabelText="Correo"
			value={this.props.usuario.correo}
			onChange={this.props.handleCorreoChange}
		/>
		<TextField
			floatingLabelText="Enfermedad"
			value={this.props.usuario.enfermedad}
			onChange={this.props.handleEnfermedadChange}
		/>
		<br />
		<h2>Contacto de emergencia</h2>
		<TextField
			floatingLabelText="Nombre"
			value={this.props.contactoEmergencia.nombre}
			onChange={this.props.handleContactoNombreChange}
		/>
		<TextField
			floatingLabelText="Teléfono"
			value={this.props.contactoEmergencia.telefono}
			onChange={this.props.handleContactoTelefonoChange}
		/>
		<Checkbox
			checked={this.props.terminosAceptados}
			onCheck={this.props.handleTerminosChange}
			label="Se entiende y se acepta que la participación en este evento deportivo conlleva riesgo de lesiones.

				Voluntariamente y con el conocimiento de ello, reconozco, acepto y asumo, el riesgo. Al participar

				en esta carrera libero a la Federación de Egresados de la Universidad de Colima, patrocinadores y

				comité organizador de cualquier responsabilidad en el caso de que ocurriera algún percance y

				desisto de cualquier demanda o reclamación moral, monetaria y legal de cualquier índole por el

				mismo." />
			<RaisedButton label="Registrarse" onTouchTap={this.props.accion} primary={true} />
			<Dialog
          		title="Aviso"
          		modal={false}
          		actions={actions}
          		open={this.open}
          		onRequestClose={this.handleClose}
        		>
          			Debes aceptar los términos y condiciones para continuar.
        	</Dialog>
	</div>
	}
}
