/*Goals of game pt. 3
1. Fade out the incorrect div when clicked
2. Add the try again/correct message when squares clicked
3. Create a function to set all the squares to the correct color
4. Pick random color from the array
Goals of game pt. 4
1. Generate random colors for array
    1a. generateRandomColors function
    1b. generateRandomColors function (calls la)
2. change the Title background to the correct color; once picked

Goals of game pt. 5
1. set up the stripe div
2. add event listener to new colors button
3. add logic to that event listener 
    3a. generate new colors
    3b. pick a new winning color
    3c. change the colorDisplay
    3d. change colors of the square
    3f. change the title background back to black

Goals of game pt. 6
1. add comments
2. add easy/hard buttons
    2a. add a "selected class to our css"
3. add click listeners to these buttons
4. add logic to the easy button
5. add logic to the hard button
6. add numsquares to track state, update as needed

Goals of game pt. 7:styling
1. H1
2. body
3. colorDisplay span (br tags)
4. colorDisplay
5. buttons
6. strip
7. button:hover
8. squares
9. container
10.selected
11.message

Goals of game pt. 8
1.Remove message when resetting, as well as when 
2. Make New Colors button say "Play Again?" after winning 
3. Reset "Play Again?" message after clicking button to reset
4. Disable blue button outline when clicked (Chrome )
5.Refactoring:
 1. Easy/hard buttons
 2. Create a reset() function
 3. Hide bottom 3 when clicking on easy mode
 4. Show bottom 3 when clicking on hard mode
 5. Replace content of resetButton with just a call to reset()
 6. Create, build, and call a main() function
*/

//===================================
//Helper functions
//===================================
const changeColors = (color) => {
    squares.forEach( (square) => {
        square.style.backgroundColor = color;
    })
}

const pickColor = () => {
    const index = Math.floor(Math.random()* colors.length);
    return colors[index];
}

const generateRandomColor = () => {
    const r= Math.floor(Math.random() * 256);
    const g= Math.floor(Math.random() * 256);
    const b= Math.floor(Math.random() * 256);
    return "rgb(" + r +", " +g + ", " + b + ")";
}

// Generate random colors
const generateRandomColors = (num) => {
    let output = []

    for(let i=0; i<num; i++){
        //generate random candidate color
        let cand= generateRandomColor();

        //check if it is in the colors list
        while (output.includes(cand)) {
            cand= generateRandomColor();
        }

        // push cand to the list
        output.push(cand);
    }
    return output;
}

const reset = () => {
    colors = generateRandomColors(num_squares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for (let i=0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor= "steelblue";
    message.textContent = "";
}

//===================================
// INITIALIZE VARIABLES
//===================================
//State
let num_squares=6;

// Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay= document.querySelector("#colorDisplay");
const message = document.querySelector("#message");
const title = document.querySelector("h1");
const resetButton = document.querySelector("#resetButton");
const modeButtons = document.querySelectorAll(".mode");

let colors=  generateRandomColors(num_squares);
// Choose winning color
let pickedColor = pickColor();


//===================================
// MAIN
//===================================

// Update colorDisplay
colorDisplay.textContent= pickedColor;

// Reset Color's Button
resetButton.addEventListener("click", reset);
 
modeButtons.forEach( (button) => {
    button.addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            num_squares=3;
        }else{
            num_squares=6;
        }
        reset();
    });
});

// Set up squares 
for(let i = 0;i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners 
    squares[i].addEventListener("click", function() {

        // Get the color of the clicked square
        const clickedColor = this.style.backgroundColor;
        
        // Compare that color to picked color
        if(clickedColor === pickedColor){
            message.textContent = "correct";
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            // or without doing visibility this.style.backgroundColor = "black";
            this.style.backgroundColor = "black";
            message.textContent = "Try Again!";
        }
    })
};




