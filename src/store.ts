import { createStore, combineReducers } from 'redux';
import loggedUserReducer from './reducers/loggedUserReducer';

export interface ReducerAction {
  type: string,
  [stateName: string]: any
}

const reducers = combineReducers({
  loggedUserState: loggedUserReducer
});

const store = createStore(reducers);

export default store;
