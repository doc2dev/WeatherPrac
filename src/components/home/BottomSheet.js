import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native'
import styles from '../../styles/home'


export default class BottomSheet extends Component {
  constructor(props) {
    super(props)
    const { height, width } = Dimensions.get('window')
    this.bottomHeight = parseInt(height * 0.87)
    this.targetTop = parseInt(height * 0.13)
    this.top = new Animated.Value(this.bottomHeight)
    this.animationIn = Animated.timing(this.top, {
      toValue: this.targetTop,
      duration: 500,
    })
    this.animationOut = Animated.timing(this.top, {
      toValue: this.bottomHeight,
      duration: 500,
    })
    this.isFullyVisible = false
  }

  handleClick() {
    if (!this.isFullyVisible) {
      this.animationIn.start()
    } else {
      this.animationOut.start()
    }
    this.isFullyVisible = !this.isFullyVisible
  }

  render() {
    const bottomStyle = {
      position: 'absolute',
      left: 0,
      top: this.top,
      width: '100%',
      height: this.bottomHeight,
      backgroundColor: 'red'
    }
    return(
      <Animated.View style={bottomStyle}>
        <TouchableOpacity
        onPress={this.handleClick.bind(this)}
        style={{flex: 1}} />
      </Animated.View>
    )
  }
}
