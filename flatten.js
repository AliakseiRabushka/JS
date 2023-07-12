const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

// Для пустого массива возвращается []
// console.log(flatten([])); // []
// console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]
