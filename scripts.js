// START HERE
// STEP 1. A **hotel** with two properties called **totalRooms** and **bookedRooms**. The values for both properties can be any number. A **remainingRooms()** method (VERSION 2 - ES6) should return the remaining number of rooms that a hotel has. Console.log a message that says, "There are ## of rooms available for booking." The ## in this message should be referenced dynamically from the remainingRooms()method.

// person[key] /* this is same as person.name */ = "John";
// creating "factory" for making objects using arrow function
// let makeBoba = (type, ice, sugar) => {
//   let Boba = {
//     type: type,
//     ice: ice,
//     sugar: sugar
//   }
//   return Boba
// }

// let order1 = makeBoba("milk", "50", "25")
// console.log(order1)

// another way is to use function declaration
// function Boba(type, iceLevel, sugarLevel) {
//   this.type = type
// 	this.iceLevel = iceLevel
// 	this.sugarLevel = sugarLevel
// }
// constructor function for the Boba object

// let order1 = new Boba("jasmine", 50, 25)
// using new keyword to create an instance of the Boba object

// debugger

console.log("-------------\n");
console.log("1. Can I book a room?");
const hotel = {
  totalRooms: 100,
  bookedRooms: 50,
  remainingRooms() {
    const remainingRooms = this.totalRooms - this.bookedRooms
    console.log(`There are ${remainingRooms} of rooms available for booking.`)
  }
}
console.log(hotel.remainingRooms())

// const variable = 'name'
// hotel[variable] = 'Mariott'
// console.log(hotel)

// STEP 2. A **Forest Gump** with the property called **"thing"**. The value should be set of chocolates. A **sayQuote()** method (VERSION 2 - Key/Value Pair) will result in a console.log that says "My momma always said, 'Life was like a box of `chocolates`. You never know what you're gonna get.'" The thing "chocolate" in this message should be referenced dynamically from the property.
console.log("-------------\n");
console.log("2. Oh Forrest!");
const forrestGump = {
  thing: ['milk chocolates', 'dark chocolates', 'hazelnut chocolates', 'toffee chocolates'],
  sayQuote() {
    console.log(`My momma always said, 'Life was like a box of ${this.thing}. You never know what you're gonna get.'`)
  }
}
forrestGump.sayQuote()

// STEP 3. A **Instacart** with a property **"items"** initialized to an **empty array**. A method **addItem()** (VERSION 2 - ES6) with one parameter, that will eventually add one item to the items array. Console.log the items property to display the items that are currently in the shopping cart.
console.log("-------------\n");
console.log("3. Instacart");
const Instacart = {
  items: [],
  addItem(item) {
    this.items.push(item)
  }
}
Instacart.addItem('chocolates')
console.log(Instacart.items)

// STEP 4. A **rocket** with the property called **"name"**. The name of the rocket is called "Apollo 11". A **startLaunch()** method (VERSION 1) will result in a JavaScript **alert** that says, "ignition sequence start for the Apollo 11 ... 6, 5, 4, 3, 2, 1, 0 ..." This method will also console.log a message that says "launched". The name "Apollo 11" in this message should be referenced dynamically from the property. Remember to call the method.
console.log("-------------\n");
console.log("4. We have a liftoff");
const rocket = {
  name: 'Apollo 11'
}
rocket.startLaunch = function() {
  alert(`ignition sequence start for the ${rocket.name} ... 6, 5, 4, 3, 2, 1, 0 ...`)
  console.log('launched')
}
rocket.startLaunch()

// STEP 5. Create your own object and give it **at least one property** and **at least one method**. You can use any version to create the methods, Then call one of the methods you created. Use your imagination!
console.log("-------------\n");
console.log("5. Create your own!");
const meal = {
  name: 'lunch',
  food: ['noodles', 'fruits', 'chips'],
  reduceFood() {
    this.food.pop()
    console.log(`Today I am having ${this.food} for ${this.name}.`)
  }
}
meal.reduceFood()