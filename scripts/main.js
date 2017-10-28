//All Code is from mozilla's javaScript basics and modified to fit theme of website
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//Selects img elements
var myImage = document.querySelector('img');

//Adds an image change click event
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/walrus-cleaners.jpeg') {
      myImage.setAttribute ('src','images/walrus-buds.jpg');
    } else {
      myImage.setAttribute ('src','images/walrus-cleaners.jpeg');
    }
}

//Selects button and h1 elements
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//Creates personalized greeting
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Don't let a walrus ruin your next party, " + myName;
}

//Initializes the prompt Code
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//Sets and Changes the UserName
myButton.onclick = function() {
  setUserName();
}
