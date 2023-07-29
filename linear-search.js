const input = [2,3,4,5,8,9,10,12,15,17,18,19,20];
const searchVal = 10;

const linearSearch = (searchVal , input) =>{

    for(let i = 0; i < input.length ; i++ ){

        if(input[i] === searchVal){
           console.log(`${i} is the position of the element in the array`)
        }
    }
}

linearSearch( searchVal, input);