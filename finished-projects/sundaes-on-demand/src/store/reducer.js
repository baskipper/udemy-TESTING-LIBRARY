export const UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'
export const RESET_ORDER = 'RESET_ORDER'

const INITIAL_STATE = {scoops: {}, toppings: {}}
export function currentOrder(state=INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_ITEM_COUNT:
            return action.payload
        case RESET_ORDER:
            return INITIAL_STATE
        default:
            return state
    }
}
