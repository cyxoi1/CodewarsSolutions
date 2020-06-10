//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

var FilterString = function(value) {
    let res = '';
    for(let i = 0; i < value.length; i++){
        if(!isNaN(value[i]))
            res = res + value[i];
    }
    return +res;
}