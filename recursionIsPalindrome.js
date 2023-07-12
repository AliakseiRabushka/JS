 const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];
  if (firstSymbol !== lastSymbol) {
    return false;
  }
  return isPalindrome(string.substring(1, string.length - 1));
};

// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('a'));     // true
// console.log(isPalindrome('abs'));   // false
console.log(isPalindrome('abaoba'));   // false
// console.log(isPalindrome('aibohphobia'));   // true
