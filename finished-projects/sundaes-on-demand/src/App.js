import { useState } from "react";
import Container from "react-bootstrap/Container";

import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";

import {Provider} from "react-redux";
import ConfigureStore from './store/configureStore'
import composeReducers from "./store/rootReducer";

const store = ConfigureStore(composeReducers())

export default function App() {
  // orderPhase needs to be 'inProgress', 'review' or 'completed'
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }



  return (
      <Provider store={store} >
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
      </Provider>
  );
}
