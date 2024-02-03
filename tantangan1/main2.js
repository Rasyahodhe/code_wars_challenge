function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array <= 2) {
    return 0;
  } else {
    var sortir = array.sort((a, b) => {
      return a - b;
    });
    var number = 0;
    for (let i = 1; i < sortir.length - 1; i++) {
      number = number + sortir[i];
    }
    return number;
  }
}
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray([-3]));
