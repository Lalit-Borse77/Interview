for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (j === 1 || j === 5 || i === 1 || i === 5) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
