const person = {
	name : 'Jhon',
	age : 73
}


//criando um objeto vazio
const empty ={}


//criando um objeto utilizando um construtor de objeto
const hotel = new Object;
hotel.name = 'Java Palace';
hotel.rooms = 50;
hotel.bookedCustomers = 50;
hotel.checkAvailability = function(){
	var available = false;

	if(this.bookedCustomers < this.rooms) available  = true;	
	
	else available = false;

	return available;
}

console.log(empty);
console.log(hotel);
console.log(hotel.checkAvailability());

//update direto no objeto
hotel.name = 'Langham';
hotel ['bookedCustomers'] = 45;

console.log(hotel);
