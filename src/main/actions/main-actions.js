export function changeCurrentSoiree(index) {
  return {
    type:'CHANGE_CURRENT_SOIREE',
    index
  };
}

export function addSoiree(soiree) {
  return {
    type:'ADD_SOIREE',
    soiree
  };
}
