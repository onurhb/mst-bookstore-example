import React from 'react';
import ReactDOM from 'react-dom';
import inspect from 'mobx-devtools-mst';
import { Provider } from "mobx-react"
import { addMiddleware } from 'mobx-state-tree';


// CSS
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// Store
import Store from './models/Store';

import App from './components/App';

// Create store  with dependency injection
const fetcher = url => window.fetch(url).then(response => new Promise((resolve, reject) => {
    setTimeout(() => resolve(response.json()), 500)
}))

const store = Store.create(
    {},
    {
        fetch: fetcher
    }
)

// Middleware!
const requiresAuth = ['myCustomBackdoor'];
const queue = []
const disposer = addMiddleware(store, (action, next) => {
    console.log(action.name)
    next(action);
});

// Initialize store with books
store.books.loadBooks();

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>, document.getElementById('root'));

// Tools
inspect(store);

window.store = store; // Remove this line in production. 
