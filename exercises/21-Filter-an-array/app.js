let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
var resultingNames = allNames.filter(function (names){
  var letra = names.charAt(0)
    if ( "R" === letra){
        return names
    }
});

console.log(resultingNames);