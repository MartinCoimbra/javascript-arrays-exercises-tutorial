var arr = [45, 67, 87, 23, 5, 32, 60];
var newarr = []
//Your code here.
var j = 0;
for (var i = arr.length - 1; i >= 0; i--) {

    newarr[i] = arr[j]
    j++;
}
console.log(newarr)