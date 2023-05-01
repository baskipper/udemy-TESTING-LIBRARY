export const UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'
export const RESET_ORDER = 'RESET_ORDER'

export const INITIAL_ORDER_STATE = {scoops: {}, toppings: {}}
export function currentOrder(state={scoops: {}, toppings: {}}, action) {
    switch (action.type) {
        case UPDATE_ITEM_COUNT:
            return action.payload
        case RESET_ORDER:
            return {...INITIAL_ORDER_STATE}
        default:
            return state
    }
}
