import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default MainLayout = ({content}) => <div className="main-layout">
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {content}
  </MuiThemeProvider>
</div>
