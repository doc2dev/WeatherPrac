import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from '../../styles/home'
import WeatherToday from './WeatherToday'
import WeatherFuture from './WeatherFuture'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  extractWeatherSummary() {
    const dateToday = Object.keys(this.state.fiveDayWeather)[0]
    const todaysWeather = this.state.fiveDayWeather[dateToday]
    const nowWeather = todaysWeather[0]
    return {
      place: this.state.currentCity,
      weather: nowWeather.weather[0].description,
      temperature: parseInt(nowWeather.main.temp - 273),
      todaysWeather
    }
  }

  render() {
    if (this.state.currentCity === 'None') {
      return (
        <Text>{'Loading weather data...'}</Text>
      )
    } else {
      console.log('Weather data loaded')
      return (
        <View style={styles.container}>
          <WeatherToday data={this.extractWeatherSummary()}/>
          <WeatherFuture />
        </View>
      )
    }
  }

  componentDidMount() {
    this.props.fetchWeatherData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState( (prevState, props) => nextProps)
  }
}
