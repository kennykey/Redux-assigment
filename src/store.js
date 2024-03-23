import { createStore, combineReducers} from 'redux'
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';


const rootReducer = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
})

const store = createStore(rootReducer)

export default store;
