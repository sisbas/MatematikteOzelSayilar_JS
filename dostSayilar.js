/**
 * Created by SEMİH on 27.04.2018.
 */
var dostSayilar = [];

for (var i = 0; i < Number.MAX_VALUE; i++) {
  for (var k = 0; k < Number.MAX_VALUE; k++) {
    if (i != k) {
      if ((tamBolenleriniTopla(tamBolenleriniBul(i)) == k) && (tamBolenleriniTopla(tamBolenleriniBul(k)) == i)) {
        console.log(i + " ve " + k + " dost sayılardır!!! ")
        dostSayilar.push([i, k])
      }
    }
  }
}



function tamBolenleriniBul(n) {
  var tamBolenler = [];
  for (var m = 0; m < n; m++) {
    if (n % m == 0) {
      tamBolenler.push(m);
    }
  }

  return tamBolenler;
}

function tamBolenleriniTopla(n) {
  var total = 0;
  for (var m = 0; m < n.length; m++) {
    total += n[m]
  }

  return total;
}

console.log(dostSayilar)
