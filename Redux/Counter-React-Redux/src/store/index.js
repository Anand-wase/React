import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter: 0
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === 'INCREAMENT')
    return {counter: store.counter + 1}
  else if (action.type === 'DECREAMENT')
    return {counter: store.counter - 1}
  else if (action.type === 'ADD')
    return {counter: store.counter + action.payload.number}
  else if (action.type === 'SUB')
    return {counter: store.counter - action.payload.number}
  return store;
}
const counterStore = createStore(counterReducer);

export default counterStore;
