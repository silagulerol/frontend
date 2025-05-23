const todos = ["walk max"];

let input = prompt("What would like you to do?").toLowerCase();

// Functions declarations
const addNewTodo = () => { 
    todos.push(prompt("What would like you to add?"));
}

const removeTodo = () => {
    // Prompt to do user for which todo to remove
    const toBeRemoved = prompt("What would like you to remove?");
    // Check to see if that todo is in the list
    // if so, remove it
    // ıf not, show the user an error 
    if (todos.includes(toBeRemoved)){
        item = todos.splice(todos.indexOf(toBeRemoved), 1);
        console.log("item removed: " + item);
    }else{
        console.log("todo is not in the list");
    }
}

// Main Loop
while(input !== "quit"){
    if (input==="show"){
        console.log(todos)
    }
    else if (input === "new"){
        addNewTodo();
    }
    else if (input=== "remove"){
        removeTodo();
    }
    else{
        alert("You enter unvalid key");
    }
    input = prompt("What would like you to do?").toLowerCase();
}

console.log("All done")

