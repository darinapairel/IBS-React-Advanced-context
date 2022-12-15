import createSagaMiddleWare from 'redux-saga'
import { rootEpic, fetchBooksEpic, fetchDataEpic } from './epics/rootEpic';
// import { rootSaga } from './sagas/rootSaga';
import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

// const sagaMiddleWare = createSagaMiddleWare()
const epicMiddleware = createEpicMiddleware()

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(epicMiddleware)))

epicMiddleware.run(rootEpic) //rootSaga or fetchDataEpic