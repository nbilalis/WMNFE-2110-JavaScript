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

# JavaScript #10

### ~~AJAX~~ HTTP Requests / JSON

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- `JSON`
- `GET` / `POST`
- `HTTP` Requests
  - `XMLHTTPRequests`
  - `Fetch` API

---
template: section

## JSON

---
layout: true
template: chapter

### JSON

---

#### `JSON`: JavaScript Object Notation.

Είναι μια κειμενική μορφοποίηση (_text format_), που χρησιμοποιεί ένα συγκεκριμένο τρόπο αναπαράστασης ενός αντικειμένου της `JavaScript`.

Χρησιμοποιείται για την αναπαράσταση, αποθήκευση και ανταλλαγή δεδομένων, όπως παλαιότερα η τεχνολογία `XML`.

```js
const obj = {
  property1: value1,
  property2: value2
};

```

---

#### Παράδειγμα #1

```js
const car = {
  brand: 'Tesla',
  model: 'Model S',
  horsePower: 1020,
  zeroTo60: 2.1
};

```

---

#### Προσπέλαση

Η προσπέλαση στα δεδομένα του αντικειμένου, γίνεται είτε με το <nobr>"_dot notation_"</nobr>, είτε με τη χρήση των "_square brackets_".

```js
const student = {
  firstname: 'Joan',
  lastname: 'Doe',
  age: 21
};

student.age += 1;

console.log(student);
console.log(student.firstname);
console.log(student['lastname']);

```

---

#### Πίνακας αντικειμένων

```js
const characters = [
  { nickname: 'king_crow', fullname: 'Jon Snow' },
  { nickname: 'khaleesi', fullname: 'Daenerys Targaryen' },
  { nickname: 'mercy', fullname: 'Arya Stark' }
];

```

---
template: section

## `GET` / `POST`

---
layout: true
template: chapter

### `GET` vs `POST`

---

#### Περιπτώσεις χρήσης

- Με `GET` λαμβάνουμε (μόνο) δεδομένα από τον server.
- Με `POST` μπορούμε να τροποποιήσουμε δεδομένα στον server.
- `GET` για ασφαλείς/επαναλαμβανόμενες ενέργειες και `POST` για μη ασφαλείς.

---

#### `GET`

- Τα `GET` requests μπορούν να cache-αριστούν
- Τα `GET` requests μπορούν να παραμείνουν στο ιστορικό του browser
- Τα `GET` requests μπορούν να προστεθούν στους σελιδοδείκτες
- Τα `GET` requests μπορούν να διαμοιραστούν
- Τα `GET` requests μπορούν να "hack-αριστούν"

---

#### `POST`

- Όταν έχουμε μεγάλο όγκο δεδομένων (στο request)
- Όταν έχουμε αλληλεπίδραση με τον server όπως στην περίπτωση:
  - ανάρτησης ενός μηνύματος σε forum, ενός comment σε άρθρο
  - υποβολής μίας φόρμας για εγγραφή / αίτηση
  - προσθήκης / επεξεργασίας δεδομένων σε βάση δεδομένων

---
template: section

## `HTTP` Requests

---
layout: true
template: chapter

### `HTTP` Requests

---

#### `XMLHttpRequest`

Είναι εφικτό μέσω κώδικα `JavaScript` να γίνει μία `HTTP` κλήση (<nobr>_HTTP request_</nobr>);

Ναι, και μία (αρκετά παλιά πλέον) τεχνική για το σκοπό αυτό, είναι η χρήση του `XMLHttpRequest`.

```js
const req = new XMLHttpRequest();

req.onreadystatechange = function() {  // callback function
  // Do something meaningful with the response
};
req.open('GET', 'test.html');
req.send();

```

---
class: long-text

#### `readystatechange`

Για να διαχειριστούμε την απάντηση της `HTTP` κλήσης, κάνουμε χρήση του `readystatechange` γεγονότος (ή εναλλακτικά του `load`), που παρέχεται από το `XMLHttpRequest`.

Το γεγονός αυτό "πυροδοτείται" κάθε φορά που η κατάσταση της κλήσης μας αλλάζει.

Σε αντίθεση, το γεγονός `load` "πυροδοτείται" μόνο μία φορά, όταν το αποτέλεσμα της κλήσης είναι έτοιμο.

```js
req.onreadystatechange = ...;

req.addEventListener('readystatechanged', ...);

```

---

#### `readyState`

Το `readystatechange` γεγονός δεν είναι, από μόνο του, αρκετό για να γνωρίζουμε πότε ολοκληρώθηκε η κλήση.

Πρέπει να ελέγξουμε την ιδιότητα `readyState`, η οποία μας δίνει την κατάσταση στην οποία βρίσκεται το _request_.

---

#### `readyState` values

Δηλώνει την κατάσταση του `XMLHttpRequest`.

Οι πιθανές τιμές που μπορεί να πάρει είναι από `0` μέχρι `4`.

- `0`: Δεν έχει ξεκινήσει η επικοινωνία
- `1`: Έγινε σύνδεση με τον _server_
- `2`: Στάλθηκε το αίτημα
- `3`: Το αίτημα επεξεργάζεται
- `4`: Η επεξεργασία ολοκληρώθηκε και η απάντηση είναι έτοιμη

---

#### `readyState` values

**ΠΡΟΣΟΧΗ**: Η callback συνάρτηση του `readystatechange` γεγονότος εκτελείται κάθε φορά που η `readyState` αλλάζει τιμές.

```js
req.addEventListener('readystatechange', () => {
  if (req.readyState === 4) {
    ...
  }
};

```

---

#### `status`

Ως extra έλεγχο, για την κατάσταση της κλήσης, μπορεί να χρησιμοποιηθεί η ιδιότητα `status`, η οποία μας επιστρέφει το ανάλογο `HTTP` status code.

Π.χ.:

- `200`: OK
- `304`: Not modified
- `404`: Νot found
- `500`: Internal Server Error

---

#### `status`

```js
req.addEventListener('readystatechange', () => {
  if (req.readyState === 4 && req.status === 200) {
    ...
  }
});

```

---

#### `responseType`

Αν η απόκριση στην κλήση είναι σε μορφή `JSON`, μπορούμε να το δηλώσουμε ρητά, με τη χρήση του `responseType`.

```js
req.open('GET', '/.../some.json');
req.responseType = 'json';
req.send();

```

---

#### Παράδειγμα

```js
const req = new XMLHttpRequest();

req.open('GET', '/example/json');
req.responseType = 'json';

// the response is {"message": "Hello, world!"}
req.addEventListener('load', () => {
  let data = xhr.response;
  alert(data.message); // Hello, world!
});

req.send();

```

---

#### `fetch`

Ένας πιο σύγχρονος τρόπος για να χειριστούμε network requests μέσω `JavaScript`, είναι το `Fetch` _API_.

Αναπτύσσεται αρκετά χρόνια και έρχεται να λύσει αρκετά από τα προβλήματα του `XMLHTTPRequest`.

Η δομή εκτέλεσης είναι αρκετά διαφορετική και βασίζεται στο `Promise` object.

```js
fetch('/example/json')
  .then(response => response.json())
  .then(json => console.log(json));

```

---

#### `fetch` (`async`/`await`)

```js
let response = await fetch('/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();

alert(result.message);

```

---
template: section

## Classwork

---
layout: true
template: chapter
class: compact

### Classwork

---

#### Classwork #1

Θα δημιουργήσουμε ένα μικρό web app το οποίο θα αντλεί στοιχεία (σε μορφοποίηση `JSON`) από ένα _public free API_, όπως αυτό στη διεύθυνση _http://swapi.dev/_.

Τα αποτελέσματα θα εμφανίζονται μέσα στη σελίδα (π.χ. σε ένα `ul` στοιχείο) και με το πάτημα ανάλογων κουμπιών, θα μπορούμε να "πλοηγηθούμε" σε αυτά, βλέποντας _10_ αποτελέσματα τη φορά.

---

#### Classwork #2

Θα δημιουργήσουμε ένα μικρό web app το οποίο θα προσωμοιώνει τη λειτουργία ένος _SPA_ (<nobr>_Single Page Application_</nobr>) _framework_, σε πολύ αδρές γραμμές.

Συγκεκριμένα, θα "αναχαιτίζει" το _click_ _event_ στα _link_ μιας σελίδας και θα ανακτά τη σελίδα του συνδέσμου μέσω του `Fetch` _API_.

Στη συνέχεια θα αντικαθιστά το περιεχόμενο της τρέχουσας σελίδας, με αυτό που ανακτήθηκε, ασύγχρονα στο παρασκήνιο.

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---
class: long-text

#### Star Wars API

Βελτιώστε τον κώδικα από το _Classwork #1_ (_Example #3 - Star Wars API_) ώστε να λειτουργούν σωστότερα τα κουμπιά «πλοήγησης».

Στα δεδομένα που επιστρέφονται από την κλήση στο _API_, αναφέρεται και το συνολικό πλήθος των αποτελεσμάτων. Με αυτή την πληροφορία, τα κουμπιά για «επόμενα» / «προηγούμενα» αποτελέσματα, θα μπορούσαν να ενεργοποιούνται / απενεργοποιούνται κατάλληλα.

_Σημείωση_: Σε κάθε σελίδα, εμφανίζονται `10` αποτελέσματα. `80` εγγραφές «χρειάζονται» `8` σελίδες, ενώ `82` εγγραφές «χρειάζονται» `9` σελίδες, για να εμφανιστούν όλες.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JSON Introduction https://www.w3schools.com/js/js_json_intro.asp
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Working with JSON - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) AJAX Introduction https://www.w3schools.com/js/js_ajax_intro.asp
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) XMLHttpRequest https://javascript.info/xmlhttprequest
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Ajax - Getting Started - Developer guides | MDN https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Fetch API - Web APIs | MDN https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) HTTP response status codes - HTTP | MDN https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- ![favicon](https://www.google.com/s2/favicons?domain=www.infoworld.com) What is JSON? A better format for data exchange | InfoWorld https://www.infoworld.com/article/3222851/what-is-json-a-better-format-for-data-exchange.html
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Making asynchronous programming easier with async and await - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) SPA (Single-page application) - MDN Web Docs Glossary: Definitions of Web-related terms | MDN https://developer.mozilla.org/en-US/docs/Glossary/SPA
- ![favicon](https://www.google.com/s2/favicons?domain_url=https://blog.logrocket.com) How to make HTTP requests with Axios - LogRocket Blog https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#new_tab
- ![favicon](https://www.google.com/s2/favicons?domain_url=https://blog.logrocket.com) Axios vs. fetch(): Which is best for making HTTP requests? - LogRocket Blog https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
- ![favicon](https://www.google.com/s2/favicons?domain=turbo.hotwire.dev) Turbo: The speed of a single-page web application without having to write any JavaScript. https://turbo.hotwire.dev/

---
template: section

## Thank You!
