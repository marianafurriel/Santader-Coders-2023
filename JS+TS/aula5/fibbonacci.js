const fib = (n) => {
  let array = [0, 1];
  let i = 2;
  while (i < n + 1) {
    array.push(array[i - 2] + array[i - 1]);
    i++;
  }
  return array[n];
};

console.log(fib(2));
