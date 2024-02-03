function collinearity(x1, y1, x2, y2) {
  // ==================================First Way
  // var hasil1 = x1 * y2 - x2 * y1;
  // var hasil2 = x2 * y1 - x1 * y2;
  // var nilai = hasil1 - hasil2;
  // if (nilai < 0 || nilai > 1) {
  //   return false;
  // } else {
  //   return true;
  // }

  //   =====================================Second way
  //   var hasil = x1 * y2 - x2 * y1 - (x2 * y1 - x1 * y2);
  //   var penentuan = hasil < 0 || hasil > 1 ? false : true;
  //   return penentuan;

  // =======================================third way
  return x1 * y2 === y1 * x2;
}

console.log(collinearity(1, 1, 1, 1)); //True
console.log(collinearity(1, 2, 2, 4)); //True
console.log(collinearity(1, 1, 6, 1)); //False
console.log(collinearity(1, 2, -1, -2)); //  True
console.log(collinearity(1, 2, 1, -2)); // False
console.log(collinearity(4, 0, 11, 0)); // True
console.log(collinearity(0, 1, 6, 0)); //False
console.log(collinearity(4, 4, 0, 4)); //False
console.log(collinearity(0, 0, 0, 0)); //True
console.log(collinearity(0, 0, 1, 0)); //True
console.log(collinearity(5, 7, 0, 0)); //true
