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

## WMNFE2010 | FRONT-END DEVELOPMENT

# JavaScript #11

### JavaScript Objects

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- `JavaScript` Objects
  - Instantiation
  - Properties
  - Methods
  - `this` keyword
  - Constructor function

---
template: section

## `JavaScript` Objects

---
layout: true
template: chapter

### `JS` Objects

---

#### Data Types

Αν εξαιρέσουμε τα `7` _primitive data types_ της `JavaScript` <nobr>(`number`, `string`, `boolean`, `bigint`, `symbol`, `undefined`, `null`)</nobr>.

Όλα τα υπόλοιπα είναι αντικείμενα:

- Σχεδόν οτιδήποτε μπορεί να δημιουργηθεί με το keyword `new` (`Array`, `Date` κ.λπ.)
- Οι συναρτήσεις (παρόλο που στη χρήση του τελεστή `typeof` απαντούν με `function`)

Ο τύπος `null` ανήκει στα _primitive data types_, παρόλο που <nobr>`typeof null === 'object'`</nobr>!.

---

#### OOP

Η JavaScript δεν είναι μια "τυπική" αντικειμενοστρεφής γλώσσα, όπως οι `Java`, `C#` κ.α.

- Ή τουλάχιστον δεν ήταν μέχρι την έκδοση _ECMAScript 2015_, όπου πλέον υπάρχει και το keyword `class`.
- Πριν την έκδοση αυτή, οι αντικειμενοστρεφής της ιδιότητες προέκυπταν από τα `Prototypes`.

Έχουμε συναντήσει ήδη αρκετά `Objects`

- `Αrray`, `Document`, `Element` κ.λπ.

---
template: section

## Instantiation

---
layout: true
template: chapter

### Instantiation

---

Δύο βασικοί τρόποι δημιουργίας ενός αντικειμένου:

```js
const obj = new Object();

obj.property1 = value1;
obj.property2 = value2;

```

```js
// JSON

const obj = {
  property1: value1,
  property2: value2
};

```

---

#### Παράδειγμα #1

```js
let student = new Object();

student.firstname = 'Joan';
student.lastname = 'Doe';
student.age = 21;

```

---

#### Παράδειγμα #2

```js
let student = {
  firstname: 'Joan',
  lastname: 'Doe',
  age: 21
};

```

---
template: section

## Properties

---
layout: true
template: chapter

### Properties

---

#### Γενικά

- Αυτό που χαρακτηρίζει ένα αντικείμενο, είναι οι ιδιότητές του.
- Πρόκειται για τιμές που σχετίζονται με/ανήκουν σε συγκεκριμένο αντικείμενο.
- Η προσπέλαση σε αυτές γίνεται:
  - με το _dot notation_, π.χ. `array.length`
  - με το _square bracket notation_, π.χ. `element['value']`

---

#### Παραδείγματα

```js
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);

const form = document.getElementById('my-form');
console.log(form.elements['firstname'].value);

```

---

#### Συλλογή από `key-value` pairs

- Τα αντικείμενα στη `JavaScript` μπορούν να θεωρηθούν και ως συλλογές από ιδιότητες, τις οποίες μπορείς να προσπελάσεις με κάποιο _κλειδί_
  - Σε αντίθεση με τους πίνακες, όπου χρησιμοποιείς τη _θέση_
- Είναι κοντά σε έννοιες όπως `dictionary` / `property bag` κ.α.
  - Από την έκδοση _ECMAScript 2015_ υπάρχουν και τα αντικείμενα `Map`&nbsp;και&nbsp;`Set`

---

#### Παράδειγμα #1

Καμιά φορά θυμίζουν πίνακες ή άλλες δομές...

```js
const studentNames = [
  "Luke Skywalker",
  "Darth Vader",
  "Leia Organa"
];
console.log(studentNames[0]);

const studentNames = {
  s001: "Luke Skywalker",
  s002: "Darth Vader",
  s003: "Leia Organa"
};
console.log(studentNames["s001"]);

```

---

#### Παράδειγμα #2

... αλλά δεν είναι αυτή η κύρια "αποστολή" τους

```js
const brands = [
  "Audi",
  "Mercedes",
  "Volkswagen"
];
console.log(brands[1]);

const car = {
  brand: "Audi",
  model: "R8",
  color: "Red"
};
console.log(car["model"]);

```

---
template: section

## Methods

---
layout: true
template: chapter

### Methods

---

#### Γενικά

- Οι μέθοδοι είναι ενέργειες που αφορούν σε κάποιο αντικείμενο
- Είναι στην ουσία ιδιότητες οι οποίες περιέχουν τον ορισμό μιας συνάρτησης
- Έχουν άμεση πρόσβαση στις άλλες ιδιότητες του αντικειμένου

---

#### Παράδειγμα #1

```js
let user = {
  firstname: "Slim",
  lastname: "Shady",
  greet() {
    alert(`My name is ${this.firstname} ${this.lastname}`);
  }
};

user.greet();

```

---

#### Παράδειγμα #2

```js
let car = {
  brand: "Mercedes",
  model: "SLK 55 AMG",
  color: "Black",
  paint: function(newColor) { this.color = newColor; }
};

console.log(car.color);
car.paint('Red');
console.log(car.color);

```

---
template: section

## `this` keyword

---
layout: true
template: chapter

### `this` keyword

---

#### Γενικά

- Με τη λέξη-κλειδί `this` έχουμε πρόσβαση στο πλαίσιο (_context_) εκτέλεσης κάποιου τμήματος κώδικα
- Στα πλαίσια μιας συνάρτησης, αφορά στον τρόπο που εκτελέστηκε η συνάρτηση αυτή
  - Π.χ. στα πλαίσια ενός _event handler_, μέσω του `this` έχουμε πρόσβαση στο στοιχείο που αφορά το γεγονός
    - Προσοχή με τις _arrow functions_
- Στα πλαίσια ενός αντικειμένου, μπορούμε να έχουμε πρόσβαση στις ιδιότητές του

---

#### Context

Αναλόγως το πλαίσιο (_context_) το οποίο χρησιμοποιείται, αναφέρεται και σε διαφορετικό αντικείμενο.

![](assets/lecture-11/img/this.png)

---
template: section

## Constructor function

---
layout: true
template: chapter

### Constructor function

---

#### Γενικά

Με την σύνταξη `{...}` μπορούμε να φτιάχνουμε ένα αντικείμενο "τη&nbsp;φορά".

Αν έχουμε σκοπό να δημιουργήσουμε πολλά παρόμοια αντικείμενα, είναι χρήσιμο να δημιουργήσουμε μια `constructor function` για αυτή τη δουλειά, και να την καλούμε με τον τελεστή `new`.

Εξασφαλίζουμε ίδια δομή σε όλα τα αντικείμενα, και δεν επαναλαμβάνουμε κώδικα άσκοπα.

---

#### Παράδειγμα #1

```js
function Car(b, m, c) {
  this.brand = b;
  this.model = m;
  this.color = c;
}

let car1 = new Car('Audi', 'R8', 'Silver');
let car2 = new Car('Ferrari','488 GT','Red');

console.log(car1);
console.log(car2);

```

---

#### Παράδειγμα #2

```js
function Warning(message) {
  this.prefix = "ΠΡΟΣΟΧΗ: ";
  this.message = message;
  this.show = function () {
    alert(`${this.prefix}: ${this.message}!`);
  };
}

let warn1 = new Warning('Έρχεται κακοκαιρία');
warn1.show();

let warn2 = new Warning('Άκουσα κάποιον να βήχει');
warn2.show();

```

---

#### Σημείωση

Στο προηγούμενο παράδειγμα, θα ήταν ίσως προτιμότερο να χρησιμοποιηθεί το εξής:

```js
Warning.prototype.show = function () {
  alert(`${this.prefix}: ${this.message}!`);
};
```

---
template: section

## Homework

---
layout: true
template: chapter
class: compact

---

### Homework #1

#### Triangle

Δημιουργήστε ένα script στο οποίο θα ορίζεται μία `constructor function` με όνομα _Triangle_.

Τα αντικείμενα που θα δημιουργεί η `function` αυτή θα πρέπει να έχουν δύο ιδιότητες, τις `base` και `height`, καθώς και μία μέθοδο `area()`. Η μέθοδος αυτή θα πρέπει να υπολογίζει και θα επιστρέφει το εμβαδόν του τριγώνου.

**Σημείωση**: `εμβαδό τριγώνου = βάση * ύψος / 2`

---

### Homework #2

#### ImageGallery

Δημιουργήστε ένα script στο οποίο θα ορίζεται μία `constructor function` με όνομα _ImageGallery_.

Ορίστε όσες ιδιότητες (`properties`) και όσες μεθόδους (`methods`) θέλετε μέσα σε αυτή, οι οποίες θεωρείτε πως θα ήταν χρήσιμες σε ένα τέτοιο αντικείμενο.

---
template: list

### Χρήσιμα links

- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) JavaScript data types and data structures - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- ![eloquentjavascript.net](https://www.google.com/s2/favicons?domain=eloquentjavascript.net) Data Structures: Objects and Arrays :: Eloquent JavaScript https://eloquentjavascript.net/04_data.html
- ![javascript.info](https://www.google.com/s2/favicons?domain=javascript.info) Constructor, operator "new" https://javascript.info/constructor-new
- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Working with objects - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

---
template: list

### Extra info

- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Object prototypes - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Map - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Classes - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- ![infoworld.com](https://www.google.com/s2/favicons?domain=www.infoworld.com) What is JSON? A better format for data exchange | InfoWorld https://www.infoworld.com/article/3222851/what-is-json-a-better-format-for-data-exchange.html

---
template: section

## Thank You!
