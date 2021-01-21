import {createStore} from 'redux'
import reducer from './reducer'

const storeExam = createStore(reducer);

export default storeExam