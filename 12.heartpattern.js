// // Upper part
// for (let i = 6 / 2; i < 6; i++) {
//     console.log(' '.repeat(6 - i) + '* '.repeat(i) +'  '.repeat(6 - i) + '* '.repeat(i));
// }

// // Lower part
// for (let i = 6; i > 0; i--) {
//     console.log('  '.repeat(6 - i) + '* '.repeat(i * 2));
// }

// for (let i = 6/2; i < 6; i++) {
//     console.log(`${' '.repeat(6-i)}${'* '.repeat(i)}${'  '.repeat(6-i)}${' *'.repeat(i)}`)
// }
// for (let i = 6; i > 0; i--) {
//     console.log(`${'  '.repeat(6-i)}${'* '.repeat(i*2)}`)
// }

// for (let i = 6 / 2; i < 6; i += 2) {
//     // print first spaces
//     for (let j = 1; j < 6 - i; j += 2) {
//         process.stdout.write(' ')
//     }
//     // print first stars
//     for (let j = 1; j < i + 1; j++) {
//         process.stdout.write('*')
//     }
//     // print second spaces
//     for (let j = 1; j < 6 - i + 1; j++) {
//         process.stdout.write(' ')
//     }
//     // // print second stars
//     for (let j = 1; j < i + 1; j++) {
//         process.stdout.write('*')
//     }
//     console.log();
// }

// // lower part
// // inverted pyramid
// for (let i = 6; i > 0; i--) {
//     for (let j = 0; j < 6 - i; j++) {
//         process.stdout.write(' ')
//     }
//     for (let j = 1; j < i * 2; j++) {
//         process.stdout.write('*')
//     }
//     console.log();
// }

// for (let i = 6 / 2; i < 6; i += 2) {
//     for (let j = 1; j < 6 - i; j += 2) {
//         process.stdout.write(' ')
//     }
//     for (let j = 1; j < i + 1; j++) {
//         process.stdout.write('*')
//     }
//     for (let j = 1; j < 6 - i + 1; j++) {
//         process.stdout.write(' ')
//     }
//     for (let j = 1; j < i + 1; j++) {
//         process.stdout.write('*')
//     }
//     console.log()
// }
// for (let i = 6; i > 0; i--) {
//     for (let j = 0; j < 6 - i; j++) {
//         process.stdout.write(' ');
//     }
//     for (let j = 1; j < i * 2; j++) {
//         process.stdout.write('*')
//     }
//     console.log()
// }
