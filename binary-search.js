//binary search

const binarySearch = (inputArray, searchValue) => {
    let left = 0;
    let right = inputArray.length -1;
    while (left <= right ){
        const mid = Math.floor((left + right) / 2);
        if (inputArray[mid] === searchValue){
            return mid;
        }
        else if(inputArray[mid] < searchValue){
            left = mid + 1;       
        }
        else if(inputArray[mid] > searchValue){
            right = mid -1;
        }
    }
    return -1; // target not found in array
}

const sortedArray = [2,4,5,6,7,10,22,34,35,36,45,47,56,58,69,70,75,78,79,80];
const target = 45;
const resultIndex = binarySearch(sortedArray,target)

if(resultIndex !== -1){
    console.log(`The index of ${target} is ${resultIndex}`)

}
else{
    console.log(`The search value is not in the array`);
}

