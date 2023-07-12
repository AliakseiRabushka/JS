const swap = (arr) => { 
  let first = arr[0];
  if (arr.length < 2) { 
    return arr;
  } else {
   arr[0] = arr[arr.length - 1];
   arr[arr.length - 1] = first;
  }
  return arr;
}

console.log(swap(['vasya','petya', 'sonya']));
// console.log(swap(['sonya']));