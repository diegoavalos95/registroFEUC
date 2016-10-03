import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import TableRegistros from './TableRegistros';

export default class AdminPage extends React.Component {
	constructor(props) {
		super(props);
	}

	cerrarSesion() {
		const router = FlowRouter;
		Meteor.logout(() => {
			router.go('/login');
		});
	}

	render() {
		return <div>
			<RaisedButton label="Cerrar Sesión" primary={true} onTouchTap={this.cerrarSesion} />
			{this.props.loading ? 'Loading' : ''}
			<TableRegistros registros={this.props.registros} />
		</div>
	}
}
