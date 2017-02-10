export function vote(vote, nb) {

  return {
    type: 'VOTE',
    vote, nb
  };
}
export function switch_view(view) {
  return {
    type: 'SWITCH_VIEW_RESULT', 
    view
  };
}

