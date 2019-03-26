import { createStore, applyMiddleware } from 'redux';
import {loadState, saveState} from './localStorage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';

export default function configureStore() {
  const initialState = loadState();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  
  store.subscribe(throttle(()=> {
    saveState({
      todos: store.getState().todos,
    })
  }));

  return store;
}