function dataHandling2(array){
    array.splice(1, 1, 'Roman Alamsyah Elsharawy')
    array.splice(2, 1, 'Provinsi Bandar Lampung')
    array.splice(4, 1, 'Pria', 'SMA Internationa Metro')
    console.log(array)
    var potong = array[3]
    var bulan = potong.split('/')
    console.log(bulan)
    switch(bulan[1]){
        case '01':
            console.log('Januari')
            break;
        case '02':
            console.log('Februari')
            break;
        case '03':
            console.log('Maret')
            break;
        case '04':
            console.log('April')
            break;
        case '05':
            console.log('Mei')
        break;
        case '06':
            console.log('Juni')
        break;
        case '07':
            console.log('Juli')
        break;
        case '08':
            console.log('Agustus')
        break;
        case '09':
            console.log('September')
        break;
        case '10':
            console.log('Oktober')
        break;
        case '11':
            console.log('November')
        break;
        case '12':
            console.log('Desember')
        break;
    }
    bulan.sort(function(a, b) {return b - a})
    console.log(bulan)
    // array[3].split('/').join('-')
    var bulanBaru = array[3].split('/').join(' - ')
    console.log(bulanBaru)
    // console.log(array[1].toString().slice(0, 15))
    var nama = array[1].toString().slice(0, 15)
    console.log(nama)
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])