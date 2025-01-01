// 1. Check if a number is prime
let num = 29; // Example number
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Yes, it is prime" : "No, it is not prime");

// 2. Find the sum of all prime numbers up to n
let n = 10; // Example limit
let primeSum = 0;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primeSum += i;
}
console.log("Sum of primes up to " + n + ": " + primeSum);

// 3. Determine the number of trailing zeros in the factorial of a number
let number = 100; // Example number
let count = 0;
for (let i = 5; i <= number; i *= 5) {
  count += Math.floor(number / i);
}
console.log("Trailing zeros in " + number + "!: " + count);

// 4. Calculate the sum of digits of a number until it becomes a single digit
let digitSum = 987; // Example number
while (digitSum >= 10) {
  let tempSum = 0;
  while (digitSum > 0) {
    tempSum += digitSum % 10;
    digitSum = Math.floor(digitSum / 10);
  }
  digitSum = tempSum;
}
console.log("Single digit sum: " + digitSum);

// 5. Solve modular exponentiation efficiently (a^b % m)
let a = 5,
  b = 3,
  m = 13; // Example numbers
let modResult = 1;
while (b > 0) {
  if (b % 2 === 1) {
    modResult = (modResult * a) % m;
  }
  a = (a * a) % m;
  b = Math.floor(b / 2);
}
console.log("(5^3) % 13 = " + modResult);

// 6. Find all prime factors of a number
let numToFactor = 56; // Example number
let primeFactors = [];
for (let i = 2; i <= numToFactor; i++) {
  while (numToFactor % i === 0) {
    primeFactors.push(i);
    numToFactor /= i;
  }
}
console.log("Prime factors of 56: " + primeFactors.join(", "));

// 7. Check if a number is an Armstrong number
let numberToCheck = 153; // Example number
let sumOfPowers = 0;
let temp = numberToCheck;
let digits = numberToCheck.toString().length;
while (temp > 0) {
  let digit = temp % 10;
  sumOfPowers += Math.pow(digit, digits);
  temp = Math.floor(temp / 10);
}
console.log(
  numberToCheck +
    (sumOfPowers === numberToCheck ? " is" : " is not") +
    " an Armstrong number"
);

// 8. Print the first n perfect numbers
let limit = 5; // Example limit
let perfectNumbers = [];
let numToCheckPerfect = 1;
while (perfectNumbers.length < limit) {
  let sumDivisors = 0;
  for (let i = 1; i <= numToCheckPerfect / 2; i++) {
    if (numToCheckPerfect % i === 0) sumDivisors += i;
  }
  if (sumDivisors === numToCheckPerfect) {
    perfectNumbers.push(numToCheckPerfect);
  }
  numToCheckPerfect++;
}
console.log(
  "First " + limit + " perfect numbers: " + perfectNumbers.join(", ")
);

// 9. Determine if a number is a palindrome
let numToCheckPalindrome = 121; // Example number
let strNum = numToCheckPalindrome.toString();
let reversedNum = strNum.split("").reverse().join("");
console.log(
  numToCheckPalindrome +
    (strNum === reversedNum ? " is" : " is not") +
    " a palindrome"
);

// 10. Compute the nth Fibonacci number iteratively
let nFibonacci = 7; // Example n
let fib1 = 0,
  fib2 = 1,
  nthFibonacci = 0;
for (let i = 2; i <= nFibonacci; i++) {
  nthFibonacci = fib1 + fib2;
  fib1 = fib2;
  fib2 = nthFibonacci;
}
console.log("Fibonacci number at position " + nFibonacci + ": " + nthFibonacci);
