// // reverse an Array in place
// let arr = [1, 2, 3, 4, 5];
// let left = 0,
//   right = arr.length - 1;

// while (left < right) {
//   [arr[left], arr[right]] = [arr[right], arr[left]];
//   left++;
//   right--;
// }

// console.log("Reversed array:", arr);

// // find the maximum and minimum elements in an array
// let arr = [1, 2, 3, 4, 5];
// let max = Math.max(...arr);
// let min = Math.min(...arr);

// console.log("Maximum element:", max);
// console.log("Minimum element:", min);

// // rotate an array to the right by k steps
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;

// arr = arr.slice(-k).concat(arr.slice(0, -k));

// console.log("Rotated array:", arr);

// // find the second largest element in an array

// let arr = [12, 34, 54, 2, 3, 10, 8, 7, 6, 5];

// arr.sort((a, b) => b - a);
// let secondMax = arr[1];
// console.log(secondMax);

// merge two sorted arrays.

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
// console.log(mergedArr);

// // check if two arrays are rotations of each other
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 1, 2];

// let str1 = arr1.join("");
// let str2 = arr2.join("");

// if ((str1 + str1).includes(str2)) {
//   console.log("Arrays are rotations of each other");
// } else {
//   console.log("Arrays are not rotations of each other");
// }

// // find all pairs in an array whose sum equals a target
// let arr = [1, 2, 3, 4, 5];
// let target = 6;
// let pairs = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       pairs.push([arr[i], arr[j]]);
//     }
//   }
// }

// console.log("Pairs with sum", target, ":", pairs);

// // move all zeros in an array to the end
// let arr = [0, 1, 0, 3, 12];
// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     [arr[index], arr[i]] = [arr[i], arr[index]];
//     index++;
//   }
// }

// console.log("Array after moving zeros:", arr);

// // find the length of the longest subarray with a given sum
// let arr = [1, -1, 5, -2, 3];
// let target = 3;
// let sumMap = new Map();
// let sum = 0, maxLength = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum === target) {
//     maxLength = i + 1;
//   }
//   if (sumMap.has(sum - target)) {
//     maxLength = Math.max(maxLength, i - sumMap.get(sum - target));
//   }
//   if (!sumMap.has(sum)) {
//     sumMap.set(sum, i);
//   }
// }

// console.log("Length of longest subarray with sum", target, ":", maxLength);

// // determine if an array contains a subarray with a sum of zero
// let arr = [4, 2, -3, 1, 6];
// let sumSet = new Set();
// let sum = 0;
// let found = false;

// for (let num of arr) {
//   sum += num;
//   if (sum === 0 || sumSet.has(sum)) {
//     found = true;
//     break;
//   }
//   sumSet.add(sum);
// }

// console.log("Contains subarray with sum zero:", found);

// find the only non-repeated number in an array in an array where every other number repeats twice

// let arr = [4, 1, 2, 1, 2];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   result ^= arr[i]; // XOR each element with result
// }

// console.log("Non-repeated number:", result);
