//https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript

function type(value) {
    let res = {}.toString.call(value);
    return res.slice(1, -1).split(" ")[1].toLowerCase();
}