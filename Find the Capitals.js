//https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript


function capital(capitals){
    const arr = [];
    for(let i = 0; i < capitals.length; i++){
        if(capitals[i].hasOwnProperty('state'))
            arr.push(`The capital of ${capitals[i]['state']} is ${capitals[i]['capital']}`);

        if(capitals[i].hasOwnProperty('country'))
            arr.push(`The capital of ${capitals[i]['country']} is ${capitals[i]['capital']}`);

    }


    return arr;
}