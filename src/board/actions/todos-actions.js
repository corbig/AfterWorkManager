export function changeStatus(index,status) {
  return {
    type:'CHANGE_STATUS',
    index,
    status
  };
}

export function addTodo(todo) {
  
  return {
    type: 'ADD_TODO',
    todo
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}
