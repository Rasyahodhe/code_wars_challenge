import collinearity from "./Kolereanita.js";
import makeNegative from "./ReturnNegatif.js";
import positiveSum from "./Sumofpositive.js";
import evenOrOdd from "./TestEvenOdd.js";
import sumArray from "./SumArraywithoutminandmax.js";

// ===========================================COLILNEARITY
console.log("TEST COLINEARITY");
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

//========================================== RETURN NEGATIVE OR POSITIF
console.log(" TEST RETURN NEGATIVE OR POSITIF");
console.log(makeNegative(10));
console.log(makeNegative(-2));

// ========================================= POSITIF SUM
console.log("JUST POSITIF SUM");
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));

// ==========================================test even or odd
console.log("TEST EVEN OR ODD");
console.log(evenOrOdd(-7));
console.log(evenOrOdd(10));

// =========================================SUM ARRAY WITHOUT NUMBER MIN & MAX;
console.log("SUM ARRAY WITHOUT NUMBER MIN & MAX");
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray([-3]));
