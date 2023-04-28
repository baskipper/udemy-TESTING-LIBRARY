import {createSelector} from "reselect";
import {pricePerItem} from "../constants";

export const getCurrentOrder = state => state.CurrentOrder

export const getTotals = createSelector([getCurrentOrder], currentOrder => {
    function calculateTotal(optionType) {
        // get an array of counts for the option type (for example, [1, 2])
        const countsArray = Object.values(currentOrder[optionType]);

        // total the values in the array of counts for the number of items
        const totalCount = countsArray.reduce((total, value) => total + value, 0);

        // multiply the total number of items by the price for this item type
        return totalCount * pricePerItem[optionType];
    }

    return {
        scoops: calculateTotal("scoops"),
            toppings: calculateTotal("toppings"),
    };
})
