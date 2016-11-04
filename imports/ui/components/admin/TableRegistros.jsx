import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import TableRowRegistro from './TableRowRegistro';

export default class TableRegistros extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Sexo</TableHeaderColumn>
          <TableHeaderColumn>Edad</TableHeaderColumn>
          <TableHeaderColumn>Correo</TableHeaderColumn>
          <TableHeaderColumn>Acciones</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {this.props.registros.map((registro) => <TableRowRegistro registro={registro} key={registro._id} />)}
      </TableBody>
    </Table>
	}
}
