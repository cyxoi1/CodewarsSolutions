//https://www.codewars.com/kata/515e188a311df01cba000003/javascript

// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury'
//             break;
//         case 2:
//             name = 'Venus'
//             break;
//         case 3:
//             name = 'Earth'
//             break;
//         case 4:
//             name = 'Mars'
//             break;
//         case 5:
//             name = 'Jupiter'
//             break;
//         case 6:
//             name = 'Saturn'
//             break;
//         case 7:
//             name = 'Uranus'
//             break;
//         case 8:
//             name = 'Neptune'
//             break;
//     }
//
//     return name;
// }
//=======================================================================
//same with object
function getPlanetName(id) {
    let name = {
        1:'Mercury',
        2:'Venus',
        3:'Earth',
        4:'Mars',
        5:'Jupiter',
        6:'Saturn',
        7:'Uranus',
        8:'Neptune',
    }
    if (id in name) return name[id];
    return 'Error'
}
console.log(getPlanetName(3));
//===========================================
function getPlanetName(id) {
    if(id < 1 || id > 8) return 'Error';
    return {
        1:'Mercury',
        2:'Venus',
        3:'Earth',
        4:'Mars',
        5:'Jupiter',
        6:'Saturn',
        7:'Uranus',
        8:'Neptune',
    }[id];

}
console.log(getPlanetName(7));

