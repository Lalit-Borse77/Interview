// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "* "
//     }
//     console.log(str);
// }
// for (let i = 4; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "* "
//     }
//     console.log(str);
// }

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 4; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= i; k++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 4; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= i; k++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 4; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += i + " ";
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += k + " ";
  }
  console.log(str);
}

let n = 1;
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5 - i; j++) {
    str += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += n + " ";
    n++;
  }
  console.log(str);
}

let word = "java";
for (let i = 0; i <= word.length; i++) {
  console.log(word.substring(0, i));
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 5) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (j === 1 || j === 5 || i === 5 || i === 1) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
