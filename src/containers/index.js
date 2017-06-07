import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/home/Home'
import * as actionItems from '../actions'

function mapStateToProps(state) {
  const newProps = {
    fiveDayWeather: state.fiveDayWeather,
    currentCity: state.currentCity
  }
  return newProps
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionItems, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
