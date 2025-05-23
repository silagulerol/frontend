function addToArray(arr, str){
    arr.push(str)
}

function removeFromArray(){
    return arr.pop()
}

function addToBeginning(arr, str){
    arr.unshift(str)
}

function removeFromBeginning(){
    return arr.shift()
}

function returnNextItem(arr, str){
    if (arr.includes(str)){
        index = indexOf(str)
        if (index === arr.length-1)
            return []
        return arr[index+1]
    }
    return false
}


function returnChunck(arr, str1, str2){
    if (arr.includes(str1) & arr.includes(str2) ){
        start = arr.indexOf(str1)
        end = 1 + arr.indexOf(str2)
        return arr.slice(start, end)
    }
    return false
}


function sumValues(arrNums) {
    let sum = 0
    // forEach methodu şnput olarak bir arrow function alır
    // arro Function: (input) => { //code block }
    arrNums.forEach( (num) => {
        sum += num
    });
    return sum
}


function joinStrings(arr, str){
    let new_arr = arr.map( (element) => {
        return element + str
    });
    console.log(new_arr)
}
let arr = ["chris", "jana", "miguel"]
let str = " welcome"
joinStrings(arr, str)
// returns ['chris welcome', 'jana welcome', 'miguel welcome']