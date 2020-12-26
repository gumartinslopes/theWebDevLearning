//Funções também podem retornar múltiplos valores 
function getAreas(width1, height1, width2, heigth2, width3, heigth3) {
    var areas  = [(width1 * height1),
        (width2 * heigth2),
        (width3 * heigth3)]; 

    return areas;
}

var areas = getAreas(1,2,3,4,5,6);
console.log(`A casa A tem área ${areas[0]}, a casa B tem área ${areas[1]} e a casa C tem área ${areas[2]}`);