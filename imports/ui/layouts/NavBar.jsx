import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  openMenu() {
    this.setState({
      open: true
    });
  }

  closeMenu() {
    this.setState({
      open: false
    });
  }

  toRoot(){
    FlowRouter.go('/');
  }

  toRegistro(){
    FlowRouter.go('/registro');
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={{cursor: 'pointer'}}>FEUC</span>}
          style={{margin: '-8px'}}
          iconElementRight={<FlatButton onTouchTap={this.toRegistro.bind(this)} label="Registrarse" />}
          onLeftIconButtonTouchTap={this.openMenu.bind(this)}
          onTitleTouchTap={this.toRoot.bind(this)}
        />
        {this.props.content}
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.toRegistro.bind(this)}>Registrarse</MenuItem>
        </Drawer>
      </div>
    );
  }
}
