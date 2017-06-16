import 'react-native';
import React from 'react';
import WeatherNow from '../WeatherNow';
import renderer from 'react-test-renderer';
import data from './data'
import sinon from 'sinon'

describe('Weather now: ', () => {

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
    .create(<WeatherNow data={mock} scrollY={scrollY}/>)
    .toJSON();

  it('renders correctly', () => {
    /*console.log('Test tree object: ', tree)*/
    /*console.log('Expect object: ', expect(tree))*/
    expect(tree).toMatchSnapshot();
  });

  it('should display place name', () => {
    const placeView =tree.children[0]
    expect(placeView.type).toBe('Text')
    expect(placeView.children[0]).toBe(mock.place)
  })

  it('should display weather description', () => {
    const weatherView = tree.children[1]
    expect(weatherView.type).toBe('Text')
    expect(weatherView.children[0]).toBe('Snowing Hard')
  })

  it('should display temperature text', () => {
    const tempText = tree.children[2].children[0]
    expect(tempText.type).toBe('Text')
    expect(tempText.children[0]).toBe(mock.temperature)
  })
})
