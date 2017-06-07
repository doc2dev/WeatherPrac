import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/home'
import WeatherItemsContainer from './WeatherItemsContainer'

export default class WeatherLater extends Component {
  render() {
    const { data } = this.props
    return (
      <View  style={styles.weatherLater}>
        <WeatherItemsContainer weatherItems={data.todaysWeather}/>
      </View>
    )
  }
}
