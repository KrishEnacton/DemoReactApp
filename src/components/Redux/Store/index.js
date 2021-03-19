import { createStore, applyMiddleware } from 'redux';
import { allWatcher } from '../Sagas'
import rootReducer from '../Reducers/RootReducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(allWatcher);

export default store