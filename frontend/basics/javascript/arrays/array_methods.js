let dogs = ["max", "sam", "lilah"]


// removing from end, returns removed element
let x = dogs.pop()

// adding to end, returns length of array
dogs.push("Lilah")

// removing from start, returns removed element
let y = dogs.shift()

// adding to start, returns length of array
dogs.unshift(x)


// returns deleted items 
// deletCount how many time you want to delete
// Array.splice(i, deleteCount, item1, item2)
let z = dogs.splice(1, 1) // start index 1 and we gonna delete one thing
// z is an array ["sam"], dogs is ["max", "lilah"]

// for adding
// 1 is what index we want to replace, since it is zero we shift everyting 1 and sam is the value that we want to put it there
let a = dogs.splice(1, 0, "Sam")

dogs.splice(1, 0, "Bandit", "Jack","John")

dogs.splice(1, 3)

let friends = ["chris", "jana", "miguel"]

// concat create new array then apply modification
let f = friends.concat("jacob", "donna")
// friends = ["chris", "jana", "miguel"]
// f = ["chris", "jana", "miguel", "jacob", "donna"]


friends.indexOf("jana") // if element does not exist in the array it returns -1
 
friends.includes("chris")// returns boolean true/false

x = friends.join() //i t joins all elements and returns a string
x = friends.join(", ")

friends.slice(1) // 1 is starting index 
// and now it returns rest of the array  ["jana", "miguel"]

friends.slice(1, 2) // 1 is starting index and second index is EXCLUSIVE
//  it returns rest of the array  ["jana"]





