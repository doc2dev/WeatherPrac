import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'


const middleWare = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore)
// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = autoRehydrate()(createStoreWithMiddleware)(rootReducer)
persistStore(store, { storage: AsyncStorage }, null)

export default store
