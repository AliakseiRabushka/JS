const text1 = 'yyab'; // y, a, b

const countUniqChars = (word) => {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (result.includes(word[i])) {
      result;
    } else
    result.push(word[i]);
  }
  return result.length;
}



console.log(countUniqChars(text1)) // 3
 
// const text2 = 'You know nothing Jon Snow';
// console.log(countUniqChars(text2)) // 13
 
// Если передана пустая строка, то функция должна вернуть `0`
// const text3 = '';
// console.log(countUniqChars(text3)); // 0
