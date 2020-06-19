//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if(array == null) return 0;
    else if(array.length <= 1) return 0;
    let sum = 0;
    let max = Math.max(...array);
    let min = Math.min(...array);
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum - max - min;
}