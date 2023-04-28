import React from "react";
import {connect} from "react-redux";
import SummaryForm from "./SummaryForm";
import { formatCurrency } from "../../utilities";
import {getTotals, getCurrentOrder} from "../../store/selectors";

function OrderSummary({ setOrderPhase, currentOrder, totals }) {
  // const { optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(currentOrder.scoops);
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  // only display toppings if the toppings total is nonzero
  const hasToppings = totals.toppings > 0;
  let toppingsDisplay = null;

  if (hasToppings) {
    const toppingsArray = Object.keys(currentOrder.toppings);
    const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);
    toppingsDisplay = (
      <>
        <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
        <ul>{toppingList}</ul>
      </>
    );
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}

export default connect(state => ({totals: getTotals(state), currentOrder: getCurrentOrder(state)}))(OrderSummary)
