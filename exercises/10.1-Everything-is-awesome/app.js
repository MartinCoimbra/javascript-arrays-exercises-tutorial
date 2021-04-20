let myArray = [1, 0, 0, 0, 1, 0, 0, 0, 1, 1];

const ZerosToYahoos = (arr) => {
    let return_array = [];

    arr.forEach((item, index) => {
        
        if (item == 1) {
            return_array[index] = arr[index]
        }else{
            return_array[index] = 'Yahoo'
        }

    });
    
    return return_array;
};

console.log(ZerosToYahoos(myArray));