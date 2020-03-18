const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if(typeof(activity) !== "string") return false;
  let activ = parseFloat(activity);
  if(!activ) return false;
  if(activ > 15 || activ <= 0) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / activ) * HALF_LIFE_PERIOD / 0.693);
};
