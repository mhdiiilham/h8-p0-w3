function palindrome(kata) {
    // you can only write your code here!
    if (kata.split('').reverse().join('') !== kata){
        return false
    } else {
        return true
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false