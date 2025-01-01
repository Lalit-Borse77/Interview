// reverse a string

// let str = "jay";
// let yes = str.split("").reverse().join("");
// console.log(yes);

// palindrome

// let str = "madam";
// let rev = str.split("").reverse().join("");

// if (str === rev) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

// find first non repeating character in string

// let str = "swiss";
// let charCount = {};

// // Count occurrences of each character
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (charCount[char]) {
//     charCount[char]++;
//   } else {
//     charCount[char] = 1;
//   }
// }

// // Find first non-repeating character
// for (let i = 0; i < str.length; i++) {
//   if (charCount[str[i]] === 1) {
//     console.log("First non-repeating character:", str[i]);
//     break;
//   }
// }

//  // //
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

// count the frequency of each character in string

// let str = "character";
// let charFrequency = {};

// // Count the frequency of each character
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (charFrequency[char]) {
//     charFrequency[char]++;
//   } else {
//     charFrequency[char] = 1;
//   }
// }

// // Output the frequency of each character
// for (let char in charFrequency) {
//   console.log(char + ": " + charFrequency[char]);
// }

// check if two string are anagrams

// let str1 = "listen";
// let str2 = "silent";

// if (str1.length !== str2.length) {
//   console.log("Not anagrams");
// } else {
//   let sortedStr1 = str1.split("").sort().join("");
//   let sortedStr2 = str2.split("").sort().join("");
//   if (sortedStr1 === sortedStr2) {
//     console.log("Anagrams");
//   } else {
//     console.log("Not anagrams");
//   }
// }

// implement a basic string compression algorithm

// let str = "aaabbbcccaaa";
// let compressedStr = "";
// let count = 1;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     compressedStr += str[i] + count;
//     count = 1;
//   }
// }

// console.log("Compressed string:", compressedStr);

// find the longest common prefix among a set of string

// let strs = ["flower", "flow", "flight"];
// if (strs.length === 0) {
//   console.log("No common prefix");
// } else {
//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === "") {
//         console.log("No common prefix");
//         break;
//       }
//     }
//   }
//   console.log("Longest common prefix:", prefix);
// }

// replace all spaces in a string with %20

// let str = "Mr John Smith";
// let replacedStr = str.replace(/ /g, "%20");
// console.log("Replaced string:", replacedStr);

// find the longest palindromic substring

// let str = "babad";
// let maxLength = 1;
// let longestPalindrome = str[0];

// // Check all possible substrings
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length; j++) {
//     let substring = str.slice(i, j + 1);
//     let revSubstring = substring.split("").reverse().join("");

//     if (substring === revSubstring && substring.length > maxLength) {
//       maxLength = substring.length;
//       longestPalindrome = substring;
//     }
//   }
// }

// console.log("Longest Palindromic Substring:", longestPalindrome);
