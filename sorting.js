// Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
  
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
  
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
  }
  
  // Quick Sort
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter((el) => el < pivot);
    const middle = arr.filter((el) => el === pivot);
    const right = arr.filter((el) => el > pivot);
  
    return quickSort(left).concat(middle).concat(quickSort(right));
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  console.log("Bubble Sort:", bubbleSort(unsortedArray.slice()));
  console.log("Merge Sort:", mergeSort(unsortedArray.slice()));
  console.log("Quick Sort:", quickSort(unsortedArray.slice()));
  