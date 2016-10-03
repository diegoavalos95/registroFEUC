import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

export default class RegistroForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			folio: '',
			categoria: '10k',
			usuario: {
				nombres: '',
				apPaterno: '',
				apMaterno: '',
				telefono: '',
				correo: '',
				edad: '',
				sexo: '',
				enfermedad: ''
			},
			contactoEmergencia: {
				nombre: '',
				telefono: ''
			},
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
        enfermedad: this.state.usuario.enfermedad ? this.state.usuario.enfermedad : '',
        sexo: this.state.usuario.sexo,
        edad: this.state.usuario.edad
      },
      contactoEmergencia: {
        nombre: this.state.contactoEmergencia.nombre,
        telefono: this.state.contactoEmergencia.telefono
      }
		}
		Meteor.call('registro.insert', registro);

		FlowRouter.go('/registro/exitoso');
	}

	render() {
		return <div>
			<h1>Registro</h1>
			<TextField
	      floatingLabelText="Folio"
				value={this.state.folio}
				onChange={this.handleFolioChange}
	    />
		<h2>Categoria</h2>
		<RadioButtonGroup name="categoria" defaultSelected="10k" onChange={this.handleCategoriaChange}>
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
			value={this.state.usuario.nombres}
			onChange={this.handleNombreChange}
    />
		<TextField
			floatingLabelText="Apellido Paterno"
			value={this.state.usuario.apPaterno}
			onChange={this.handleApPaternoChange}
		/>
		<TextField
			floatingLabelText="Apellido Materno"
			value={this.state.usuario.apMaterno}
			onChange={this.handleApMaternoChange}
		/>
		<h2>Sexo</h2>
		<RadioButtonGroup name="sexo" defaultSelected="h" onChange={this.handleSexoChange}>
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
			value={this.state.usuario.edad}
			onChange={this.handleEdadChange}
		/>
		<TextField
			floatingLabelText="Teléfono"
			value={this.state.usuario.telefono}
			onChange={this.handleTelefonoChange}
		/>
		<TextField
			floatingLabelText="Correo"
			value={this.state.usuario.correo}
			onChange={this.handleCorreoChange}
		/>
		<TextField
			floatingLabelText="Enfermedad"
			value={this.state.usuario.enfermedad}
			onChange={this.handleEnfermedadChange}
		/>
		<br />
		<h2>Contacto de emergencia</h2>
		<TextField
			floatingLabelText="Nombre"
			value={this.state.contactoEmergencia.nombre}
			onChange={this.handleContactoNombreChange}
		/>
		<TextField
			floatingLabelText="Teléfono"
			value={this.state.contactoEmergencia.telefono}
			onChange={this.handleContactoTelefonoChange}
		/>
		<Checkbox
			checked={this.state.terminosAceptados}
			onCheck={this.handleTerminosChange}
			label="Se entiende y se acepta que la participación en este evento deportivo conlleva riesgo de lesiones.

				Voluntariamente y con el conocimiento de ello, reconozco, acepto y asumo, el riesgo. Al participar

				en esta carrera libero a la Federación de Egresados de la Universidad de Colima, patrocinadores y

				comité organizador de cualquier responsabilidad en el caso de que ocurriera algún percance y

				desisto de cualquier demanda o reclamación moral, monetaria y legal de cualquier índole por el

				mismo." />
			<RaisedButton label="Registrarse" onTouchTap={this.registrarse} primary={true} />
	</div>
	}
}
