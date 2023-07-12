const checkNum = (num) => {
  while(num >= 10) {
    num = sumNum(String(num));
  }
  return num;
}

const sumNum = (str) => {
  let result = 0;
  for(let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  return result;
}

console.log(checkNum(1259))