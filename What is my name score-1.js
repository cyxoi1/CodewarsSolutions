//https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript

function nameScore(name){
    let nameNew = name.toUpperCase();
    let sum = 0;
    let obj = {};
    for(let s of nameNew){
        for(let key in alpha){
            if(key.includes(s)) sum += alpha[key];
        }
    }
    obj[name] = sum;
    return obj;
}