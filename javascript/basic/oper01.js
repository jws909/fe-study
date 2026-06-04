//operator 연산자

let x = 10;
let y = 10;
let z = '10';

console.log(x + y); // 20
console.log(x - y); // 0
console.log(x + z); // 1010

console.log(2 ** 4); // 16  제곱 연산자

// ==      ===
// == : 값이 같으면 true
// === : 값과 타입이 같으면 true

console.log(x == y); // true
console.log(x == z); // true

console.log(x === y); // true
console.log(x === z); // false

console.log(x > 5 && y > 0); // true
console.log(x == 1 || y === '10'); // false

let q = 10;
let w = '20';
let e = 30;

console.log(q+e); // 40
console.log(q+w+e); // 102030

//형변환 (타입변환)
// String() : 문자열로 변환
// Number() : 숫자로 변환
// Boolean() : 불리언으로 변환

console.log(q+String(e)); // 1030
console.log(q+Number(w)); // 30

console.log(Number('4231214'));
console.log(Number('3213.21321'));

if(q == 10){
    console.log('q는 10입니다.');
}

// &&
q == 11 && console.log('&& 11 확인 출력');
q == 10 && console.log('&& 10 확인 출력');

// true && true
// false || true

console.log(10 == 10.0); // true
console.log(10 === 10.0); // true
console.log(Number('10') === Number('10.0')); // true