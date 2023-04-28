import {combineReducers} from "redux";
import {currentOrder} from './reducer'

const composeReducers = () => {
    return combineReducers({
        CurrentOrder: currentOrder
    })
}

export default composeReducers
