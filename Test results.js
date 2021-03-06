//https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

function testResult(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    let sumAvr = +(sum / array.length).toFixed(3);
    let obj = {
        'h' : 0,
        'a' : 0,
        'l' : 0
    }
    for(let el of array){
        if(el >= 9) obj['h']++;
        else if (el >= 7) obj['a']++;
        else obj['l']++;
    }
    return (obj['a'] + obj['l'] === 0)? [sumAvr, obj, 'They did well'] : [sumAvr, obj];
}
