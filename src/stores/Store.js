import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers/reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState = {name: []}) {
  return finalCreateStore(reducer, initialState)
}