
function getMealByTime1(currTime){
    if(currTime >= 6 && currTime <= 10){
        return "아침";
    }else if(currTime >= 11 && currTime <= 14){
        return "점심";
    }else if(currTime >= 17 && currTime <= 20){
        return "저녁";
    }else if(currTime >= 21 && currTime <= 23){
        return "야식";
    }else{
        return "금식";
    }
}
console.log(getMealByTime1(5)); //출력값 : 금식

const getMealByTime2 = function(currTime){
    if(currTime >= 6 && currTime <= 10){
        return "아침";
    }else if(currTime >= 11 && currTime <= 14){
        return "점심";
    }else if(currTime >= 17 && currTime <= 20){
        return "저녁";
    }else if(currTime >= 21 && currTime <= 23){
        return "야식";
    }else{
        return "금식";
    }
}
console.log(getMealByTime2(8)); //출력값 : 아침

const getMealByTime3 = (currTime)=>{
    if(currTime >= 6 && currTime <= 10){
        return "아침";
    }else if(currTime >= 11 && currTime <= 14){
        return "점심";
    }else if(currTime >= 17 && currTime <= 20){
        return "저녁";
    }else if(currTime >= 21 && currTime <= 23){
        return "야식";
    }else{
        return "금식";
    }
}
console.log(getMealByTime3(13)); //출력값 : 점심

function printMeal(meal){
    console.log(meal);
}
printMeal(getMealByTime1(16)); //출력값 : 금식

function getMealByTime4(currTime, func){
    printMeal(func(currTime));
}

getMealByTime4(19, getMealByTime2); //출력값 : 저녁

printMeal(getMealByTime1(22)); //출력값 : 야식

console.log(getMealByTime2(2)); //출력값 : 금식