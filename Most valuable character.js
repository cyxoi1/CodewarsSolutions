//https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/train/javascript

function solve(st){
    let obj = {};
    for(let i = 0; i < st.length; i++){
        obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i])
    }
    let max = Math.max(...Object.values(obj));
    let arr = Object.entries(obj);
    arr = arr.filter(el => el[1] === max).sort();
    return arr[0][0];
}