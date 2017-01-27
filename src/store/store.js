import { createStore, combineReducers } from 'redux';
import {data} from './data.js';
// The User Reducer




const soireeReducer= function(state = data.currentSoiree, action) {

var todos  = JSON.parse(JSON.stringify(state.todos))

//var todos = soiree.todos;

  switch(action.type){
    case 'CHANGE_STATUS' :
    todos[action.index].status = action.status;
    //data.currentSoiree.todos[action.index] = action.status;
    return Object.assign({},state,{todos : todos});
    case 'ADD_TODO':

    var newtodo = {text:action.todo,status:" a faire",user:data.currentUser};
    todos.push(newtodo);
    data.currentSoiree.todos.push(newtodo)
    return {
        ...state,
        todos: state.todos.concat(newtodo)
    }
  }

  return state;
}

// The Widget Reducer
const mainReducer = function(state = data, action) {
  switch(action.type){
    case 'CHANGE_CURRENT_SOIREE' :
    return {
      ...state,
      currentSoiree : state.soirees[action.index]
    }
  }
  return state;
}

// Combine Reducers
const reducers = combineReducers({
  soireeState: soireeReducer,
  mainState : mainReducer
});

const store = createStore(reducers);

export default store;
