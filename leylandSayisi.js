/**
 * Created by SEMİH on 2.05.2017.
 */

/*
* Leyland sayı dizisini tespit eder.
* Programı çalıştırırken dikkat edelim, döngü sonsuza doğtu ilerler.
* İşlemcisi düşük bilgisayararda problem yaratır.
* */
var dizi = [];
for(var i =2; i < Math.pow(2,53)- 1;i++) {
    for(var j =3;j < Math.pow(2,53) - 1;j++ ) {
        var leyland = Math.pow(i,j);
        dizi.push(leyland);
    }
}
dizi.sort(function(a, b){return a-b});
console.log(dizi)