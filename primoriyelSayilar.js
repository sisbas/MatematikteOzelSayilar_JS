/**
 * Created by SEMİH on 2.05.2017.
 */
var asal = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137];
var toplam = 1;
var n = 7;
var dizi = [];
for(var i = 0;i <asal.length;i++) {
    toplam *= asal[i];
    dizi.push(toplam);
}

console.log("P"+n+" = "+ toplam)