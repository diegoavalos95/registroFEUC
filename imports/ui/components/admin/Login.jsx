import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correo: '',
      password: '',
      error: false
    }

    this.handleCorreoChange = this.handleCorreoChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.iniciarSesion = this.iniciarSesion.bind(this);
  }

  handleCorreoChange(e) {
    this.setState({correo: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  iniciarSesion() {
    Meteor.loginWithPassword(this.state.correo, this.state.password, (err) => {
      if (err) {
        this.setState({error: true}, () => {
          console.log('pedo');
        });
      }
      else {
        this.setState({error: false}, () => {
          FlowRouter.go('/admin');
        });
      }
    });
  }

	render() {
		return <div>
      <h1>Iniciar sesión</h1>
      <TextField
        floatingLabelText="Correo"
        value={this.state.correo}
        onChange={this.handleCorreoChange}
      /><br />
      <TextField
        floatingLabelText="Contraseña"
        type="password"
        value={this.state.password}
        onChange={this.handlePasswordChange}
      /><br />
      <RaisedButton label="Iniciar sesión" primary={true} onTouchTap={this.iniciarSesion} />
      {this.state.error ? 'Incorrecto los datos' : ''}
		</div>
	}
}
