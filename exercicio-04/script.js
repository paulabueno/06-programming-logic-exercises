function isPrime(number) {
  for (n = 2; n < number / 2; n++) {
    if (number % n == 0) {
      return false;
    } else {
      //
    }
  }
  return true;
}

function printPrimeUntil(number) {
  for (i = 2; (i < number); i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimeUntil(100);