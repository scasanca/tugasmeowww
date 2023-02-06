// Soal No 4

let MyBiodata = {
    Nama:'Sancha Putu D',
    Hobi:'Olahraga',
    Umur:18,
    perkenalan: function () {
        document.write (`Nama Saya ${this.Nama}. <br> Hobi saya adalah ${this.Hobi}. <br> dan sekarang saya berumur ${this.Umur} `)
    }
};
// let saya = Object.create (MyBiodata)

MyBiodata.perkenalan()

// -----------------------------------\\----------------------------------------

let Ngaji = {
    pagi: 'an-naba',
    malam:'an-naziat',   
    halaqoh: function () {
        document.write (`pada pagi hari saya setoran surah ${this.pagi}.<br> dam malamnya saya setor surah ${an-naziat}`)
    }
};
Ngaji.halaqoh()

// -----------------------------------\\---------------------------------------

let Makanan = {
    pagi: 'kering tempe (kerasssss)',
    siang:'sayur-sayuran',
    malam:'telor balado',
    sarapan: function () {
        document.write (`sarapan di pondok pada pagi hari dengan ${this.pagi}. <br> siangnya dengan ${this.siang}. <br> dan malamnya dengan ${this.malam}`)
    }
};
Makanan.sarapan()

// ------------------------------------\\---------------------------------------

let  SragamPondok = {
    senin_selasa:'kemeja hitam',
    rabu_kamis:'Batik',
    jumat_sabtu:'baju muslim',
    peraturan: function () {
        document.write (`santri pada hari senin-selasa menggunakan ${this.senin_selasa}.<br> rabu-kamis menggunakan ${this.rabu_kamis}.<br> dan pada hari jumat-sabtu menggunakan sragam ${this.jumat_sabtu}`)
    }
};
SragamPondok.peraturan()

// ------------------------------------\\---------------------------------------

let mentor = {
    senin_rabu:'Mas Mujahidin',
    kamis_sabtu:'Mas Izra',
    jadwal: function () {
        document.write (`jadwal mentor frontend pada hari senin-rabu dengan ${senin_rabu}.<br> dan pada hari kamis-sabtu dengan ${this.kamis_sabtu}`)
    }
};
mentor.jadwal()