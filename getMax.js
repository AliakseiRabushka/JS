const getMax = (arr) => {
  if (arr.length === 0) {
      return null;
  }
  const [first, ...rest] = arr;
  let max = first;
  for (let i = 0; i < (rest).length; i++) {
    if (max < (rest)[i]) {
       max = (rest)[i];
    } else 
    (rest)[i]
  }
  return max;
}


// Для пустого массива возвращается null
// console.log(getMax([])) // null
console.log(getMax([1, 10, 8])) // 10


// Эта функция реализуется просто, и мы уже делали подобное ранее. Сейчас же мы учимся использовать rest-оператор. Используйте его вместе с деструктуризацией для извлечения первого элемента и всех остальных. Первый элемент становится начальным значением максимального, а остальные перебираются в цикле для определения максимального.