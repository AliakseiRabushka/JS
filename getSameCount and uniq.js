const uniq = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      result;
    } else
    result.push(arr[i]);
  }
  return result;
}

const getSameCount = (arr1, arr2) => {
  let result = 0;
  if (arr1.length === 0 || arr2.length === 0) {
    return 0;
    }
  let unArr1 = uniq(arr1);
  let unArr2 = uniq(arr2);
  
  for (let i = 0; i < unArr1.length; i++) {
    if (unArr2.includes(unArr1[i])) {
      result += 1;
    } 
    result;
  } 
  return result;
};



// console.log(uniq([1, 2, 2, 2, 3, 3, 4, 5, 6]))

// Общие уникальные элементы: 1, 3, 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])) // 3

// console.log(getSameCount([5, 3, 3], ['one', 'two']))//0
 
// Общие уникальные элементы: 4
// console.log(getSameCount([1, 4, 4], [4, 8, 4])) // 1

// Нет элементов
// console.log(getSameCount([], [])) // 0