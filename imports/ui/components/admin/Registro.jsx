import React from 'react';
import TextField from 'material-ui/TextField';

import NuevoRegistro from '/imports/ui/components/registro/NuevoRegistro';

export default class Registro extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    console.log(this.props.registro);
		return this.props.loading ? <p>loading</p> : <NuevoRegistro registro={this.props.registro} />;
	}
}
