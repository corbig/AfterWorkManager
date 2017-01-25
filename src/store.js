import { createStore, combineReducers } from 'redux';

// The User Reducer
var initialState = {
  todos :[
    {text:"Lunette 3D",status:"fait"},
    {text:"Place cineday",status:" à faire"},
  ]
}

const soireeReducer= function(state = initialState, action) {

  switch(action.type){
    case 'CHANGE_STATUS' :
    var newtodos = state.todos.slice();
    newtodos[action.index].status = action.status;
    return Object.assign({},state,{todos : newtodos});
  }

  return state;
}

// The Widget Reducer
const widgetReducer = function(state = {}, action) {
  return state;
}

// Combine Reducers
const reducers = combineReducers({
  soireeState: soireeReducer
});

const store = createStore(reducers);

export default store;
