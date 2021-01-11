//notação de função construtora
function hotel(name, rooms, bookedRooms) {
	this.name = name;
	this.rooms = rooms;
	this.bookedRooms = bookedRooms;
	this.checkAvailability = function(){
		var	available = false;
		if(bookedRooms < rooms)available = true;
		
		return available;
	}
	this.deletado = 'Esta propriedade será deletada em 5, 4, 3, 2...';
}
const sheldonHotel = new hotel('Sheldon',150, 0);
console.log(sheldonHotel);
delete sheldonHotel.deletado;
console.log(sheldonHotel);
