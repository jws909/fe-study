// 반복문...

//javascript [] 배열

let scores = [10, 20, 30, 50];

console.log(scores);

//for문
for(let i = 0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
for(let i in scores){
    console.log(i +" "+ scores[i]);
}

//for of
for(let score of scores){
    console.log(score);
}

//forEach
scores.forEach( (value, index)=> {
    console.log( index + " " + value);
})