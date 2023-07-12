    const isBracketStructureBalanced = (str) => {
    let brace = "(){}[]<>";
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = brace.indexOf(char);
        if (index >= 0) {
            if (index & 1) {
                if (!stack.length) {
                  return false;
                }
                let lastBrace = stack.pop();
                if (lastBrace != brace[index - 1]) {
                  return false;
                }
            } else { 
                stack.push(char);
            }
        }
    }
    return !stack.length;
}




// Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.
console.log(isBracketStructureBalanced('([)]'))  // false
// console.log(isBracketStructureBalanced('()'))  // true
// console.log(isBracketStructureBalanced('[()]'))  // true
// console.log(isBracketStructureBalanced('({}[])'))  // true
// console.log(isBracketStructureBalanced('{<>}}')) // false
// console.log(isBracketStructureBalanced('([)]')) // false

