import React from 'react';
import TextField from 'material-ui/TextField';

export default class RegistroForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			folio: '',
			nombres: '',
			apPaterno: '',
			apMaterno: '',
			telefono: '',
			correo: '',
			contactoEmergencia: {
				nombre: '',
				telefono: ''
			},
		}
	}
	render() {
		return <div>
			<h1>Registro</h1>
			<TextField
	      floatingLabelText="Folio"
	    />
			<br />
			<h2>Informacion personal</h2>
			<TextField
	      floatingLabelText="Nombre(s)"
	    />
			<TextField
				floatingLabelText="Apellido Paterno"
			/>
			<TextField
				floatingLabelText="Apellido Materno"
			/>
			<TextField
				floatingLabelText="Teléfono"
			/>
			<TextField
				floatingLabelText="Correo"
			/>
			<br />
			<h2>Contacto de emergencia</h2>
			<TextField
				floatingLabelText="Nombre"
			/>
			<TextField
				floatingLabelText="Teléfono"
			/>
		</div>
	}
}
