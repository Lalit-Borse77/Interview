// // compute the factorial of a number
// let n = 5; // Example number
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(factorial); // Output: 120

// // for (let i = 1; i <= 10; i++) {
// //     let factorial = 1;
// //     for (let j = 1; j <= i; j++) {
// //         factorial *= j;
// //     }
// //     console.log(`Factorial of ${i} is ${factorial}`);
// // }

// console.log(factorial(5)); // Output: 120

// // generate the fibonacci sequence up to n
// let n = 10; // Example number
// let a = 0,
//   b = 1;
// console.log(a);
// console.log(b);
// for (let i = 2; i < n; i++) {
//   let next = a + b;
//   console.log(next);
//   a = b;
//   b = next;
// }

// // let a = 0;
// // let b = 1;
// // let result = [a, b];
// // for (let i = 1; i < 10; i++) {
// //     let c = a;
// //     a = b;
// //     b = c + b;
// //     result.push(b);
// // }
// // console.log(result)

// // solve the tower of Hanoi for n disks
// let n = 3;
// let fromRod = "A",
//   toRod = "C",
//   auxRod = "B";
// let stack = [];

// for (let i = 1; i <= n; i++) {
//   stack.push(i);
// }

// while (stack.length) {
//   let disk = stack.pop();
//   console.log(`Move disk ${disk} from rod ${fromRod} to rod ${toRod}`);
//   // Moving the disks will require more logic if simulating the tower
// }

// // print all subset of a given array
// let arr = [1, 2, 3];
// let subsets = [[]]; // start with empty subset

// for (let i = 0; i < arr.length; i++) {
//   let currentElement = arr[i];
//   let currentLength = subsets.length;
//   for (let j = 0; j < currentLength; j++) {
//     let subset = [...subsets[j], currentElement];
//     subsets.push(subset);
//   }
// }

// console.log(subsets);

// // find the nth term of a geometric progression using recursion
// let a = 2,
//   r = 3,
//   n = 4; // Example values
// let term = a;
// for (let i = 1; i < n; i++) {
//   term *= r;
// }
// console.log(term); // Output: 162

// // // solve the N-queens problem for chessboard of size n x N
// let n = 4;
// let board = Array.from({ length: n }, () => Array(n).fill("."));
// let solutions = [];

// let isSafe = (board, row, col) => {
//   for (let i = 0; i < row; i++) {
//     if (board[i][col] === "Q") return false;
//   }
//   for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//     if (board[i][j] === "Q") return false;
//   }
//   for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//     if (board[i][j] === "Q") return false;
//   }
//   return true;
// };

// for (let row = 0; row < n; row++) {
//   for (let col = 0; col < n; col++) {
//     if (isSafe(board, row, col)) {
//       board[row][col] = "Q";
//       console.log(board);
//       board[row][col] = ".";
//     }
//   }
// }

// // generate all valid combinations of n pairs of parentheses
// let n = 3;
// let result = [];
// let s = "",
//   left = 0,
//   right = 0;

// while (s.length < 2 * n) {
//   if (left < n) {
//     s += "(";
//     left++;
//   }
//   if (right < left) {
//     s += ")";
//     right++;
//   }
// }
// console.log(result);

// // perform binary search recursively

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let target = 5;
// let left = 0,
//   right = arr.length - 1;
// let found = -1;

// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === target) {
//     found = mid;
//     break;
//   }
//   if (arr[mid] > target) {
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }

// console.log(found); // Output: 4
