/**
 * Created by SEMİH on 2.05.2017.
 */
var ucgenSayilar = [];
var maks = Math.pow(2, 53) - 1;
var gecici = 0;

for(var i = 1;i<maks;i++) {
    gecici +=i;
    ucgenSayilar.push(gecici);
}