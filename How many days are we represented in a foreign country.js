//https://www.codewars.com/kata/58e93b4706db4d24ee000096

function daysRepresented(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        for(let j = arr[i][0]; j <= arr[i][1]; j++){
            if(!obj[j]) obj[j] = 1;
        }
    }
    return Object.keys(obj).length;
}