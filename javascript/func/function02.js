

// 함수 리턴

function sum1() {
    console.log('sum1()');
    return 100;
}

sum1();
let s1 = sum1();
console.log(s1);
console.log(sum1());

const sum2 = function(a, b) {
    return a + b;
}

console.log(sum2(30, 50));

const sum3 = function sum333(a, b) {
    return a+b;
}
console.log(sum3(10, 20));

const sum4 = (x, y) => {
    return x + y;
}
console.log(sum4(100, 200));

// 화살표 함수, => 뒤에 괄호없이 바로 나오는 값을 return 값으로 인식
const sum5 = (x, y) => x + y;  //return x+y;
console.log(sum5(1000, 2000));

const sum6 = ()=>1+2+3+4+5;
console.log(sum6());


//-----------------------

function func(){
    let x = 10;
}

if(1==1){
    let x = 40;
}

{
    let x = 50;
}

let x = 11;

console.log(x);


//호이스팅
console.log(w);
w = 20;
var w = 30;

r = 3000;
var r;
console.log(r);


//함수 호이스팅

//function check(){}

check();

function check(){
    console.log('check()');
}


// 일회용 함수  즉시사용

(function ontime(){
    console.log('일회용 함수 실행');
})();