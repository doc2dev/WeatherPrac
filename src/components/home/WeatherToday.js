import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import styles from '../../styles/home'
import WeatherNow from './WeatherNow'
import WeatherLater from './WeatherLater'

export default class WeatherToday extends Component {
  render() {
    const { scrollY } = this.props
    const windowHeight = 300
    const collapseStyle = [
      styles.weatherNow,
      {
        height: scrollY.interpolate({
            inputRange: [-windowHeight, 0, windowHeight],
            outputRange: [300, 250, 180]
        })
      }
    ]
    return (
      <Animated.View style={collapseStyle}>
        <WeatherNow {...this.props} />
        <WeatherLater {...this.props} />
      </Animated.View>
    )
  }
}
