import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import Home from './src/containers'
import store from './src/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WeatherPrac', () => App);
