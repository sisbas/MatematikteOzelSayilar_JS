/**
 * Created by SEMİH on 2.05.2017.
 */

//Girilen değerin bir Dudeney Sayısı olup olmadığını tespit eder
var giris = "19683"

if (Number.isInteger(Math.cbrt(parseInt(giris)))) {
    if(say(giris) == Math.cbrt(parseInt(giris))) {
        console.log("DUDUNEY SAYISI")
    } else {
        console.log("DUDUNEY SAYISI")
    }
} else {
    console.log("DUDUNEY SAYISI DEĞİL")
}

function say(x) {
    var toplam =parseInt(x[0]);
    for(var i = 1; i < x.length;i++) {
        toplam += parseInt(x[i]);
    }

    return toplam
}