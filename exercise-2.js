function balikString(str){
    var terbalik = ''
    for(var i = str.length - 1; i >= 0; i--){
        terbalik += str[i]
    }
    return terbalik
}

console.log(balikString('Hello World!'))