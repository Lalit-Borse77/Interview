// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <=5 - i; j++) {
//         str += "  ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// for (let i = 4; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <=5 - i; j++) {
//         str += "  ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log('  '.repeat(5 - i) + '* '.repeat(2 * i - 1));
// }

for (let i = 1; i <= 5; i++) {
  console.log("  ".repeat(5 - i) + "* ".repeat(2 * i - 1));
}
