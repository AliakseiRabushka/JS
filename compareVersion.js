const compareVersion = (firstV, secondV) => {
  if (firstV === secondV) {
    return 0;
  } 
  const firstMajor = Number(firstV.split('.')[0]);
  const secondMajor = Number(secondV.split('.')[0]);
  if (firstMajor > secondMajor) {
    return 1;
  }
  const firstMinor = Number(firstV.split('')[firstV.length - 1]);
  const secondMinor = Number(secondV.split('')[secondV.length - 1]);
  if (firstMajor === secondMajor && firstMinor > secondMinor) {
    return 1;
  } else
    return -1;
} 


// console.log(compareVersion('0.2', '0.12')); // -1
console.log(compareVersion("0.1", "0.2")); // -1
// console.log(compareVersion('10.2', '2.12')); // 1
// console.log(compareVersion('0.2', '0.1')); // 1
// console.log(compareVersion("4.2", "4.2")); // 0
