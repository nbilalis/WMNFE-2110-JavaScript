name: common
layout: true
class: common

.logo-sae[![SAE Logo](img/logo-sae.png)]
.logo-web[![WEB logo](img/logo-web.png)]

.ruler.one[· · · · · · · ·]
.ruler.two[· · · · · · · ·]
.ruler.three[· · · · · · · ·]
.ruler.four[· · · · · · · ·]
.ruler.five[· · · · · · · ·]
.ruler.six[· · · · · · · ·]
.ruler.seven[· · · · · · · ·]

.footer[Nikos Bilalis - n.bilalis@sae.edu]

---
name: cover
layout: true
template: common
class: cover

---
name: section
layout: true
template: common
class: section, center, middle

---
name: section-details
layout: true
template: common
class: section-details, topbar-space

---
name: chapter
layout: true
template: common
class: chapter, topbar-space

---
name: list
layout: true
template: common
class: list, topbar-space

---
template: cover

## WMNFE2110 | FRONT-END DEVELOPMENT

# JavaScript #5

### Functions

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Γενικά
  - Returning / Non-returning
  - Παράμετροι
- Built-in / API
  - Global
  - Window
  - Math
  - String / Array
  - Document
  - Console

---
template: section

## Functions

---
layout: true
template: chapter

### Functions

---

#### Μία συνάρτηση

- είναι ένα βασικό δομικό στοιχείο ενός προγράμματος.
- είναι ένα σύνολο από εντολές, που μπορούν να κληθούν με την χρήση από διάφορα σημεία του κώδικα
- βοηθά στην οργάνωση του κώδικα.
- μπορεί να εκτελεί συγκεκριμένες πράξεις, ελέγχους ή διαδικασίες.
- μπορεί να δέχεται παραμέτρους και να δίνει ανάλογα αποτελέσματα.

---

#### Σύνταξη

```js
function functionName(<params>) {
  // κώδικας της συνάρτησης
}

// ES5 - function expression / anonymous function
const functionName = function() {
  // κώδικας της συνάρτησης
};

// ES6 - arrow function
const functionName = () => {
  // κώδικας της συνάρτησης
};

```

---

#### Συναρτήσεις τύπου `void` / `non-returning`

- Οι συγκεκριμένες συναρτήσεις ορίζονται και καλούνται μέσα στον κώδικα μας. Δεν επιστρέφουν κάποιο αποτέλεσμα πράξεων, απλά εκτελούν μια σειρά από ενέργειες. Σε ορισμένες γλώσσες προγραμματισμού, μια τέτοια συνάρτηση ονομάζεται **διαδικασία**.
- Π.χ. `Window.alert()` κ.α.

---

#### Συναρτήσεις τύπου `returning`

- Εκτελούν συγκεκριμένες πράξεις και επιστρέφουν ένα αποτέλεσμα μέσω της εντολής `return` (_συχνά_ στο τέλος της συνάρτησης).
- Οι συναρτήσεις αυτές είναι συνήθως αυτόνομες (δεν κάνουν κλήση σε κώδικα ή αναφορά σε μεταβλητές έξω από αυτές) και έχουν σκοπό να επιστρέψουν μια τιμή.
- Π.χ. `Window.prompt()`, `Number.isNaN()` κ.α.

---
class: long-text

#### Παράμετροι

- Οι συναρτήσεις, ανεξάρτητα από το είδος τους, μπορούν να πάρουν ως είσοδο μία ή περισσότερες παραμέτρους.
- Οι παράμετροι αυτοί ορίζονται μέσα στις παρενθέσεις που βρίσκονται δίπλα στο όνομα της συνάρτησης.
- Οι παράμετροι που ορίζονται στις παρενθέσεις αντιστοιχούν με τα δεδομένα (μεταβλητές, τιμές) που θα χρησιμοποιήσουμε όταν καλούμε την συνάρτηση.
- Το πλήθος των παραμέτρων μπορεί να είναι, θεωρητικά, άπειρο.
- Καμία παράμετρος δεν είναι υποχρεωτική, όποια δεν πάρει τιμή θα παραμείνει ως `undefined`.
- Η σειρά με την οποία ορίσαμε τις παραμέτρους, είναι και η σειρά που θα περάσουμε τις τιμές.

---

#### Παράδειγμα #1

```js
function greet(name) {
  alert('Καλωσήλθες ' + name + '!');
}

greet('John Doe');
greet('Joan Doe');

```

---

#### Παράδειγμα #2

```js
function multiply(a, b) {
  return a * b;
}

let x = multiply(4, 3);
let y = multiply(5, 9);

```

---

#### Παράδειγμα #3

```js
function greetBob() {
  let person = prompt("Please enter your name:");

  if (person === "Bob") {
    alert("Welcome Bob!");
  } else {
    alert("I don't know you…");
  }
}

greetBob();

```

---

#### Παράδειγμα #4

```js
function average(x, y, z) {
  return (x + y + z) / 3;
}

console.log(average(5, 7, 4));

```

---

#### Παράδειγμα #5

```js
function myMin(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// Here be dragons
// const myMin = (x, y) => x < y ? x : y;

console.log(myMin(5, 7));

```

---

#### Παράδειγμα #6

```js
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// Here be dragons
// const toCelsius = f => (5/9) * (f-32);

const input = prompt('Temperature in fahrenheit:');
const f = parseInt(input);

alert(`Temperature in celsius: ${toCelsius(f)}`);

```

---
template: section

## Global Functions

---
layout: true
template: chapter

### Global Functions

---

#### Αριθμητικές συναρτήσεις

- `parseInt`<br>
  Αναλύει μια συμβολοσειρά και επιστρέφει έναν ακέραιο.
- `parseFloat`<br>
  Αναλύει μια συμβολοσειρά και επιστρέφει έναν αριθμό κινητής υποδιαστολής.
- `isNaN`<br>
  Ελέγχει εάν μια τιμή είναι μη έγκυρος αριθμός.

**Σημ.**: `isNaN` ≠ `Number.isNaN`

---

#### Παράδειγμα #1

```js
let a = parseInt('10');
let b = parseInt('10.00');
let c = parseInt('10.33');
let d = parseInt('34 45 66');
let e = parseInt(' 60 ');
let f = parseInt('40 years');
let g = parseInt('He was 40');

console.log(a, b, c, d, e, f, g);

```

---

#### Παράδειγμα #2

```js
let a = parseFloat('10');
let b = parseFloat('10.00');
let c = parseFloat('10.33');
let d = parseFloat('34 45 66');
let e = parseFloat(' 60 ');
let f = parseFloat('40 years');
let g = parseFloat('He was 40');

console.log(a, b, c, d, e, f, g);

console.log(isNaN(a));
console.log(isNaN(g));

```

---
template: section

## Window Functions

---
layout: true
template: chapter

### Window Functions

---

#### Συναρτήσεις πλαισίων διαλόγου

- `window.alert`<br>Εμφανίζει ένα πλαίσιο προειδοποίησης.
- `window.prompt`<br>Εμφανίζει ένα πλαίσιο διαλόγου, που ζητά από το χρήστη να εισάγει κάποιο κείμενο
- `window.confirm`<br>Εμφανίζει ένα πλαίσιο διαλόγου, με τις επιλογές _'OK'_ και _'Cancel'_

---

#### Παράδειγμα

```js
const answer = prompt('What is your age?', 18);
const age = parseInt(answer);

if (age >= 18) {
  if (confirm('Do you promise you are over 18?')) {
    alert('Welcome');
  }
}

```

---

#### Συναρτήσεις χρονόμετρου

- `window.setTimeout`<br>
  Καλεί μια συνάρτηση (ή εκτελεί μια "παράσταση") **μετά** από έναν καθορισμένο αριθμό milliseconds
- `window.setInterval`<br>
  Καλεί μια συνάρτηση (ή εκτελεί μια "παράσταση") **ανά** έναν καθορισμένο αριθμό milliseconds

---

#### Παράδειγμα

```js
function alarm() {
  alert('Wake up!');
}

// One-shot timer
setTimeout(alarm, 2000);

// Interval timer
let snoozer = setInterval(alarm, 5000);

// Επαναλαμβάνεται μέχρι να καλέσουμε:
clearInterval(snoozer);

```

---
template: section

## Math Functions

---
layout: true
template: chapter

### Math Functions

---

#### Μαθηματικές συναρτήσεις

- `Math.abs` - Απόλυτη τιμή
- `Math.pow` - Ύψωση σε δύναμη
- `Math.sqrt` - Τετραγωνική ρίζα
- `Math.min` - Ελάχιστο στοιχείο
- `Math.max` - Μέγιστο στοιχείο

---

#### Παράδειγμα #1

```js
let radius = prompt('Radius of the circle: ', 0);

let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

console.log(circumference, area);

```

---

#### Παράδειγμα #2

```js
console.log(Math.abs(-101));    // result is 101

let max = Math.max(21, 22);     // result is 22
let min = Math.min(30.1, 30.2); // result is 30.1

console.log(max, min);

// Something extra
let a = 5.000001, b = 4.999999;
let floatEqual = Math.abs(a - b) < 0.001;

console.log(Math.max(a, b), Math.min(a, b));

```

---

#### Μαθηματικές συναρτήσεις

- `Math.random`<br>
  Τυχαία τιμή μεταξύ `0` και `1` (χωρίς το `1`)
- `Math.round`<br>
  Στρογγυλοποίηση στον κοντινότερο ακέραιο
- `Math.floor`<br>
  Στρογγυλοποίηση σε ακέραιο, "προς τα κάτω"
- `Math.ceil`<br>
  Στρογγυλοποίηση σε ακέραιο, "προς τα πάνω"

**Σημ.**: `Number.prototype.toFixed`<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Στρογγυλοποίηση σε συγκεκριμένο αριθμό δεκαδικών

---

#### Παράδειγμα #1

```js
let a = Math.random();

console.log(a);
console.log(Math.round(a));
console.log(Math.floor(a));
console.log(Math.ceil(a));

console.log(a.toFixed(2)); //  Number.prototype

```

---

#### Παράδειγμα #2

```js
for (let i = 0; i < 10; i++) {
  let dice_roll = Math.floor(Math.random() * 6) + 1;
  console.log(dice_roll);
}

// Math.round() ∈ [0, 1)
// Math.round() * 6 ∈ [0, 6)
// Math.round() * 6 + 1 ∈ [1, 7) <=> [1, 6]

```

---
template: section

## String/Array Functions

---
layout: true
template: chapter

### String/Array Functions

---

#### Συναρτήσεις αναζήτησης

- `indexOf`<br>
  αναζητά και επιστρέφει τη πρώτη θέση ενός στοιχείου σε ένα κείμενο ή πίνακα
- `lastIndexOf`<br>
  αναζητά και επιστρέφει τη τελευταία θέση ενός κομμάτι κειμένου σε ένα κείμενο

---

#### Συναρτήσεις συνένωσης και διαχωρισμού

- `split`<br>
  Διαχωρίζει ένα αλφαριθμητικό σε περισσότερα, βάσει κάποιου διαχωριστή/οριοθέτη, και επιστρέφει τα αποτελέσματα σε πίνακα
- `join`<br>
  Συνενώνει τα στοιχεία ενός πίνακα, με τη χρήση κάποιου διαχωριστή/οριοθέτη, και επιστρέφει ένα αλφαριθμητικό

---

#### Παράδειγμα #1

```js
let ipsum = 'December frosty jingle bells gift '
ipsum    += 'december chestnuts gold december.';

console.log(text.indexOf('December'));
console.log(text.indexOf('december'));

console.log(text.lastIndexOf('december'));

```

---

#### Παράδειγμα #2

```js
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];

let place = planets.indexOf('Earth') + 1;
place += place === 1 ? 'st' :
         place === 2 ? 'nd' :
         place === 3 ? 'rd' : 'th';

console.log(`Earth is in ${place} place.`);

```

---

#### Παράδειγμα #3

```js
const input = prompt('Enter firstname & lastname:');
const details = input.split(',');

console.log(`Firstname: ${details[0]}`);
console.log(`Lastname: ${details[1]}`);

```

---

#### Παράδειγμα #3

```js
const grades = [18, 17, 19, 18, 20];

console.log(`Your grades are ${grades}.`);
console.log(`Your grades are ${grades.join(', ')}.`);
console.log(`Your grades are ${grades.join('-')}.`);

```

---
template: section

## Document Functions

---
layout: true
template: chapter

### Document Functions

---
class: extra-long-text

#### DOM συναρτήσεις

- `document.write`<br>
  ≪γράφει≫ ένα κομμάτι κειμένου σε μία ροή κειμένου (`stream`)
- `document.getElementById`<br>
  επιστρέφει ένα αντικείμενο βάσει ενός αναγνωριστικού (`id`)
- `document.querySelector`<br>
  επιστρέφει ένα αντικείμενο βάσει ενός επιλογέα (`selector`)
- `document.getElementsByName`<br>
  επιστρέφει μία συλλογή αντικειμένων βάσει του ονόματός τους
- `document.getElementsByTagName`<br>
  επιστρέφει μία συλλογή αντικειμένων για τη δεδομένη ετικέτα (`tag`)
- `document.getElementsByClassName`<br>
  επιστρέφει μία συλλογή αντικειμένων για τη δεδομένη κλάση (`class`)
- `document.querySelectorAll`<br>
  επιστρέφει μία λίστα αντικειμένων βάσει ενός επιλογέα (`selector`)

---

#### Παράδειγμα #1

```js
document.write("<h1 id='header'>Hello!</h1>");
document.write("<p>It's me.</p>");

const el = document.getElementById('header');

el.textContent = 'Hello you!';
el.style.color = '#b00';

```

---

#### Παράδειγμα #2

```js
const elements = document.getElementsByTagName('a');

for (let el of elements) {
  el.target = `_blank`;
  console.log(el.text);
}

```

---

#### Παράδειγμα #3

```js
const el = document.querySelector('input[type="submit"]');

el.disabled = 'disabled';
el.classList.add('gray');

```

---
template: section

## Console Functions

---
layout: true
template: chapter

### Console Functions

---
class: long-text

#### Συναρτήσεις εκσφαλμάτωσης

- `console.log`<br>
  Εμφανίζει ένα ή περισσότερα στοιχεία στην ≪κονσόλα≫ του browser
- `console.warn`<br>
  Εμφανίζει ένα ή περισσότερα στοιχεία στην ≪κονσόλα≫ του browser,<br>
  ως προειδοποίηση
- `console.error`<br>
  Εμφανίζει ένα ή περισσότερα στοιχεία στην ≪κονσόλα≫ του browser,<br>
  ως σφάλμα
- `console.time` & `console.timeEnd`<br>
  Ξεκινά και σταματά, αντίστοιχα, ένα χρονόμετρο και στο τέλος επιστρέφει το χρόνο που διανύθηκε σε ms

---
template: section

## Classwork

---
template: chapter

### Classwork #1

#### Carousel

Φτιάξτε μία `HTML` σελίδα που θα εμφανίζει μία εικόνα η οποία θα αλλάζει αυτόματα κάθε μερικά δευτερόλεπτα.

Μπορείτε να βρείτε τυχαίες εικόνες από εδώ: [https://picsum.photos/](https://picsum.photos/)

---
template: chapter

### Classwork #2

#### Ζάρια

Φτιάξτε μία `HTML` σελίδα που θα προσομοιώνει τη ρίψη δύο ζαριών, κάθε φορά που φορτώνει/ανανεώνεται η σελίδα.

Μπορείτε να βρείτε εικόνες για τα ζάρια από εδώ:
[https://commons.wikimedia.org/wiki/Category:Dice_faces](https://commons.wikimedia.org/wiki/Category:Dice_faces)

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---

#### Homework #1

Γράψτε μία συνάρτηση, με το όνομα `longestWord`, η οποία να δέχεται ένα κείμενο (`string`) και να επιστρέφει το μήκος της «μεγαλύτερης» λέξης μέσα σε αυτό.

---
class: extra-long-text

#### Homework #2 (1/2)

Φτιάξτε ένα `script` που να δέχεται ένα λεκτικό από το χρήστη και θα ελέγχει αν το λεκτικό αυτό περιέχει μη επιτρεπόμενους χαρακτήρες. Ο έλεγχος αυτός πρέπει να γίνεται με τη βοήθεια μιας συνάρτησης, όπως αυτή φαίνεται παρακάτω:

```js
// Should return true/false
function containsNotAllowedChars(input) {
  const notAllowedChars = ['<', '>', '@', '#'];
  ...
}

```

Η συνάρτηση μπορεί να παίρνει έναν-έναν τους χαρακτήρες του λεκτικού και να ελέγχει αν υπάρχουν στον πίνακα ή το ανάποδο. Αν βρεθεί μη επιτρεπτός χαρακτήρας θα πρέπει να επιστρέφεται η τιμή `true`, αλλιώς η τιμή `false`.

Η όλη διαδικασία επαναλαμβάνεται μέχρι να δοθεί έγκυρο λεκτικό από το χρήστη.

---

#### Homework #2 (2/2)

Για να ελέγξετε τη συνάρτηση που φτιάξατε μπορείτε να εκτελέσετε το παρακάτω:

```js
if (!containsNotAllowedChars('This is a test') &&
     containsNotAllowedChars('This is a <test>') &&
     containsNotAllowedChars('This is @ test') &&
     containsNotAllowedChars('T#is is a test'))
{
  alert('All good!');
} else {
  alert('Something is not right');
}

```

---
template: list

### Χρήσιμα links (1/2)

- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Functions https://javascript.info/function-basics
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Functions https://www.w3schools.com/js/js_functions.asp
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Function expressions https://javascript.info/function-expressions
- ![favicon](https://www.google.com/s2/favicons?domain=javascripttutorial.net) JavaScript Anonymous Functions https://www.javascripttutorial.net/javascript-anonymous-functions/
- ![favicon](https://www.google.com/s2/favicons?domain=medium.com) ES5 vs. ES6: Functions. ES5 vs. E6: Functions https://medium.com/@zac_heisey/es5-vs-es6-functions-cb51536002ee
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) String - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Array - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

---
template: list

### Χρήσιμα links (2/2)

- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Standard built-in objects - JavaScript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Global Reference https://www.w3schools.com/jsref/jsref_obj_global.asp
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Numbers https://javascript.info/number
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Interaction: alert, prompt, confirm https://javascript.info/alert-prompt-confirm
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Popup Boxes https://www.w3schools.com/js/js_popup.asp
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Searching: getElement\*, querySelector\* https://javascript.info/searching-elements-dom
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Document.getElementById() - Web APIs https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) HTML DOM Document Objects https://www.w3schools.com/jsref/dom_obj_document.asp

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Arrow functions, the basics https://javascript.info/arrow-functions-basics
- ![favicon](https://www.google.com/s2/favicons?domain=sitepoint.com) Arrow Functions: Fat and Concise Syntax in JavaScript https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
- ![favicon](https://www.google.com/s2/favicons?domain=stackoverflow.com) javascript - parseInt vs unary plus, when to use which? - Stack Overflow https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which

---
template: section

## Thank You!
