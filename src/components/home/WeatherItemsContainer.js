import React, { Component } from 'react'
import { FlatList } from 'react-native'
import styles from '../../styles/home'
import WeatherItem from './WeatherItem'

export default class WeatherItemsContainer extends Component {
  render() {
    const { weatherItems } = this.props
    var index = -1;
    return (
      <FlatList
        horizontal={true}
        data={weatherItems}
        style={styles.weatherItemContainer}
        keyExtractor={(item, index) => index}
        renderItem={ ({item}) => {
            index++
            item.index = index
            return (<WeatherItem item={item}  key={index}/>)
          }
        }
      />
    )
  }
}
