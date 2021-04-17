let myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];
let numMayorV = 0;

function numMayor(myArray,numMayorV) {
    for (var i = 0; i < myArray.length; i++) {
        if (numMayorV < myArray[i]) {
            numMayorV = myArray[i]
        }
    }
    return numMayorV
}
console.log(numMayor(myArray,numMayorV))