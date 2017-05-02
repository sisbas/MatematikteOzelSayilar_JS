/**
 * Created by SEMİH on 2.05.2017.
 */
var sayi = 51;
var dizi = [];

for (var k = sayi -1 ; k > 0; k--) {
    if(!aralarindaAsalmi(sayi,k)) {
        dizi.push(k);
    }
}

function aralarindaAsalmi(deger1, deger2, dogruMu) {
    dogruMu = false;

    for (var i = 2; i < deger1 ; i++) {
        if ((deger1 % i == 0) && (deger2 % i == 0)) {
            dogruMu = true;
            return dogruMu;
        }
    }
}

console.log(dizi.length)