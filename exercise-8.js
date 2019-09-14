function pasanganTerbesar(num) {
    // you can only write your code here!
   var arr = num.toString()
   var array = [];
   for (var i = 0; i < arr.length - 1; i++){
       array[i] = Number(arr[i] + arr[i + 1]);
   }
   var sementara = array[0];
   for(var j = 1; j < array.length ; j++){
       if(array[j] > sementara){
           sementara = array[j];
       }
   }
   
   return sementara
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(111573)); // 99