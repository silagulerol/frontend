//DIFFERENCE BETWEEN ARRAYS AND OBJECTS
// Array is really are just kind of a special type of object that only uses numbers as the keys
// and it always comes out in the same order and
// JavaScript everything's an object arrays are just a type with an object 
// where the key is always going to be a number and they're always going 
// to be in the same order 


const myArr = [1,2,3]

// objects are key:value pairs 
// we use objects whenever we want to model something 
// that has data that's not in a logical order
const truck = ["Chevy", "Silverado", 2015, "silver", "yesPowerWindows","noBluetooth"]
// truck[2] means nothing but truck.year does

const myTruck = {
    make: "Chevy",
    model:"Silverado",
    year: 2015,
    color:"silver",
    powerWindows: true,
    bluetooth: false,
}

truck
myTruck
//to acces data dot notation
myTruck.color
myTruck.model


// adding a pair
myTruck.owner = "Josh"

//Not be used often but, 
// if my key starts with a number or when there is a sapce in key, 
// or if we are using a variable for our key, then we use
myTruck["1stOwner"]
myTruck["first Owner"]

let myVar = color
myTruck.myVar //ERROR
myTruck["myVar"] // OUTPUT: "silver"


// NSETED OBJECTS AND ARRAYS
const post = {
    id : "silagul.erol22",
    author: "silagulErol",
    text: "I loathe social media",
    //comments is an array and every element is an object
    comments: [
        {author:"user1", text:"ME TOO"},
        {author:"user2", text:"I love it"},
        {author:"user3", text:"I don't really care"}
    ]
}

//accessing value (array of objets) of the key comments
post.comments // returns an array

//accessing first element of value array comments
post.comments[0] // returns an object {author:"user1", text:"ME TOO"}

post.comments[0].author // returns a value of key author
