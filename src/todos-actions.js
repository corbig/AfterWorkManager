export function changeStatus(index,status) {

  return {
    type:'CHANGE_STATUS',
    index,
    status
  };
}

export function deleteUserSuccess(userId) {
  return {
    type: types.DELETE_USER_SUCCESS,
    userId
  };
}

export function userProfileSuccess(userProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    userProfile
  };
}
