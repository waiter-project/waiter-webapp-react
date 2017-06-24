import React, { Component } from 'react'
import { browserHistory } from 'react-router';

import { AppBar, Drawer, MenuItem, FontIcon } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { white } from 'material-ui/styles/colors';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navOpen: false
    };
  }

  ComponentWillMount() {
    this.setState({
      navOpen: false
    });
  }

  _toggle(e) {
    console.log(this.state.navOpen);
    e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  _navigate(path, history) {
    this.setState({
      navOpen: false
    });
    history.push(path)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Waiter coucou"
            onLeftIconButtonTouchTap={this._toggle.bind(this)}
          />
          <Drawer
            ref="LeftNav"
            docked={false}
            open={this.state.navOpen}
            onRequestChange={(open) => this.setState({ open })}
          >
            <AppBar
              title="Menu"
              iconElementRight={<FontIcon className="material-icons" color={white} style={{ marginRight: 24 }}>clear</FontIcon>}
            />
            <MenuItem onTouchTap={() => this._navigate('security', this.props.history).bind(this)}>Security</MenuItem>
            <MenuItem onTouchTap={() => this._navigate('map', this.props.history).bind(this)}>Map</MenuItem>
            <MenuItem onTouchTap={() => this._navigate('events', this.props.history).bind(this)}>Events</MenuItem>
            <MenuItem onTouchTap={() => this._navigate('account', this.props.history).bind(this)}>Account</MenuItem>
          </Drawer>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

// TODO close the nav bar + style

export default App