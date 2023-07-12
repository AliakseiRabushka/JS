const sentence = 'When you play the game of thrones, you win or you die';
// When you $#%! the game of thrones, you win or you $#%!
 
const makeCensored = (sentence, arrWords) => {
  const separator = ' ';
  const keyWord = '$#%!';
  const result = [];
  const words = sentence.split(separator);
  for (let i = 0; i < words.length; i++) {
    if (arrWords.includes(words[i])) {
      words[i] = keyWord;
    }
    result.push(words[i]);
  }
  return result.join(separator);
};






console.log(makeCensored(sentence, ['die', 'play']))