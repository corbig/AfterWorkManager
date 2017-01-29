export function modifySoiree(title,subtitle,pic) {
  return {
    type:'MODIFY_SOIREE',
    title,
    subtitle,
    pic
  };
}
