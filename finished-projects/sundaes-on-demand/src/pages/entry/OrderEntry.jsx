import Button from "react-bootstrap/Button";
import Options from "./Options";
import {connect} from "react-redux";
import { formatCurrency } from "../../utilities";
import {getTotals} from "../../store/selectors";

function OrderEntry({ setOrderPhase, orderTotals }) {

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderTotals.scoops === 0;

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(orderTotals.scoops + orderTotals.toppings)}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  );
}

export default connect(state => ({orderTotals: getTotals(state)}))(OrderEntry)
