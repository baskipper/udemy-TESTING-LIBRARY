import {UPDATE_ITEM_COUNT, RESET_ORDER} from "./reducer";
import {getCurrentOrder} from "./selectors";

export function ResetOrder() {
    return dispatch => dispatch({
        type: RESET_ORDER
    })
}

export function UpdateItemCount(itemName, newItemCount, optionType) {
    return (dispatch, getState) => {
        const payload = {...getCurrentOrder(getState())}
        payload[optionType][itemName] = newItemCount
        return dispatch({
        type: UPDATE_ITEM_COUNT,
        payload
    })}
}
