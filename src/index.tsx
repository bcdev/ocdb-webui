import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from './reducers';

import './index.css';
import App from './containers/App';
import {State} from './types/state';

const store = createStore<State, any, any, any>(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
