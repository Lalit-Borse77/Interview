// 1.palindrome

// let str = "madam";
// let yes = str.split("").reverse().join("");
// console.log(`${str} = ${yes}`)
// if (str === yes) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }

// 2.fibonacci series

// let a = 0;
// let b = 1;
// let result = [a, b];
// for (let i = 1; i < 10; i++) {
//     let c = a;
//     a = b;
//     b = c + b;
//     result.push(b);
// }
// console.log(result)

// 3.prime numbers

// for (let i = 1; i <= 20; i++) {
//     let isPrime = true;
//     for (let j = 2; j * j <= i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i); // print prime number
//     }
// }

// 4.factorials

// for (let i = 1; i <= 10; i++) {
//     let factorial = 1;
//     for (let j = 1; j <= i; j++) {
//         factorial *= j;
//     }
//     console.log(`Factorial of ${i} is ${factorial}`);
// }

// 5.armstrong numbers

// let n = 1000;

// for (let i = 0; i <= n; i++) {
//     let sum = 0;
//     let num = i;
//     let length = String(num).length;

//     while (num > 0) {
//         sum += (num % 10) ** length;
//         num = Math.floor(num / 10);
//     }

//     if (sum === i) {
//         console.log(i); // print Armstrong number
//     }
// }

// 6.sum of the digits

// let n = 2205040201007;
// let sum = 0;

// while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }
// console.log(`Sum of digits is ${sum}`);

// 7.swap two numbers

// let a = 5; // first number
// let b = 10; // second number

// // swap the numbers
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a = ${a}, b = ${b}`);

// 8.alphabet triangle

// let charCode = 65; // ASCII code for 'A'
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(charCode));
//         charCode++;
//         if (charCode > 90) { // ASCII code for 'Z'
//             charCode = 65;
//         }
//     }
//     console.log();
// }

// 9.example program for arrays

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits[1]);
// fruits[2] = 'orange';
// console.log(fruits);

// fruits.push('grape');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 10. find the maximum element in array.

// let arr = [3, 1, 4, 2, 5];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);  // Output: 5

// 11.missing number in array.

// let arr = [1, 2, 3, 5, 6];
// let n = arr.length + 1;
// let totalSum = n * (n + 1) / 2;
// let actualSum = arr.reduce((a, b) => a + b, 0);
// let missingNumber = totalSum - actualSum;
// console.log(missingNumber);  // Output: 4

// 12.find intersection of two array.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [4, 5, 6, 7, 8, 9];
// let intersection = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//         intersection.push(arr1[i]);
//     }
// }
// console.log(intersection);

// 13.remove duplicates from array.

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// let uniqueArr = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
// });
// console.log(uniqueArr);

// 14.count the occurence of each element in an array.

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// let countObj = {};
// for (let element of arr) {
//     if (!countObj[element]) {
//         countObj[element] = 1;
//     } else {
//         countObj[element]++;
//     }
// }
// console.log(countObj);

// 15.find the second largest element in array.

// let arr = [12, 34, 54, 2, 3, 10, 8, 7, 6, 5];

// arr.sort((a, b) => b - a);
// let secondMax = arr[1];
// console.log(secondMax);

// 16.merge two sorted arrays.

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
// console.log(mergedArr);

// 17.check whether a characters is a vowel or consonant

// let char = 'l';

// if ('aeiouAEIOU'.includes(char)) {
//     console.log(char + ' is a vowel');
// } else if (char.match(/[a-zA-Z]/)) {
//     console.log(char + ' is a consonant');
// } else {
//     console.log(char + ' is not a letter');
// }

// 18.convert a number from decimal to binary.

// let decimal = 19;
// let binary = decimal.toString(2);
// console.log(binary);

// 19.find the missing number in a given integer array of 1 to 100.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// for (let i = 1; i <= 100; i++) {
//     if (!arr.includes(i)) {
//         console.log(i);
//     }
// }

// 20.print next 20 leap years.

// let year = new Date().getFullYear();
// let count = 0;

// while (count < 20) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(year);
//         count++;
//     }
//     year++;
// }

// var year = 2020;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

// 21.find prime numbers between 100 and 1000.

// let primes = [];
// for (let num = 100; num <= 1000; num++) {
//     let isPrime = true;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primes.push(num);
//     }
// }
// console.log(primes);

// 22.sort a given array to integer.

// let arr = [12, 10, 15, 11, 14, 13, 16];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// duplicate array remove

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = arr.filter((element, index) => arr.indexOf(element) === index);
// console.log(uniqueArr); // [1, 2, 3, 4, 5]

// number of vowels

// function count(str) {
//     let vowel = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowel++;
//         }
//     }
//     return vowel;
// }
// console.log(count("lallaa"));

// find first non repeting Character

// function findFirstNonRepeatingChar(str) {
//     let charCount = {};

//     // Step 1: Count the occurrences of each character
//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Step 2: Find the first non-repeating character
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }
//     // If all characters are repeating, return null
//     return null;
// }

// console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: "c"
// console.log(findFirstNonRepeatingChar("hello")); // Output: "h"
// console.log(findFirstNonRepeatingChar("aaa")); // Output: null

// palindrome

// let str = "madam";

// function isPalindrome(str) {
//     let rev = str.split("").reverse().join("");
//     if (rev == str) {
//         return true
//     }
//     return false
// }
// console.log(isPalindrome(str))

// remove duplicate

// let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// let uniqueArr = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
// });
// console.log(uniqueArr);

// reverse string

// let str = "hello";
// let vjr = str.split("").reverse().join("");
// console.log(vjr)

// vowel counter

// function count(str) {
//     let vowel = 0;
//     for (const char of str) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowel++;
//         }
//     }
//     return vowel;
// }
// console.log(count("lallaa"));

// find first non repeting Character

// function findFirstNonRepeatingChar(str) {
//     let charCount = {};

//     // Step 1: Count the occurrences of each character
//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Step 2: Find the first non-repeating character
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }
//     // If all characters are repeating, return null
//     return null;
// }

// console.log(findFirstNonRepeatingChar("aabbcdd")); // Output: "c"
// console.log(findFirstNonRepeatingChar("hello")); // Output: "h"
// console.log(findFirstNonRepeatingChar("aaa")); // Output: null

// 10. find the maximum element in array.

// let arr = [3, 1, 4, 2, 5];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);  // Output: 5
