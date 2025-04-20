/*
    DOM (Document Object Model) - Allows us to interact with and change the content and styles
    of the elements on our webpage
*/

// 1st method - PREFERRED WAY 
// document gives the entire HTML document
// querySelector grabs a specific element within the HTML document - 1 arguement is the element by class name(.), id name (#), or element tag
console.log(document.querySelector('#heading'));

// 2nd method
// Same way of using document, but now we use the getElementById() - also takes in one arguement (the ID of the element)
console.log(document.getElementById('heading'));

// What can we do with accessing the element - can also add to the end of the h1 by += instead of =
// Change content/html
document.querySelector('h1').innerHTML = " Tigers beat the KC Royals with a score of 3-1 today";

// Change CSS/styling
document.querySelector('h1').style.fontSize = '20px';
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.textAlign = 'center';

// EVENT LISTENERS
// 1st method inline HTML
// const changeButtonToGreen = () => {
//     document.querySelector('button').style.backgroundColor = "green";
// }

// 2nd method - PREFERRED WAY 
// Target the element and store it in a variable for DRY

const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
});

// Change class names using JavaScript - sidebar example - toggle will add AND remove the class name when the event is fired
// this helps with having one function to open and close the sidebar
const sidebarButton = document.querySelector('.examplebutton');

sidebarButton.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('open');
});
