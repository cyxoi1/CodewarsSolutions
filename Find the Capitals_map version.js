//https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript


function capital(capitals){
    return capitals.map(el => `The capital of ${el['state'] || el['country']} is ${el['capital']}`)

}