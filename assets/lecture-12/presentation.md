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

# JavaScript #12

### Classes

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Classes
  - Γενική σύνταξη
  - Properties
  - Getters/Setters
  - Methods

---
template: section

## Classes

---
layout: true
template: chapter

### Classes

---
class: extra-long-text, long-code

#### Γενική σύνταξη

Οι κλάσεις είναι πρότυπα για τη δημιουργία αντικειμένων.
Εκτός από τη χρήση μιας `constructor function`, ένας πιο σύγχρονος τρόπος είναι η δήλωση μιας κλάσης με τα keyword `class`, `constructor` κ.λπ.

```js
class SomeClass {
  constructor() {
    ...
  }

  method1() {
    ...
  }

  method2() {
    ...
  }
}

```

---

#### Παράδειγμα

```js
class Pet {
  constructor(name) {
    this.name = name;
  }
}

const myPet = new Pet('Charlie');

```

---

#### `constructor`

Ο κώδικας που υπάρχει μέσα στην ειδική μέθοδο `constructor` εκτελείται κατά την κατασκευή κάθε αντικειμένου της κλάσης και αφορά στο συγκεκριμένο αντικείμενο.

```js
class User {
  constructor(name) {
    this.name = name;

    console.log(`Welcome ${this.name}!`);
  }
}

```

---
template: section

## Properties

---
layout: true
template: chapter

### Properties

---

#### Δήλωση

Οι ιδιότητες της κλάσης ορίζονται μέσα στον "_κατασκευαστή_", με το keyword `this` και την ανάθεση τιμών σε αυτές.

```js
class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;

    this.stock = 0;
  }
}

```

---
class: extra-long-text, extra-long-code

#### Getters / Setters

Μπορούμε να ορίσουμε/ελέγξουμε την προσπέλαση στις ιδιότητες μιας κλάσης, με τον ορισμό κατάλληλων `getters`/`setters`.

Προσοχή, μη μας μπερδεύει το γεγονός πως η δήλωση τους θυμίζει μεθόδους.

```js
class Product {
  ...

  get stock() {
    return this._stock;
  }

  set stock(value) {
    if (value >= 0) {
      this._stock = value;
    }
  }
}

```

---

#### Getters / Setters

Το κομμάτι `get` καλείται όταν προσπελαύνουμε την τιμή μιας ιδιότητας, ενώ το κομμάτι `set` όταν γίνεται ανάθεση νέας τιμής στην ιδιότητα αυτή.

Αν το κομμάτι `get` απουσιάζει η ιδιότητα επιτρέπει μόνο την "ανάγνωση", αν και πρακτικά δεν μπορούμε να αποτρέψουμε την προσπέλαση στο πεδίο που κρύβεται από πίσω.

```js
const car = new Car();

car.price = 10000;      // setter will be called
console.log(car.price); // getter will be called

```

---
template: section

## Methods

---
layout: true
template: chapter

### Methods

---
class: extra-long-text, extra-long-code

#### Δήλωση

Άλλο βασικό στοιχείο μιας κλάσης, εκτός των ιδιοτήτων, είναι οι μέθοδοι. Δηλώνονται ως συναρτήσεις μέσα στο σώμα της κλάσης.

Οι μέθοδοι προσδιορίζουν τις λειτουργίες και τη συμπεριφορά των αντικειμένων μιας κλάσης.

```js
class Rectangle() {
  constructor(a) {
    this.a = a;
  }

  calculateArea() {
    return this.a * this.a;
  }

  draw(canvas) {
    ...
  }
}
```

---
template: section

## Classwork

---
layout: true
template: chapter
class: compact

---

### Classwork

Κάντε τις απαραίτητες αλλαγές στην εργασία σας, που αφορούσε σε Gallery/Slideshow, ώστε να ενσωματωθεί ο κώδικας σε μία κατάλληλη κλάση.

Συζητήστε τα πλεονεκτήματα μιας τέτοιας προσέγγισης.

```js
class Gallery {
  constructor(element, images, interval) {
    ...
  }

  ...
}

```

---
template: list

### Χρήσιμα links

- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) class - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
- ![mozilla.org](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Classes - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- ![javascript.info](https://www.google.com/s2/favicons?domain=javascript.info) Class basic syntax https://javascript.info/class
- ![w3schools.com](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Classes https://www.w3schools.com/js/js_classes.asp
- ![caniuse.com](https://www.google.com/s2/favicons?domain_url=https://caniuse.com) Can I use... Support tables for HTML5, CSS3, etc https://caniuse.com/es6-class

---
template: list

### Extra info

- ![babeljs.io](https://www.google.com/s2/favicons?domain=babeljs.io) Babel · The compiler for next generation JavaScript https://babeljs.io/repl
- ![stackoverflow.com](https://www.google.com/s2/favicons?domain=stackoverflow.com) iife - What is the (function() { } )() construct in JavaScript? - Stack Overflow https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

---
template: section

## Thank You!
