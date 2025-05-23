let array1 = [1, 2, 3, 4]

for (let i= 0; i < array1.length; i++){
    console.log(array1[i])
}


// this simply takes a function as an input and it will do
// whatever is in that function for each item 
// num is the each element in the array
array1.forEach((num)=> {
    console.log(num)
});

// map method returns an array 
// input : [1,2,3]
// output : [3, 6, 9]
let x = array1.map((num) =>{
    return num*3;
})

// foreach runs the code and 
// map returns a new array of items with that code run on it