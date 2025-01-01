// square start pattern

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row += "* ";
  }
  console.log(row);
}

// inverted pyramid star pattern

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}

// pyramid star pattern

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    row += "* "; // Stars
  }
  console.log(row);
}

// diamond star pattern

// Upper half of the diamond
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    row += "* "; // Stars
  }
  console.log(row);
}

// Lower half of the diamond
for (let i = 5 - 1; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    row += "* "; // Stars
  }
  console.log(row);
}

// hollow square star pattern

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 5 - 1 || j === 0 || j === 5 - 1) {
      row += "* "; // Border stars
    } else {
      row += "  "; // Hollow space
    }
  }
  console.log(row);
}

// butterfly pattern

// Upper half of the butterfly
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* "; // Left side stars
  }
  for (let j = 1; j <= 2 * (5 - i); j++) {
    row += "  "; // Spaces in the middle
  }
  for (let j = 1; j <= i; j++) {
    row += "* "; // Right side stars
  }
  console.log(row);
}

// Lower half of the butterfly
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* "; // Left side stars
  }
  for (let j = 1; j <= 2 * (5 - i); j++) {
    row += "  "; // Spaces in the middle
  }
  for (let j = 1; j <= i; j++) {
    row += "* "; // Right side stars
  }
  console.log(row);
}

// downward triangle star pattern

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* "; // Stars
  }
  console.log(row);
}

// hollow diamond star pattern

// Upper half of the diamond
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    if (j === 0 || j === 2 * i - 2) {
      row += "* "; // Border stars
    } else {
      row += "  "; // Hollow space
    }
  }
  console.log(row);
}

// Lower half of the diamond
for (let i = 5 - 1; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    if (j === 0 || j === 2 * i - 2) {
      row += "* "; // Border stars
    } else {
      row += "  "; // Hollow space
    }
  }
  console.log(row);
}

// cross star pattern

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    if (i === j || i + j === 5 - 1) {
      row += "* "; // Stars on the diagonals
    } else {
      row += "  "; // Empty spaces
    }
  }
  console.log(row);
}

// hollow pyramid star pattern

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "  "; // Spaces
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    if (j === 0 || j === 2 * i - 2 || i === 5) {
      row += "* "; // Border stars or bottom row full stars
    } else {
      row += "  "; // Hollow space
    }
  }
  console.log(row);
}
