import { render } from "@testing-library/react";
import ConfigureStore from '../store/configureStore'
import composeReducers from "../store/rootReducer";
import {Provider} from "react-redux";

const setupStore = preloadedState => {
    return ConfigureStore(composeReducers(), [], preloadedState)
}

function renderWithProviders(
    ui,
    {
        preloadedState = { CurrentOrder: { scoops: {}, toppings: {} } },
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithProviders as render };
