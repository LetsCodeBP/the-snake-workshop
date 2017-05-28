# JavaScript quick reference

## Vanilla ES5

# Building blocks

### Assign a value to variable
```javascript
var a = 'apple';
console.log(a); // -> apple

var x = 1;
console.log(x); // -> 1

var y = 2.3;
console.log(y); // -> 2.3
```

___

### Basic operations
```javascript
var x = 1;
var y = 3;
var z = 5;
var k = 6;

console.log(x + y); // -> 4

console.log(z - y); // -> 2

console.log(y * z); // -> 15

console.log(k / y); // -> 2

var a = 'apple';
var b = 'banana';

var c = a + b;
console.log(c); // -> 'applebanana'

var d = a + ' ' + b;
console.log(d); // -> 'apple banana'

```
___

### Array

```javascript
// empty array
var list = [];

// array with stuff
var shoppingList = ['apple', 'banana', 'orange'];

var apple = shoppingList[0];
var banana = shoppingList[1];
var orange = shoppingList[2];

// array indexing starts from 0!

// add stuff to the shopping list
shoppingList.push('kiwi');
console.log(shoppingList); // -> ['apple', 'banana', 'orange', 'kiwi']

// remove stuff by index
shoppingList.splice(0, 1);
console.log(shoppingList); // -> ['banana', 'orange', 'kiwi']

// change an element in the shopping list
shoppingList[0] = 'mango';
console.log(shoppingList); // -> ['mango', 'orange', 'kiwi']

var lengthOfTheShoppingList = shoppingList.length;
console.log(lengthOfTheShoppingList); // -> 3 !

```

___

### Object

```javascript

var user = {
  'firstName': 'John',
  'lastName': 'Doe',
  'age': 24,
  'born': '1993-05-20'
}

console.log(user.age); // -> 24
console.log(user.firstName + ' ' + user.lastName); // -> 'John Doe'

```

___

### Loops
```javascript
var shoppingList = ['apple', 'banana', 'orange'];

for (var i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

// 'apple'
// 'banana'
// 'orange'

var x = 0;

while (x < 10) {
  x++;
  console.log(x);
}

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

___

### Functions

```javascript

function add(x, y){
  return x + y;
}

console.log(add(1, 2)); // -> 3

function greeter(name){
  return 'Hello ' + name;
}

console.log(greeter('Joe')); // -> 'Hello Joe'

```

___

### Combined

```javascript

var shoppingList = {
  itemsToBuy: [],
  addToList: function(item) {
    this.itemsToBuy.push(item);
  },
  removeByIndex: function(index) {
    this.itemsToBuy.splice(index, 1);
  }
};

shoppingList.addToList('apple');

console.log(shoppingList.itemsToBuy); // -> ['apple']

var stuffForJuice = ['banana', 'kiwi', 'cinnamon'];

for (var i = 0; i < stuffForJuice.length; i++) {
  shoppingList.addToList(stuffForJuice[i]);
}

console.log(shoppingList.itemsToBuy); // -> ['apple', 'banana', 'kiwi', 'cinnamon']

var counter = 0;

while (shoppingList.itemsToBuy.length > 0) {
  shoppingList.removeByIndex(counter);
  counter++;
}

console.log(shoppingList.itemsToBuy); // -> []
console.log(shoppingList.itemsToBuy.length); // -> 0

```
