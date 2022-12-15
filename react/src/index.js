import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store'
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { reducer } from './reducers/reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'
import "bootstrap/dist/css/bootstrap.min.css"
import {injectStoreToServer} from "./actions/server";
// import createSagaMiddleWare from 'redux-saga'
// import { rootEpic, fetchBooksEpic, fetchDataEpic } from './epics/rootEpic';
// import { rootSaga } from './sagas/rootSaga';
// import { createEpicMiddleware } from 'redux-observable'

// const sagaMiddleWare = createSagaMiddleWare()
// const epicMiddleware = createEpicMiddleware()

// export const store = createStore(reducer,
    // composeWithDevTools(applyMiddleware(epicMiddleware)))

// epicMiddleware.run(rootEpic) //rootSaga or fetchDataEpic
injectStoreToServer(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);