function targetTerdekat(arr) {
    // you can only write your code here!
    var posX = [];
    var posO = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'o'){
            posO.push(i)
        } else if (arr[i] === 'x'){
            posX.push(i)
        } 
    }   
    if (posX.length === 0) {
        return 0
    }
    var jarakTemp = [];
    for(var j = 0; j < posX.length; j++){
        temp = Math.abs(posX[j] - posO)
        jarakTemp.push(temp)
    }
    jarakTemp.sort();
    return jarakTemp[0]
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2