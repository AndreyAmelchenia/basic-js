module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)){ 
    const arr1 = []
    arr.forEach(element => {
      if (typeof element === 'string'){
        let name = [];
        element.split('').forEach(elem =>{
          if(!(elem === ' ')){
            name.push(elem);
          }
        })
        element = name.join('').toUpperCase();
        arr1.push(element.charAt(0))
      } else {
        return false;
      }
    });
  arr1.sort();
  return arr1.join('')
  } else{
  return false;
  }
}
