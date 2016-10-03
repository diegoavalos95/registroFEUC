import React from 'react';
import TextField from 'material-ui/TextField';

export default class RegistroForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			folio: '',
			usuario: {
				nombres: '',
				apPaterno: '',
				apMaterno: '',
				telefono: '',
				correo: '',
			},
			contactoEmergencia: {
				nombre: '',
				telefono: ''
			},
		}

		this.handleFolioChange = this.handleFolioChange.bind(this);
		this.handleNombreChange = this.handleNombreChange.bind(this);
		this.handleApPaternoChange = this.handleApPaternoChange.bind(this);
		this.handleApMaternoChange = this.handleApMaternoChange.bind(this);
		this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
		this.handleCorreoChange = this.handleCorreoChange.bind(this);
		this.handleContactoNombreChange = this.handleContactoNombreChange.bind(this);
		this.handleContactoTelefonoChange = this.handleContactoTelefonoChange.bind(this);
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


	render() {
		return <div>
			<h1>Registro</h1>
			<TextField
	      floatingLabelText="Folio"
				value={this.state.folio}
				onChange={this.handleFolioChange}
	    />
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
			<TextField
				floatingLabelText="Teléfono"
				value={this.state.usuario.telefono}
				onChange={this.handleTelefonoChange}
			/>
			<TextField
				floatingLabelText="Correo"
				value={this.state.usuario.nombre}
				onChange={this.handleCorreoChange}
			/>
			<br />
			<h2>Contacto de emergencia</h2>
			<TextField
				floatingLabelText="Nombre"
				value={this.state.nombre}
				onChange={this.handleContactoNombreChange}
			/>
			<TextField
				floatingLabelText="Teléfono"
				value={this.state.nombre}
				onChange={this.handleContactoTelefonoChange}
			/>
		</div>
	}
}
