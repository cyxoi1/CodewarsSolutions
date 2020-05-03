//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/javascript
//Calculate Two People's Individual Ages

function getAges(sum,difference){
    let a = (sum / 2) + (difference / 2);
    let b = sum - a;
    return sum < 0 || difference < 0 || a < 0 || b < 0 ? null : [a, b];
}
