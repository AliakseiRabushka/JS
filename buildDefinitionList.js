const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
 
const buildDefinitionList = (definition) => {
  const parts = [];
  if (definition.length === 0) {
    return '';
  }
  for (let i = 0; i < definition.length; i++) {
    parts.push(`<dt>${definition[i][0]}</dt><dd>${definition[i][1]}</dd>`);
  }
  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};



// console.log(buildDefinitionList(definitions));
console.log(buildDefinitionList([]));
// '<dl>
      // <dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd>
      // <dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
