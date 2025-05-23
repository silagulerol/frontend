/*
 A METHOD : A FUNCTION ATTACHED TO AN OBJECT
 for example: 
 -forEach() is an method attached to all arrays
 -map() is an method attached to all arrays
 -log() is an method attached to console objects 
 A method is a function that's aproperty of an object
 when we make methods we're going to want to use the old function definition 
 we are not going to want to use arrow functions the reason for this is because
 if you use an arrow function it doesn't keep the correct this binding 
 */

 const dog = {
    name: "Max",
    age:1,
    // speak is the function name in here
    speak: function(){
        console.log("Woof woof")
    }
 }

 //to use speak function
 dog.speak()

 // this keyword refers to the object that has been created
 const person = {
    name : "sila",
    age:21,
    sayHi: function(){
        console.log("Hi I'm " + this.name + " and I'm "+ this.age+ " years old.")
    }
 }

 person.sayHi()

 const posts ={
    user: "silagul22",
    data: ["good","bad","ugly"],
    print: function(){
        this.data.forEcach( (comment) => {
            console.log(comment)
        })
    }
 }