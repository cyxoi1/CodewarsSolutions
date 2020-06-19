//https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

function validPass(password){
    if(/[0-9A-Za-z]{4,19}/.test(password)&&
        /\d+/.test(password)&&
        !/[!*]/.test(password))

        return 'VALID';

    else return 'INVALID';

}