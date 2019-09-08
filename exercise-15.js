function groupAnimals(animals) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var kelompok = [];
    for(var i = 0; i <= abjad.length; i++){
        var arr = [];
        for(var j = 0; j <= animals.length - 1; j++){
            var index0 = animals[j].charAt(0);
            if(index0 === abjad[i]){
                arr.push(animals[j])
            } 
        } 
        if(arr.length !== 0) {
            kelompok.push(arr);
        }
    }
    return kelompok
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]