import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import styles from '../../styles/home'
import { titleCase } from '../../util'

export default class WeatherNow extends Component {
  render() {
    const { data, scrollY } = this.props
    const windowHeight = 300
    const weatherTitleCase = titleCase(data.weather)
    const tempTextStyle = {
      opacity: scrollY.interpolate({
          inputRange: [-windowHeight, 0, windowHeight],
          outputRange: [1, 1, 0]
      })
    }
    const collapseStyle = [
      styles.weatherToday,
      {
        height: scrollY.interpolate({
            inputRange: [-windowHeight, 0, windowHeight / 1.2],
            outputRange: [180, 150, 80]
        })
      }
    ]
    return(
      <Animated.View style={collapseStyle}>
        <Text style={styles.weatherNowCity}>{data.place}</Text>
        <Text style={styles.weatherNowDesc}>{weatherTitleCase}</Text>
        <Animated.View style={tempTextStyle}>
          <Text style={styles.weatherNowTemp}>{data.temperature}</Text>
        </Animated.View>
      </Animated.View>
    )
  }
}
