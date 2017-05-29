# Reference

A collection of some javascript syntax that you might need through the workshop.

## Canvas

### Draw a rectangle

```javascript
/* draw a filled rectangle of size width and height to coordinates x and y.
 * Note: fillRect expects real coordinates in pixels!
 * Parameters
 *  x:      The x-coordinate of the upper-left corner of the rectangle
 *  y:      The y-coordinate of the upper-left corner of the rectangle
 *  width:  The width of the rectangle, in pixels
 *  height: The height of the rectangle, in pixels
 */
context.fillRect(x, y, width, height);

// bonus:
// you can change the color to something cool before drawing with:
context.fillStyle = "crimson ";
// more on name colors here: https://www.w3schools.com/colors/colors_names.asp
```

### Clear the board

```javascript
/* clearRect clears a specific rectangular area within the context.
 * Parameters
 *  x:      The x-coordinate of the upper-left corner of the rectangle to clear
 *  y:      The y-coordinate of the upper-left corner of the rectangle to clear
 *  width:  The width of the rectangle to clear, in pixels
 *  height: The height of the rectangle to clear, in pixels
 */
context.clearRect(x, y, width, height);
```

## Events

```javascript
/* addEventListener attaches a listener to a given object. It requires two parameters:
 * Parameters:
 *  event:    A String that specifies the name of the event.
 *  function:  Specifies the function to run when the event occurs.
 *  Note: addEventListener also has a third parameter wich is not required, and we won't need it for this worskshop. If you are interested in it you can read more about it here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 */
EventTarget.addEventListener(event, function);

// you will probably what to use it as the following:

window.addEventListener('keydown', function(event){
  // Note: this function's context is the window object, the this keyword will point to the window object
  switch(event.key){
    case 'ArrowRight':
      // do stuff to change the snake's direction
      break;
    case 'ArrowLeft':
      // do stuff to change the snake's direction
      break;
    case 'ArrowUp':
      // do stuff to change the snake's direction
      break;
    case 'ArrowDown':
      // do stuff to change the snake's direction
      break;
  }
})
```
<details>
In the above example you might be unfamiliar with two things: _window_ and the switch statement.  

**Some explanation on them:**  
The window object represents an open window in a browser.
It also contains globally declared variables (eg. variables not declared inside of functions or other statements).

The **switch** statement is used to perform different actions based on different conditions.  

This is how it works:  

- The switch expression is evaluated once.   
- The value of the expression is compared with the values of each case.  
- If there is a match, the associated block of code is executed.  

Note: you need to use the _break_ keyword to prevent the evaluation of the other cases if one of the cases is entered.
</details>  

## Random number

```javascript
// Use the following statement to produce a random number within 0 and 1:
Math.random();
```

Please see the [js_quick_reference.md](js_quick_reference.md) file to see a description about loops and array operations in js.
