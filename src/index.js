import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {EStoreProvider} from "./components/context";
import EStoreServices from "./services/e-store-services";
import BaseLayout from "./BaseLayout";

const eStoreServices = new EStoreServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <EStoreProvider value={eStoreServices}>
                <Router>
                    <BaseLayout>
                        <App />
                    </BaseLayout>
                </Router>
            </EStoreProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));
