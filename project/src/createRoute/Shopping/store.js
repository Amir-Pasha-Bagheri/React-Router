import reducer from './reducer'
import {createStore} from 'redux'

const storeShopping = createStore(reducer)

export default storeShopping