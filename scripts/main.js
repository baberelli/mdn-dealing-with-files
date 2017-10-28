var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


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
