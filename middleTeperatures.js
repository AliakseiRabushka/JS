const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5]
// 38.5

const middleTemp = (coll) => {
  let sum = coll[0];
  let middle = coll.length;
   if (coll.length === 0) {
      return null;
    }
  for (let i = 1; i < coll.length; i++) {
    sum += coll[i];
  }
  return sum / middle;
};


console.log(middleTemp(temperatures1))