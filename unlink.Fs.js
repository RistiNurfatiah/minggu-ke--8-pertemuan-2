//unLink Fs = Hapus data/file

//panggil library FS

const fs = require('fs')

/*Baca file terserah.txt apakah ada filenya?
menggunakan fs.readFile */

fs.readFile('terserah.txt', async (err, data) => {
    //jika data tidak ditemukan
    if(err) console.log("Data tidak ditemukan!");

    //jalankan console.log dulu menggunakan await
    await console.log("Data ditemukan");

    //data ditemukan kita langsung eksekusi delete
    fs.unlink('terserah.txt', (err) => {
        //jika gagal delete
        if(err) console.log("Gagal hapus data");

        //jika berhasil delete
        console.log("hapus data berhasil");
    })
})