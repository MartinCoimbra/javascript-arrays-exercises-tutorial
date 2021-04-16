function sumTheElements(theArray) {

    var total = 0;
    //your code here
    for (var i = 0; i <= theArray.length -1; i++) {
        total += theArray[i];
    }
    return total;
}
console.log(sumTheElements([2, 13, 34, 5]))