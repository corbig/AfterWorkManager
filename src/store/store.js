import { createStore, combineReducers, applyMiddleware } from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import {data} from './data.js';


/** On utlise un unique reducer pour toute l'application.
Cela permet d'éviter des problèmes de synchronisation de state
entre les différentes vues **/

const mainReducer = function(state = data, action) {

  var soirees = JSON.parse(JSON.stringify(state.soirees));

  switch(action.type){

// Gestion des soirées
    case 'ADD_SOIREE' :
    soirees.push(action.soiree);
    return {...state,soirees : soirees}

    case 'MODIFY_SOIREE' :
    soirees[state.currentIndex].title = action.title;
    soirees[state.currentIndex].subtitle = action.subtitle;
    soirees[state.currentIndex].pic = action.pic;
    soirees[state.currentIndex].hour = action.hour;
    soirees[state.currentIndex].date = action.date;
    return {...state,soirees : soirees}

    case 'DELETE_SOIREE' :
    soirees.splice(action.index,1)
    return {...state,soirees : soirees}

    case 'CHANGE_CURRENT_SOIREE' :
    return {...state,currentIndex : action.index}

// Gestion de la To-do List
    case 'CHANGE_STATUS' :
    soirees[state.currentIndex].todos[action.index].status = action.status;
    return {...state,soirees : soirees}

    case 'ADD_TODO':
    soirees[state.currentIndex].todos.push({text:action.todo,status:"a faire",user:data.currentUser});
    return {...state,soirees : soirees}

// Gestion de la map
    case 'EDIT_LOCATION':
    soirees[state.currentIndex].cursor = action.cursor;
    return {...state,soirees : soirees}

// Gestion du chat
    case 'ADD_MESSAGE' :
    var newmessage = {idUser: state.currentIdUser, message: action.message};
    soirees[state.currentIndex].messages.push(newmessage);
    return {...state,soirees : soirees}

    case 'CHANGE_CURRENT_ID_USER' :
    return {...state, currentIdUser: action.idUser}

    case 'VOTE':
    return {...state, res: action.res}
  }
  return state;
}



// Combine Reducers
const reducers = combineReducers({
  mainState : mainReducer,
  routing: routerReducer,

});

const middleware = applyMiddleware(
  routerMiddleware(browserHistory)
);

const store = createStore(reducers,
  middleware);

export default store;
