let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
function mergeTwoList(listArr) {
    var even = [],
        odd = [],
        j = 0,
        x = 0;

    for (var i = 0; i < listArr.length; i++) {

        if (listArr[i] % 2 == 0) {
            /* Es par */
            even[j] = listArr[i]
            j++;
        } else {
            /* Es inpar */
            odd[x] = listArr[i]
            x++;
        }
    }

    for (var i = 0; i < even.length; i++) {
        odd.push(even[i])
    }
    return odd
}

console.log(mergeTwoList(list_of_numbers))
