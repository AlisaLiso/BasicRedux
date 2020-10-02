import createStore from "./createStore";
import reducer from "./reducer";

// Use of BasicRedux
const initialState = {name: 'Guest', displayMode: 'light'};
const store = createStore(reducer, initialState);

// Change name
store.dispatch({
  type: 'SET_USER_NAME',
  payload: 'Alex'
})

console.log(store.getState())

// Change mode
store.dispatch({
  type: 'SET_DISPLAY-MODE',
  payload: 'dark'
})

console.log(store.getState())