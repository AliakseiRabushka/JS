const names1 = ['john', 'smith', 'karl', 'alex']

const myReverse = (arr) => {
 let middle = arr.length / 2;
 for (let i = 0; i < middle; i += 1) {
    let preLast = arr[(arr.length - 1) - i]
    arr[(arr.length - 1) - i] = arr[i]
    arr[i] = preLast;
  }
  return arr;
};

console.log(myReverse(names1))

// Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний, второй и предпоследний и так далее до середины.
