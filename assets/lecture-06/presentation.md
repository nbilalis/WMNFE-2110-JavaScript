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

# JavaScript #6

### Events

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Accessing DOM Elements
- Browser events
  - Mouse events
  - Key events
  - Form elements events
  - Document events
- Event registration
  - `this` & `event.target`
- Event methods

---
template: section

## Accessing DOM Elements

---
layout: true
template: chapter

### Accessing DOM Elements

---

#### `getElementById()`

Η μέθοδος `getElementById()` επιστρέφει ένα αντικείμενο που αντιστοιχεί στο στοιχείο εκείνο με το δεδομένο `id`.

Μιας και τα `ids` των στοιχείων οφείλουν να είναι μοναδικά, είναι ένα γρήγορος τρόπος να αποκτήσουμε πρόσβαση σε συγκεκριμένο στοιχείο του `DOM`.

```js
let element = document.getElementById(id);

```

---

#### `getElementsByClassName()`

Η μέθοδος `getElementsByClassName()` επιστρέφει μια "live" συλλογή με τα στοιχεία απογόνους (χωρίς τον γονέα) που περιέχουν το συγκεκριμένο όνομα (ή ονόματα) κλάσης.

Η μέθοδος αυτή μπορεί να χρησιμοποιηθεί είτε στο αντικείμενο `document`, είτε σε οποιοδήποτε άλλο αντικείμενο.

```js
let elements = element.getElementsByClassName(names);

```

---

#### `getElementsByTagName()`

Η μέθοδος `getElementsByTagName()` επιστρέφει μια "live" συλλογή με τα στοιχεία απογόνους (χωρίς τον γονέα) που ανήκουν στη συγκεκριμένη ετικέτα (ή ετικέτες).

Η μέθοδος αυτή μπορεί να χρησιμοποιηθεί είτε στο αντικείμενο `document`, είτε σε οποιοδήποτε άλλο αντικείμενο.

```js
let elements = element.getElementsByTagName(tagNames);

```

---

#### `querySelector()`

Η μέθοδος `querySelector()` επιστρέφει το πρώτο στοιχείο απόγονο που ικανοποιεί τον συγκεκριμένο επιλογέα (ή επιλογείς).

Η μέθοδος αυτή μπορεί να χρησιμοποιηθεί είτε στο αντικείμενο `document`, είτε σε οποιοδήποτε άλλο αντικείμενο.

```js
let element = baseElement.querySelector(selectors);

```

---

#### `querySelectorAll()`

Η μέθοδος `querySelector()` επιστρέφει μια συλλογή (_όχι_ live) με τα στοιχεία απογόνους που ικανοποιούν τον συγκεκριμένο επιλογέα (ή επιλογείς).

Η μέθοδος αυτή μπορεί να χρησιμοποιηθεί είτε στο αντικείμενο `document`, είτε σε οποιοδήποτε άλλο αντικείμενο.

```js
let list = parentNode.querySelectorAll(selectors);

```

---
template: section

## Browser Events

---
layout: true
template: chapter

### Browser Events

---

#### Γενικά

Ένα γεγονός (`event`) είναι ένας τρόπος «ειδοποίησης» ότι κάτι «ενδιαφέρον» έχει συμβεί στη σελίδα. Όλα τα στοιχεία μπορούν να παράξουν γεγονότα, αλλά σε μία τυπική σελίδα κάποια συγκεκριμένα γεγονότα είναι και τα πιο συνηθισμένα.

Κάθε γεγονός αναπαριστάται από ένα `event object`, το οποίο περιέχει πληροφορίες για αυτό.

---

#### Τυπικά γεγονότα

- Όταν φορτώσει η σελίδα
- Όταν ο χρήστης κάνει κλικ με το mouse
- Όταν φορτώσει μια εικόνα
- Όταν το mouse βρεθεί πάνω από ένα στοιχείο
- Όταν ο χρήσης πληκτρολογήσει κάτι σε ένα text field
- Όταν υποβληθεί μια φόρμα

---

#### Mouse events

- `click` – όταν κάνουμε κλικ
- `dblclick` – όταν κάνουμε διπλό κλικ
- `mousedown` – όταν ένα κουμπί από το ποντίκι πατηθεί
- `mouseover` – όταν το ποντίκι βρεθεί πάνω από στοιχείο
- `mouseout` – όταν το ποντίκι φύγει πάνω από στοιχείο
- `mousemove` – όταν κινείται το ποντίκι

---

#### Keyboard events

- `keydown` – όταν πατηθεί ένα πλήκτρο
- `keyup` – όταν αφεθεί ένα πλήκτρο

---

#### Form elements events

- `change` – όταν ένα στοιχείο αλλάξει
- `focus` – όταν ένα στοιχείο αποκτήσει την εστίαση
- `blur` – όταν ένα στοιχείο χάσει την εστίαση
- `submit` – όταν υποβληθεί μία φόρμα

---

#### Document events

- `DOMContentLoaded`
  - όταν η `HTML` έχει φορτωθεί και αναλυθεί πλήρως
- `load`
  - όταν η σελίδα (μαζί με όλους τους πόρους της) ή ένα στοιχείο (όπως μια εικόνα) φορτωθεί
- `unload`
  - όταν η σελίδα έχει «εκφορτωθεί» (ή το παράθυρο του προγράμματος περιήγησης έχει κλείσει)

---
template: section

## Event registration

---
layout: true
template: chapter

### Event registration

---

#### HTML-attribute

```html
<body onload="init()">
  <script>
    function init() {
      console.log('Page loaded');
    }

    function click() {
      console.log('Button clicked');
    }
  </script>
  <button onclick="click()">Click me</button>
</body>

```

---
class: long-code

#### DOM property

```html
<body>
  <button id="click-me">Click me</button>
  <script>
    function init() {
      console.log('Page loaded');
    }
    window.onload = init;

    function click() {
      console.log('Button clicked');
    }
    document.getElementById('click-me').onclick = click;
  </script>
</body>

```

---
class: long-code

#### `addEventListener`

```html
<body>
  <button id="click-me">Click me</button>
  <script>
    function init() {
      console.log('Page loaded');
    }
    window.addEventListener('load', init);

    function click() {
      console.log('Button clicked');
    }
    document.getElementById('click-me').addEventListener('click', click);
  </script>
</body>

```

---
class: long-code

#### 1337 h4x0r way

```js
//external script

window.addEventListener('load', () => {
  console.log('Page loaded');
});

document.getElementById('click-me').addEventListener('click', () => {
    console.log('Button clicked');
});

// better yet, in most cases
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
});

```

---

#### `document.getElementById('id')` gives `null`

Ένα συνηθισμένο πρόβλημα, όταν «αναζητούμε» κάποιο στοιχείο του DOM, είναι το εξής:

Η μέθοδος που καλούμε επιστρέφει `null`, όχι επειδή η κλήση μας ήταν λανθασμένη, αλλά επειδή το στοιχείο δεν έχει δημιουργηθεί ακόμα. Αυτό συμβαίνει όταν το συγκεκριμένο κομμάτι κώδικα εκτελείται πριν την ανάλυση (`parsing`) της `HTML`, που περιέχει το εν λόγω στοιχείο.

---

#### `document.getElementById('id')` gives `null`

Για να αντιμετωπιστεί το συγκεκριμένο ζήτημα μπορούμε να φροντίσουμε για ένα από τα παρακάτω:

- Ο κώδικάς μας να εκτελείται στο `load` ή στο `DOMContentLoaded` `event`.
- να ενσωματώσουμε το συγκεκριμένο `script` στο τέλος της ετικέτας `body`.
- να χρησιμοποιήσουμε το `attribute` `defer` της ετικέτας `script`.

---

#### `this` keyword

Με τη λέξη κλειδί `this` μπορούμε, γενικά, να αναφερθούμε στο αντικείμενο «ιδιοκτήτη» (`owner object`).

Στα πλαίσια μιας `function`, η οποία χειρίζεται ένα γεγονός (`event handler/listener`), η λέξη κλειδί `this` αναφέρεται στο στοιχείο στο οποίο αφορά το συγκεκριμένο γεγονός.

_Προσοχή_, όταν χρησιμοποιούμε τη λέξη κλειδί `this` με `arrow functions`!

---

#### `Εvent` & `Εvent.target`

Μία καλύτερη πρακτική, για να αντλήσουμε πληροφορίες για ένα γεγονός, αλλά και για το αντικείμενο στο οποίο αφορά, είναι να κάνουμε χρήση της παραμέτρου τύπου `Event`.

Το αντικείμενο αυτό "περιέχει" πολύ χρήσιμες πληροφορίες για το γεγονός, όπως το στοιχείο στο οποίο αφορά το γεγονός αυτό.

---

#### `this` / `event.target`

```js
const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');

el1.addEventListener('mouseover', function (event) {
  console.log('this', this);
  console.log('event', event);
  console.log('event.target', event.target);
});

el2.addEventListener('mouseover', (event) => {
  console.log('this', this); // Oops
  console.log('event', event);
  console.log('event.target', event.target);
});

```

---
template: section

## Event methods

---
layout: true
template: chapter

### Event methods

---

#### `preventDefault()`

Η μέθοδος `preventDefault()` σταματά την default λειτουργία ενός συμβάντος, για παράδειγμα την αλλαγή σελίδας στο `click` μιας ετικέτας `a` ή στο `submit` μιας φόρμας.

```js
event.preventDefault();

```

---

#### `stopPropagation()`

H μέθοδος `stopPropagation()` σταματά την περαιτέρω διάδοση ενός συμβάντος, για παράδειγμα το `click` εντός στοιχείου στο γονέα του.

```js
event.stopPropagation();

```

---
template: section

## Homework

---
layout: true
template: chapter

---

### Homework

#### Countdown timer

Επισκεφτείτε το αποθετήριο [https://github.com/nbilalis/countdown-timer](https://github.com/nbilalis/countdown-timer) και «κλωνοποιήστε» το.

Ακολουθώντας τις οδηγίες, που βρίσκονται στο `README.md` αλλά και στο αρχείο `index.html`, προσπαθήστε να ολοκληρώσετε τον _timer_ ώστε να είναι λειτουργικός.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Event reference | MDN https://developer.mozilla.org/en-US/docs/Web/Events
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Browser: Document, Events, Interfaces https://javascript.info/ui
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) EventTarget.addEventListener() - Web APIs https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) HTML DOM addEventListener() Method https://www.w3schools.com/jsref/met_element_addeventlistener.asp

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=caniuse.com) Can I use... Support tables for HTML5, CSS3, etc https://caniuse.com/?search=addEventListener
- ![favicon](https://www.google.com/s2/favicons?domain=github.com) Window vs. Document Loading Events https://gist.github.com/jsonberry/0d71007ea188785e1a3d13d2e30d58a5

---
template: section

## Thank You!
