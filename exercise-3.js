function dataHandling(array){
    for(i = 0; i < array.length; i++){
        console.log('Nomor ID :' + array[i][0])
        console.log('Nama Lengkap: ' + array[i][1])
        console.log('TLL :' + array[i][2] + ' ' + array[i][3]) 
        console.log('Hobi: ' + array[i][4] + '\n')
    } 
}

var data = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(data)