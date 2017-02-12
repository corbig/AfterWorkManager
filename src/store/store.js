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
var sondages = JSON.parse(JSON.stringify(state.sondage));
  switch(action.type){

// Gestion des soirées
    case 'ADD_SOIREE' :
    soirees.push(action.soiree);
    sondages.push(action.sondage)
    return {...state,soirees : soirees, sondage : sondages}

    case 'ADD_OPTION':
    var res = {id:sondages[state.currentIndex].options.length, text:action.option, checked: false};
    var res2 = {id:sondages[state.currentIndex].res.length, nb:0, users:[]};
    sondages[state.currentIndex].options.push(res)
    sondages[state.currentIndex].res.push(res2)
    return {...state,sondage : sondages}


    case 'MODIFY_SOIREE' :
    soirees[state.currentIndex].title = action.title;
    soirees[state.currentIndex].subtitle = action.subtitle;
    soirees[state.currentIndex].pic = action.pic;
    soirees[state.currentIndex].hour = action.hour;
    soirees[state.currentIndex].date = action.date;
    return {...state,soirees : soirees}

    case 'DELETE_SOIREE' :

    soirees.splice(action.index,1)
    return {...state,soirees : soirees,currentIndex : 0}

    case 'CHANGE_CURRENT_SOIREE' :
    return {...state,currentIndex : action.index}

// Gestion de la To-do List
    case 'CHANGE_STATUS' :
    soirees[state.currentIndex].todos[action.index].status = action.status;
    return {...state,soirees : soirees}

    case 'ADD_TODO':
    if(action.todo !== "") soirees[state.currentIndex].todos.push({text:action.todo,status:"a faire",userId:state.currentIdUser});
    return {...state,soirees : soirees}

// Gestion de la map
    case 'EDIT_LOCATION':
    soirees[state.currentIndex].cursor = action.cursor;
    return {...state,soirees : soirees}

// Gestion du chat
    case 'ADD_MESSAGE' :
    if(action.message !== ""){
    var newmessage = {idUser: state.currentIdUser, message: action.message};
    soirees[state.currentIndex].messages.push(newmessage);
    }
    return {...state,soirees : soirees}

    case 'CHANGE_CURRENT_ID_USER' :
    return {...state, currentIdUser: action.idUser}

    case 'VOTE':

    return {...state, res: action.res}

    case 'SWITCH_VIEW_RESULT':
    return {...state, current_view : action.view}
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
