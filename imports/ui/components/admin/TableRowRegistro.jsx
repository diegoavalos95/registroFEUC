import React from 'react';
import { Meteor } from 'meteor/meteor';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class TableRowRegistro extends React.Component {
	constructor(props) {
		super(props);

    this.remove = this.remove.bind(this);
  }

  remove() {
    Meteor.call('registro.remove', this.props.registro._id);
    console.log(this.props.registro);
  }

	render() {
    console.log(this.props.registro);
		return <TableRow>
        <TableRowColumn><a href={`/registro/${this.props.registro._id}`}>{this.props.registro.usuario.nombres}</a></TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.apPaterno}</TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.apMaterno}</TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.sexo}</TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.edad}</TableRowColumn>
        <TableRowColumn>{this.props.registro.usuario.correo}</TableRowColumn>
        <TableRowColumn><RaisedButton label="Borrar Registro" onTouchTap={this.remove} primary={true} /></TableRowColumn>
      </TableRow>;
    }
  }
