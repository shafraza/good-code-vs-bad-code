function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}



function findIndex(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}


//The bad code has a linear time complexity and would not scale well for large arrays. The good code uses a binary search algorithm, which has a logarithmic time complexity and scales much better for large arrays.

