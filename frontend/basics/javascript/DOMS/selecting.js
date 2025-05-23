// Select first h1 object
// my title is an object it has a style property and inside the style
// of property are a lot of other properties including background color 
const myTitle = document.querySelector("h1");
// Modify 
myTitle.style.backgroundColor = "green";

// Select first p object
const myParagraph = document.querySelector("p")
// Modify
myParagraph.style.color = "orange";

/* DOM METHODS
 There are two steps to updating the Dom to modifying the Dom using JavaScript: 
1. selecting to select the element or elements that you want to modify 
2. actually modify those elements 
In the Dom there is a root object the document and document is created for every single website. 
All of these selectors we're going to talk about are our methods on the document objects.
Methods are just functions that are attached to objects.
So we have the document object and on there we have several different methods that are 
functions used to select parts of that object. 
*/

// Most common 5 Methods
//1) getElementById: it gets a single element by id
document.getElementById("my-id")

//2) getElementsByClassName: it returns a HTML collection of all elements that have P tag as a class name 
const paragraphs= document.getElementsByClassName("p-tag") 
console.log(paragraphs[0])

//3) getElementsByTagName : returns  a HTML collection of all elements are h1 
const myh1s = document.getElementsByTagName("h1") 

//4) querySelector: takes one of the css selector as an input and returns first item that meets the criteria
const firstTitle = document.querySelector("h1")
const firstTitle2 = document.querySelector("#my-id")
const firstTitle3 = document.querySelector(".p-tag")

//5) querySelectorAll: takes one of the css selector as an input and 
// returns a node list instead of HTML collection whih includes all items that meet the criteria
const allH1s = document.querySelectorAll("h1")

// 
const allLiTags = document.getElementsByTagName("li")

allLiTags.forEach() // ERROR
// Instead...
const myLis = Array.from(allLiTags)
myList.forEach()