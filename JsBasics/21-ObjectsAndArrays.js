//este é um objeto car
function car (name, topSpeed, year) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.year = year;
    this.accelerate = function () {
        if(topSpeed < 100){
            console.log('vrum');
        }
        else if(topSpeed > 100 && topSpeed < 200){
            console.log('vruuuuum');
        }
        else if(topSpeed > 200 && topSpeed< 300){
            console.log('vruuuuuuuuuuum');
        }
        else{
            console.log('nheeeeeeeeeeeeaaaaaaauuum');
        }
    }
}

const aventador = new car('Aventador', 200, 2002);
const veyron = new car('Veyron', 407.12 , 2005);
const F8 = new car('F8', 300, 2001);
console.log(aventador);

//isso é um array de objetos
var cars = [aventador,veyron,F8];
console.log(cars);
cars[2].accelerate();

//isso é um objeto com arrays dentro
const vehicles = {
    ships : ['Black Pearl','Jackdaw','Queen Anns\' Revenge'],
    cars: ['Aventador', 'Veyron', 'F8', 'A6'],
    airplanes: ['Airbus A380 ', 'Northrop ']
}
console.log(vehicles.airplanes[1]);