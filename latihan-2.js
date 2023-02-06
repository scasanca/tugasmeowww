document.write ('<hr>')
var JualMobil = {
    iklan: function () {
        document.write (`BU, saya ${this.nama}, jual mobil ${this.merk}, tahun ${this.tahun}, bekas`)
    }
}

const saya = Object.create (JualMobil)

saya.nama = 'Tompel',
saya.merk = 'Avanza',
saya.tahun = 2017
saya.iklan()