const getIntersectionOfSortedArrays = (arr1, arr2) => {
  let result = [];
  let indexArr1 = 0;
  let indexArr2 = 0;
  while (indexArr1 < arr1.length){
    if (arr1[indexArr1] === arr2[indexArr2]) {
       if (!result.includes(arr1[indexArr1])) {
         result.push(arr1[indexArr1])
       }
      indexArr1 += 1;
      indexArr2 += 1;
    } else if (arr1[indexArr1] > arr2[indexArr2]) {
      indexArr2 += 1;
    } else {
      indexArr1 += 1;
    }
  }
  return result;
}








// console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])) // [10, 24]
 
// console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])) // []
 
console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3])) // [1, 2]

// Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах. Если они совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются. Если значение в первом массиве больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.