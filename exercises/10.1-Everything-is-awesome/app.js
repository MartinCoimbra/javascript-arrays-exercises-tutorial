let myArray = [1, 0, 0, 0, 1, 0, 0, 0, 1, 1];
let j = 0;
const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item, index) => {
        // magic goes inside these brackets
        if (arr[item] == 1) {
            return_array[j] = arr[item]
            j++;
        }else{
            return_array[j] = 'Yahoo'
            j++;
        }
    });
    
    return return_array;
};

console.log(ZerosToYahoos(myArray));