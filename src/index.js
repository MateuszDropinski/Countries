import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

injectGlobal`
    *
    {
        box-sizing:border-box;
    }
    html
    {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size:100%;
    }
    body
    {
        margin:0px;
    }
    td
    {
        text-align:center;
    }
`

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
