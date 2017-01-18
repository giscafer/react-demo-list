/**
 * citypanel主入口
 */
import React from 'react'
import { Provider } from 'react-redux'
import App from '../../containers/citypanel/App'
import configureStore from '../../stores/configureStore'
const store = configureStore()
export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}