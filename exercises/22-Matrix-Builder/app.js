// Code goes here
function matrixBuilder(numLength) {
    let matrixArray = [];
    let matrixRow = [];
    for (let row = 0; row < numLength; row++) {

        for (let col = 0; col < numLength; col++) {
            let numAleatorio = Math.floor(Math.random() * (2 - 0) + 0);
            matrixRow.push(numAleatorio);
        }
        matrixArray.push(matrixRow);
        matrixRow = [];
    }
    return matrixArray;
}

// do not change anything from this line down
console.log(matrixBuilder(5))