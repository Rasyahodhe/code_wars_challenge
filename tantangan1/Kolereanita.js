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

export default collinearity;
console.log(collinearity(1, 5, 6, 7));
