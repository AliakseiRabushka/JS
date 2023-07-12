
const getSameParity = (coll) => {
  let result = [];
  if (coll.length === 0) {
    return result;
  } else if (coll[0] % 2 === 0) {
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] % 2 === 0) {
    result.push(coll[i]);
    }
    coll[i];
  }
  } else if (coll[0] % 2 !== 0) {
    for(let i = 0; i < coll.length; i += 1) {
      if (coll[i] % 2 !== 0) {
       result.push(coll[i]);
      }
      coll[i];
    }
  }
  return result;
};


console.log(getSameParity([1, 2, -3, 4, 5]))