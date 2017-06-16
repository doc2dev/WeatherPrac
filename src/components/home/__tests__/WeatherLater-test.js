import 'react-native';
import React from 'react';
import WeatherLater from '../WeatherLater';
import renderer from 'react-test-renderer';
import data from './data'
import sinon from 'sinon'

describe('Weather later', () => {

  const mock = {
    place: 'TestPlace',
    weather: 'snowing hard',
    temperature: '23',
    todaysWeather: data
  }
  const scrollY = {
    interpolate: sinon.stub().returns(42)
  }
  const tree = renderer
    .create(<WeatherLater data={mock} scrollY={scrollY}/>)
    .toJSON()

  describe('Weather later:', () => {

    it('should render correctly', () => {
      expect(tree).toMatchSnapshot()
    })

    it('should render a container for weather items', () => {
      console.log('Tree: ', tree)
      expect(tree.type).toBe('View')
    })
  })
})
