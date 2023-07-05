let a = 3
let b = 4
let c = 12
let d = 140


//test 1
if (a % 2 === 0) {
  console.log('juft son');
} else {
  console.log('toq son');
}

//test 2
if (a % 1 === 0 && b % 1 === 0) {
  console.log("A va B butun sonlari");
} else {
  console.log("A va B butun sonlari emas");
}

//test 3
if ((a < b && b < c) || (a > b && b > c)) {
  console.log('B soni A va C sonlari orasida yotadi');
} else {
  console.log('B soni A va C sonlari orasida yotmid');
}

//test 4 
if (a % 2 !== 0 && b % 2 !== 0) {
  console.log('A va B toq son');
} else {
  console.log('A va B toq son emas');
}

//test 5, test 6
if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)) {
  console.log('A va B toq son');
} else {
  console.log('A va B toq son emas');
}

//test 7
if (a >= 0 && b >= 0 && c >= 0) {
  console.log('hammasi musbat');
} else {
  console.log('hammasi musbat emas');
}

//test 10
if (c > 9 && c < 100 && c % 2 === 0) {
  console.log("Berilgan son ikki xonali juft son");
} else {
  console.log("Berilgan son ikki xonali juft son emas");
}

//test 11
if (d > 99 && d < 1000 && d % 2 === 0) {
  console.log("Berilgan son uch xonali juft son");
} else {
  console.log("Berilgan son uch xonali juft son emas");
}



//test 16
let x1 = 2;
let x2 = 5;
let y1 = 3;
let y2 = 6;

if ((x1 + y1) % 2 === (x2 + y2) % 2) {
  console.log("Berilgan maydonlar bir xil rangda");
} else {
  console.log("Berilgan maydonlar bir xil rangda emas");
}

//qob ketganlarini qilomadim