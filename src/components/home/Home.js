import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from '../../styles/home'
import WeatherToday from './WeatherToday'
import WeatherFuture from './WeatherFuture'
import { kelvinToDegrees } from '../../util'

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
      temperature: kelvinToDegrees(nowWeather.main.temp),
      todaysWeather
    }
  }

  extractMiddayWeather() {
    const dates = Object.keys(this.state.fiveDayWeather)
    var middayWeatherArray = []
    for (let i = 1; i < dates.length; i++) {
      let weatherArray = this.state.fiveDayWeather[dates[i]]
      middayWeatherArray.push(weatherArray[weatherArray.length / 2])
    }
    return middayWeatherArray
  }

  render() {
    if (this.state.currentCity === 'None') {
      return (
        <Text>{'Loading weather data...'}</Text>
      )
    } else {
      return (
        <View style={styles.container}>
          <WeatherToday data={this.extractWeatherSummary()}/>
          <WeatherFuture data={this.extractMiddayWeather()}/>
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
