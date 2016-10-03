import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

export default class TableRowRegistro extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    console.log(this.props.registro);
		return <TableRow>
        <TableRowColumn>{this.props.registro.usuario.nombres}</TableRowColumn>
        <TableRowColumn>{this.props.registro.folio}</TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.apPaterno}</TableRowColumn>
      </TableRow>;
    }
  }
