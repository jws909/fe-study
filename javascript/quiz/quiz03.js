let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

function changeLink(url) {
    if(url.includes("://")){
        let spt = url.split("://");
        if(spt[0] === "https"){
            return "https://secure.".concat(spt[1]);
        }else if(spt[0] === "http"){
            return "https://open.".concat(spt[1]);
        }
        
    }else{
        return "경로가 잘못되었습니다.";
    }
}

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));