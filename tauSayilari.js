/**
 * Created by SEMİH on 2.05.2017.
 */
var deger = 32;
var dizi = [];

var nesne = {
    indeks: [],
    sayac: 1,
    seri: []
};

var toplam = 1;

while(!(deger == 1)) {
    if (deger % 2 == 0) {
        dizi.push(2);
        deger = deger / 2;
    } else if (deger % 3 == 0) {
        dizi.push(3);
        deger = deger / 3;
    } else if (deger % 5 == 0) {
        dizi.push(5);
        deger = deger / 5;
    } else if (deger % 7 == 0) {
        dizi.push(7);
        deger = deger / 7;
    } else if (deger % 11 == 0) {
        dizi.push(11);
        deger = deger / 11;
    } else if (deger % 13 == 0) {
        dizi.push(13);
        deger = deger / 13;
    } else if (deger % 17 == 0) {
        dizi.push(17);
        deger = deger / 17;
    } else if (deger % 19 == 0) {
        dizi.push(19);
        deger = deger/19;
    } else if (deger % 23 == 0) {
        dizi.push(23);
        deger = deger / 23;
    } else if (deger % 29 == 0) {
        dizi.push(29);
        deger = deger / 29;
    } else if (deger % 31 == 0) {
        dizi.push(31);
        deger = deger / 31;
    } else if (deger % 37 == 0) {
        dizi.push(37);
        deger = deger/37;
    } else if(test_prime(deger)) {
        dizi.push(deger);
        deger = deger / deger;
    }
}

// farklı sayıların indekslerini bulup kaydeder
for (var i = 1; i < dizi.length; i++) {
    for (var j = i - 1; j < i; j++) {
        if (dizi[i] != dizi[j]) {
            nesne.indeks.push(dizi.indexOf(dizi[i]));
        }
    }
}
// ilk indeks 0 son indeks dizinin uzunluğu kadar olmalıdır
nesne.indeks.unshift(0);
nesne.indeks.push(dizi.length);

// dizideki toplam farklı sayıyı bulup geri döndürür.
for (var i = 1; i < dizi.length; i++) {
    if (dizi[i] != dizi[i - 1]) {
        nesne.sayac++;
    } else {
        continue;
    }
}

// indeks değerlerini bulup çarparak pozitif bölenlerinin sayısını bulur
for(var i = nesne.indeks.length -1;i > 0; i--) {
    var gecici = (nesne.indeks[i] - nesne.indeks[i-1]) + 1;
    nesne.seri.push(gecici);
    toplam *= gecici;
    gecici = 0;
}

function test_prime(n)
{
    if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x/2 === 0)
            {
                return false;
            }
        }
        return true;
    }
}

if(toplam % 8 == 0) {
    console.log("TAU SAYISI")
} else {
    console.log("DEĞİL")
}