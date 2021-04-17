var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
var total= 0,
    resultFinal;

for (var index in myArray){
    total += myArray[index];
}
resultFinal = total / myArray.length;
console.log(resultFinal)
