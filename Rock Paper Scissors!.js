//https://www.codewars.com/kata/reviews/5672a998edcb875b34000076/groups/571ba30db29485de4c001a27
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript
function rps(p1, p2) {
    let rules ={
        scissors: 'paper',
        rock: 'scissors',
        paper: 'rock',
    }
    if(rules[p1] === p2) return 'Player 1 won!';
    else if(p1 === p2) return 'Draw!';
    else return 'Player 2 won!';
}
console.log(rps('paper', 'scissors'));