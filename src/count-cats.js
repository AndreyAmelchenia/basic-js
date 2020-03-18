module.exports = function countCats(arr) {
  let number = 0;
  arr.forEach(element => {
    element.forEach( elem => {
      if(elem === '^^'){
        number += 1;
      }
    })
  });
  return number;   
};




