//https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
    let sumA = 0;
    let sumB = 0;
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]) sumA++;
        else if(a[i] < b[i]) sumB++;
    }
    if(sumA > sumB) return `${sumA}, ${sumB}: Alice made "Kurt" proud!`;
    else if(sumA < sumB) return `${sumA}, ${sumB}: Bob made "Jeff" proud!`;
    else return `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`;
}