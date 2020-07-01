/**
 * Swaps two items in an array
 * @params {Array} arr
 * @params {Number} index1
 * @params {Number} index2
 * @return {Array}
 */
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

export {swap};