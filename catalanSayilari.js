/**
 * Created by SEMİH on 2.05.2017.
 */
var n = 5;
var pay = faktoriyelAl(2 * n);
var payda = faktoriyelAl(n + 1) * faktoriyelAl(n);

console.log(pay/payda);

function faktoriyelAl(x) {
    var gecici = 1;
    for (var i = x; i > 0; i--) {
        gecici *= i;
    }
    return gecici;
}