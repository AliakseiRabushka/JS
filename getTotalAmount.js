const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];

const getTotalAmount = (countMoney, kindOfMoney) => {
  let result = 0;
  for (let i = 0; i < countMoney.length; i++) {
    if (countMoney[i].substring(0, 3) === kindOfMoney) {
      result += Number(countMoney[i].substring(4, 7))
  }
    result
  }
  return result;
}








// console.log(Number(money1[0].substring(4, 7)))
console.log(getTotalAmount(money1, 'eur')) // 16