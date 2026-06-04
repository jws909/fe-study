
//javascript

console.log("basic01.js");
console.log("text");

// 변수선언
// var let const

//변수선언 : let
//상수선언 : const
let a = 10;
let b = 20.123;
let c = "안녕하세요";
let d = '작은따옴표';
let e = true;
let f = false;

const g = 30;
const h = "hello";

a = 20;
//g = 50;  //const변수 (상수형) 변경 불가

console.log('abc');
console.log("abc");
console.log('작은따옴표 "안녕" ㅎㅎ ');
console.log("큰따옴표 '안녕' \"ㅎㅎ\" ");
console.log(`백틱문자로 감싸면 "큰따옴" '작은따옴' 모두 사용 가능`);

let x = 20;
let y;

console.log(x); //20
console.log(y); //undefined 정의되지않음
//----------------------------------------

// var z -- 호이스팅(hoisting) : 변수선언이 코드의 최상단으로 끌어올려지는 현상


z = 50;
console.log(z); //50

//let z = 30;  //불가
var z = 30; //var는 재선언 가능
console.log(z); //30
var z = 20; //var는 재선언 가능
console.log(z); //20

// 호이스팅은 문제를 일으킬 risk가 높다! ---> let, const 사용 권장