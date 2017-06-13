import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  Platform
} from 'react-native'
import styles from '../../styles/home'
import WeatherToday from './WeatherToday'
import WeatherFuture from './WeatherFuture'
import { kelvinToDegrees } from '../../util'

export default class Home extends Component {
  constructor(props) {
    super(props)
    let ht = new Animated.Value(0)

    this.state = {
      ...props,
      scrollY: new Animated.Value(0),
      heightY: ht
    }
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
    // Multiply array to test scrolling
    for (let i = 0; i < 2; i++) {
      middayWeatherArray = middayWeatherArray.concat(middayWeatherArray)
    }
    return middayWeatherArray.filter( item => !(!item))
  }

  render() {
    if (this.state.currentCity === 'None') {
      return (
        <Text>{'Loading weather data...'}</Text>
      )
    } else {
      const scrollHandler = Animated.event([
        { nativeEvent: { contentOffset: { y: this.state.scrollY }}}
      ])
      return (
        <View style={styles.container}>
          <WeatherToday
            data={this.extractWeatherSummary()}
            scrollY={this.state.scrollY} />
          <ScrollView
            ref={component => { this._scrollView = component; }}
            onScroll={scrollHandler}
            scrollEventThrottle={16}>
              <WeatherFuture data={this.extractMiddayWeather()} />
          </ScrollView>
        </View>
      )
    }
  }

  componentDidMount() {
    this.props.fetchWeatherData()
  }

  componentWillReceiveProps(nextProps) {
    this.setState( (prevState, props) => {
      return {
        ...prevState,
        fiveDayWeather: nextProps.fiveDayWeather,
        currentCity: nextProps.currentCity
      }
    })
  }
}
