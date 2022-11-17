const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka yang >= 3
//for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) newAngka.push(angka[i]);
}
// console.log(newAngka);

// filter
const newAngkaFilter = angka.filter((a) => a >= 3);
// console.log(newAngkaFilter);

//map
// kalikan semua angka dengan 2 (ingin punya array baru dengan semua elemen dikali 2)
const newAngkaMap = angka.map((a) => a * 2);
// console.log(angka);
// console.log(newAngkaMap);

// reduce
// dijumlahkan semua element pada array
// -1+ 8+ 9+ 1+ 4+ -5+ -4+ 3+ 2+ 9
const newAngkaReduce = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(newAngkaReduce);

// method chaining
// 1. cari angka > 5
// 2. hasilnya kalikan 3
// 3. jumlahkan semuanya
// solo code
const newMChaining = function () {
  const angkaL5 = angka.filter((a) => a > 5);
  console.log(angkaL5);
  const angkaK3 = angkaL5.map((a) => a * 3);
  console.log(angkaK3);
  return angkaK3.reduce((ac, cv) => ac + cv);
};
console.log(angka);
console.log("hasil code ku " + newMChaining());
// code wpu
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(`hasil code WPU ${hasil}`);
