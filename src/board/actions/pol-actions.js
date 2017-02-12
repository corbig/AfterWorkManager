export function vote(vote) {

  return {
    type: 'VOTE',
    vote
  };
}
export function switch_view(view) {
  return {
    type: 'SWITCH_VIEW_RESULT', 
    view
  };
}
export function addOptions(option) {
  return {
    type: 'ADD_OPTION',
    option
  };
}




