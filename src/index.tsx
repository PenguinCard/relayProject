// react
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// bootstrap
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';

// bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RelayEnvironmentProvider } from "react-relay/hooks";

// component
import App from './App';

import RelayEnvironment from "./graphql/RelayEnvironment";

const root = createRoot(document.getElementById("app"))

root.render(
    <BrowserRouter>
        <RelayEnvironmentProvider environment={RelayEnvironment} >
            <Provider store={store}>
                <App />
            </Provider>
        </RelayEnvironmentProvider>
    </BrowserRouter>
)
