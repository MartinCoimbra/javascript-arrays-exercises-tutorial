let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function (name) {
    return 'My name is: ' + name;
};

//your code here
let newArrayNames = names.map(prepender)
console.log(newArrayNames)