var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) {
    //your code here
    var NewArray = [],
        j = 0;
    for (var i = 0; i <= people.length -1; i++) {
        NewArray[j] = people[i]
        j++;
        if(people[i] === personName ){
        j--;
            NewArray.pop()
        }
    }
    return NewArray
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
/* Result:
['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak']
['ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'] */