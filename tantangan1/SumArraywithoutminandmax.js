export default function sumArray(array) {
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
