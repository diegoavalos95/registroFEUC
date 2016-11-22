import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '/public/css/main.css';

injectTapEventPlugin();

export default MainLayout = ({content}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="main-layout">
      <NavBar />
      {content}
    </div>
  </MuiThemeProvider>
);
