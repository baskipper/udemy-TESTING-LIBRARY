import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default (rootReducer, appMiddleware = [], initialState = {}) => {
    // Middleware Configuration
    const middleware = [thunk, ...appMiddleware]

    let store

    // if (__DEV__) {
        // this will use a local dev tools server within React Native Debugger instead of the one at remotedev.io
        // follow instructions to get the debugger installed https://github.com/jhen0409/react-native-debugger
        const composeEnhancers = composeWithDevTools({name: 'unit-test-demo-app'})
        //
        // store = createStore(
        //     rootReducer,
        //     initialState,
        //     composeEnhancers(applyMiddleware(...middleware))
        // )
    // } else {
        store = createStore(
            rootReducer,
            initialState,
            composeEnhancers(applyMiddleware(...middleware))
            // compose(applyMiddleware(...middleware))
        )
    // }

    return store
}
