const input = [2,3,4,5,8,9,10,12,15,17,18,19,20];
const searchVal = 10;

const linearSearch = (input, searchVal) => {
 
    for(let i = 0 ; i < input.length ; i++){
        if (input[i] === searchVal){
            return `The index of ${searchVal} is ${i}`;
        }
    }
    return `${searchVal} is not in the input array`

}

console.log(linearSearch(input,searchVal));