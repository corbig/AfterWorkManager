export function changeCurrentSoiree(index) {
  return {
    type:'CHANGE_CURRENT_SOIREE',
    index
  };
}

export function addSoiree(soiree, sondage) {
  return {
    type:'ADD_SOIREE',
    soiree, sondage
  };
}

export function deleteSoiree(index) {
  return {
    type:'DELETE_SOIREE',
    index
  };
}
