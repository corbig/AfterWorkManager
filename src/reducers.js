import { List, Map } from 'immutable';


const reducer = (todos=List([]),action) => {

 switch(action.type) {
    case 'ADD_TODO':
      return [...todos,Map(action)]
    default:
      return todos;
  }
}

export default reducer;
