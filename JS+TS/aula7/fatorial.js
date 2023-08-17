const fatorialR = (n) => {
  if (n <= 1) return 1;
  return n * fatorialR(n - 1);
};

const fatorialI = (n) => {
  if (n <= 1) return 1;
  let fatorial = 1;
  for (let i = n; i > 1; i--) {
    fatorial *= i;
  }
  return fatorial;
};

console.log(fatorialR(5));
console.log(fatorialI(7));
