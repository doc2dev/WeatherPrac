import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    console.log('Current city: ', this.state.currentCity)
    return (
      <Text>{`Current City: ${this.state.currentCity}`}</Text>
    )
  }

  componentDidMount() {
    this.props.fetchWeatherData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState( (prevState, props) => nextProps)
  }
}
