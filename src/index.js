import React from 'react';
import ReactDOM from 'react-dom';
import inspect from 'mobx-devtools-mst';
import { Provider } from "mobx-react"


// CSS
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// Store
import Store from './models/Store';

import App from './components/App';

// Create store  with dependency injection
const fetcher = url => window.fetch(url).then(response => new Promise((resolve, reject) => {
    setTimeout(() => resolve(response.json()), 1000)
}))
const store = Store.create(
    {},
    {
        fetch: fetcher
    }
)

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, document.getElementById('root'));

// Tools
inspect(store);

window.store = store; // Remove this line in production. 
