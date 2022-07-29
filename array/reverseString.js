//Not in place implementation 

function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'input error';
  }
  //const arrayToReverse = str.split('');
  //in js you can just treat str as an array with str[i]
  const resultArray = [];

  for (let i = str.length - 1; i >= 0; i--) {
    resultArray.push(str[i]);
  }

  return resultArray.join('');
}

const error = reverse(1);
const result = reverse('string');
console.log(error);
console.log(result);

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');
