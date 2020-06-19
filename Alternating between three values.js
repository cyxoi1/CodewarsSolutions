//https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript

function f(x, obj) {
    for(let key in obj){
        if(obj[key] === x){
            if(key === 'a') return obj['b'];
            if(key === 'b') return obj['c'];
            if(key === 'c') return obj['a'];
        }
    }
}