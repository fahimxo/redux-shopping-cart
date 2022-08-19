import {combineReducers} from 'redux'
import cartReducer from './reducer/cartReducer'
import productsReducer from './reducer/productsReducer'

export default combineReducers({
    productsState:productsReducer,
    cartState:cartReducer
})