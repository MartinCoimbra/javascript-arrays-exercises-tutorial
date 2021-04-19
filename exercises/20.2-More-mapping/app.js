var myNumbers = [23, 234, 345, 4356234, 243, 43, 56, 2];

const myFunction = (index) => {
    return index * 3
}
// your code here
const newArray = myNumbers.map(myFunction)
console.log(newArray);