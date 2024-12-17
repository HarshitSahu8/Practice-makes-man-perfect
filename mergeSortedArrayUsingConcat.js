// Using concat() and slice() method
function mergeSortedArrayUsingConcat(array1, array2) {
  let sortedArray = [],
    Array1Index = 0,
    Array2Index = 0;
  while (Array1Index < array1.length && Array2Index < array2.length) {
    if (sortFunc(array1[Array1Index], array2[Array2Index]) > 0) {
      sortedArray.push(array2[Array2Index++]);
    } else {
      sortedArray.push(array1[Array1Index++]);
    }
  }
  if (Array2Index < array2.length) {
    sortedArray = sortedArray.concat(array2.slice(Array2Index));
  } else {
    sortedArray = sortedArray.concat(array1.slice(Array1Index));
  }
  return sortedArray;
}
function sortFunc(a, b) {
  return a - b;
}
console.log(mergeSortedArrayUsingConcat([1, 2, 3, 5, 9], [4, 6, 7, 8]));
