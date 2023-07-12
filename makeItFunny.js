let str = 'I never look back';
let count = str.length % 3;

const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if ((i + 1) % n === 0) {
    result = result + str[i].toUpperCase();
      i = i + 1;
    }
    result = result + str[i];
    i = i + 1;
  }
  return result;
}

console.log(makeItFunny(str, 3));
