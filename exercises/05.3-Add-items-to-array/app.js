var arr = [4, 5, 734, 43, 45];

// Your code here, use the push function and the random function.
for (var i = 1; i <= 2; i++) {
    var numAleatorio = Math.floor(Math.random() * (1000 - 1)) + 1;
    arr.push(numAleatorio)
}
console.log(arr);