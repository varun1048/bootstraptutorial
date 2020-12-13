var car={

	name:"inova",
	model:2020,``
	 engine:{
		 type:"petrol engine",
		 capacity: function(){
			console.log("engine 1000km/s")

		 }
	 },
	display: function() {
		// console.log(this.name+"" +this.model)
		console.log(this)
		
	},
doortype: function() {
	console.log("fluying door")
}
}
// console.log(car)
// car.doortype();
// car.engine.capacity()
