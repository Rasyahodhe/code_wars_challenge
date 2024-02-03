function positiveSum(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    // Cara 1
    // if (arr[i] < 0) {
    //   arr[i] = 0;
    // } else {
    //   total += arr[i];
    // }

    // cara 2
    arr[i] < 0 ? (arr[i] = 0) : (total += arr[i]);
  }

  //   cara 1
  //   if (total < 0) {
  //     return (total = 0);
  //   } else {
  //     return total;
  //   }
  // cara 2
  let hasil = total < 0 ? (total = 0) : total;
  return hasil;
}

export default positiveSum;
