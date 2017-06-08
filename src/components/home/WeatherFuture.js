import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import styles from '../../styles/home'
import WeatherFutureItem from './WeatherFutureItem'

export default class WeatherFuture extends Component {
  render() {
    return (
      <View style={styles.weatherFuture}>
        <FlatList
          style={styles.weatherFutureItemContainer}
          data={this.props.data}
          keyExtractor={(item, index) => index}
          renderItem={
            ({item}) => <WeatherFutureItem item={item} />
          }
        />
      </View>
    )
  }
}
