/**
 * Created by SEMİH on 2.05.2017.
 */

//Sylvester's sequence: a(n+1) = a(n)^2 - a(n) + 1, with a(0) = 2.
var dizi = [2];

for (var i = 0; i < Math.pow(2, 53) - 1; i++) {
    var sonuc = 0;
    sonuc = Math.pow(dizi[i], 2) - dizi[i] + 1;
    dizi.push(sonuc);
}

console.log(dizi)