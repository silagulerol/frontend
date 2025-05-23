// Modifiying by class
// the classlist is not an array it is a property it's a read only list okay 
// you can not modify this directly the only way you can modify it is by using those add remove toggle methods 
document.querySelector("p").classList
// DMTokenList is empty
document.querySelector("p").classList.add("red")
// DMTokenList include red class
document.querySelector("p").classList.remove("red")
// red is removed fromDmTokenList
document.querySelector("p").classList.add("green")
document.querySelector("p").classList.add("big")

document.querySelector("p").classList.toggle("green") // returns false, because after toggle the color is not green
document.querySelector("p").classList.toggle("green") // returns false, because after toggle the color is green

// Modifiying by attributes
// attributes are just key value pairs 
document.querySelector("a").getAttribute("href")
document.querySelector("a").setAttribute("href", "https://www.google.com")
//selecting first image tag
document.querySelector("img").setAttribute("src", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/294100/capsule_616x353.jpg?t=1734154189")
// i wanna change second one:
// document.getElementsByTagName("img")[1].setAttribute("src", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/294100/capsule_616x353.jpg?t=1734154189")

// Modifying by DOM events 
document.querySelector("p").addEventListener("click", function() {console.log(this)}) // returns p tag
document.querySelector("p").addEventListener("click", () =>  {console.log(this)}) // returns windows object

const makeRed = function() {
    this.style.backgroundColor = "red"
}

document.querySelector("p").addEventListener("click", makeRed)

items = document.querySelectorAll("li")
for (let i=0; i < items.length; i++){
    items[i].addEventListener("click", makeRed);
}








// addEventListener: Adding Event Listeners
//  1st argument is type of listener , 2nd argument is the function to call (it's called a callback function )
document.querySelector("h1").addEventListener("click", () => {console.log("clicked")} )
document.querySelector("li").addEventListener("mouseover", () => {console.log("You moused over my li!")})
document.querySelector("p").addEventListener("click", ()=>{document.querySelector("h1").textContent="You clicked my paragraph"})
document.querySelector("h1").addEventListener("click", () => {console.log("This is the second event listener")})

// event listeners were will fire on child elements whenever an event listener is actually called (it triggers)
document.querySelector("ol").addEventListener("click", ()=>{console.log("you clicked ol")})

/* ANOTHER WAY OF MODIFYING :

const title = document.querySelector("h1")
//default and first choice
title.textContent = "Whatever I want"

const list = document.querySelector("ol")
list.textContent
//don't use text content generally speaking on parent elements 
// only use it on elements that don't have any children on them

title.textContent = "Here's a link: <a href='https://www.google.com'></a>"
// output: Here's a link: <a href='https://www.google.com'></a>

//list.innerHTML = "<li>Replaces the original </li>"

document.querySelector("h1").textContent = "Cool Deal"

// all that's doing is updating this elements style tag (by adding these properties on style tag)
document.querySelector("ol").style.background = "green"
document.querySelector("ol").style.margin = "0px 100px"
*/

