const UpStr = (str) => {
let result = "";
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
    result +=  str[i].toUpperCase(); 
    }
      else {
        result += str[i];
      }
  }
  return result;
}

console.log(UpStr('hello world!'))
