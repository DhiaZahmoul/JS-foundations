// String Manipulation Functions

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Array Functions

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  const seq = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) seq.push(0);
    else if (i === 1) seq.push(1);
    else seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}
