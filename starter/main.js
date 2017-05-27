// get the element with id 'canvas' form the DOM
// and save it to the variable named 'canvas'
var canvas = document.getElementById('canvas');

// set the heught and width of the canvas to the
// window's height and width
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// get the 2d context of the canvas, so we can interact with it
var context = canvas.getContext('2d');
