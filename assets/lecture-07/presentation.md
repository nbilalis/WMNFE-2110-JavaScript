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

# JavaScript #7

### Forms

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Form elements
  - Accessing forms / elements
  - Text/Password fields
  - Checkboxes
  - Radio buttons
  - Buttons
- Simple checks / validation
- Useful Events
  - `change`
  - `blur` / `focus`
  - `submit`

---
template: section

## Form elements

---
layout: true
template: chapter

### Form elements

---

#### Accessing forms

There is a special `HTMLCollection` just for `HTMLFormElement` items

```js
document.theForm;                   // by 'name'
document.forms.theForm;             // by 'id' or 'name'
document.forms[0];                  // by index

// When the name has no valid characters
document.forms['the-form']          // by 'id' or 'name'

// The following is still valid
document.getElementById('theForm'); // by 'id'

```

---

#### Accessing form elements

```js
const theForm = document.theForm;

theForm.elements.firstName;         // by 'id' or 'name'
theForm.firstName;                  // by 'id' or 'name'

// When the name has no valid characters
theForm.elements['first-name'];     // by 'id' or 'name'

// or maybe by
document.forms['the-form']['first-name'];

```

---
class: long-code

#### Text/Password fields

```html
<form id="login-form" name="login-form">
  <label for="username">User name:</label>
  <input type="text" id="username" name="username">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
</form>

```

---
class: long-code

#### Text/Password fields

Getting/setting the value from/to a text field

```js
const username = document.forms['login-form'].elements['username'];
console.log(username.value);

username.value = '';
console.log(username.value);

```

---
class: extra-long-code

#### Radio Buttons

```html
<form id="genders" name="genders">
  <input type="radio" id="gender-male" name="gender" value="male" checked>
  <label for="gender-male">Male</label>
  <input type="radio" id="gender-female" name="gender" value="female">
  <label for="gender-female">Female</label>
  <input type="radio" id="gender-other" name="gender" value="other">
  <label for="gender-other">Other</label>
</form>

```

---

#### Radio Buttons

Getting the value of the selected radio button

```js
const other = document.forms.genders.elements['gender-other'];
console.log(other.checked);
other.checked = true;

const gender = document.forms.genders.elements['gender'];
console.log(gender);  // RadioNodeList
console.log(gender.value);

```

---
class: extra-long-code

#### Checkboxes

```html
<form id="hobbies" name="hobbies">
  <input type="checkbox" id="basketball" name="sports" value="basketball">
  <label for="basketball">Basketball</label>
  <input type="checkbox" id="football" name="sports" value="football">
  <label for="football">Football</label>

  <input type="checkbox" id="consent" name="consent" value="consent">
  <label for="consent">Consent</label>
</form>

```

---
class: extra-long-code

#### Checkboxes

Getting the values of the selected checkboxes

```js
const form = document.forms['hobbies'];
console.log(form.elements['sports']);       // RadioNodeList
console.log(form.elements['sports'].value);

// ES6
const values = Array
  .from(document.querySelectorAll('input[name="sports"][type="checkbox"]'))
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => checkbox.value);

console.log(values);

console.log(form.elements['consent'].value);
console.log(form.elements['consent'].checked);

```

---

#### Buttons

```html
<form>
  <input type="button" value="Click">

  <button type="button">Click</button>
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>

```

---
template: section

## Simple checks / validation

---
layout: true
template: chapter

### Simple checks / validation

---

#### Checking for empty

```js
const userName = document.getElementById('user-name');

if (userName.value === "") {
  alert('User name missing');
}

// Better yet

if (userName.value.trim().length === 0) {
  alert('User name missing');
}

```

---

#### Checking for number

```js
const age = document.getElementById('age');

if (isNaN(age.value)) {
  alert('Age missing');
}

```

---

#### Checking for email (trivial)

```js
const email = document.getElementById('email');

if (email.value.trim().length === 0) {
  alert('Email missing');
} else if (email.value.indexOf('@') < 0) {
  alert('Invalid email address');
}

```

---
template: section

## Useful Events

---
layout: true
template: chapter

### Useful Events

---

#### on `change`

```js
const age = document.getElementById('age');

function checkAge(event) {
  const el = event.target;

  if (isNaN(el.value)) {
    alert('Age missing');
  }
}
age.addEventListener('change', checkAge);

```

---

#### on `blur`

```js
const email = document.getElementById('email');

function checkEmail(event) {
  const el = event.target;

  if (el.value === "") {
    alert('Email missing');
  } else if (el.value.indexOf('@') < 0) {
    alert('Wrong email value');
  }
}
email.addEventListener('blur', checkEmail);

```

---

#### on `focus`

```js
const els = document.querySelectorAll('input[type="text"]');

els.forEach((el) => {   // or with a for ... of etc.
  el.addEventListener('focus', (event) => {
    event.target.classList.remove('error');
  });
});

```

---

#### on `submit`

```html
<form name="theForm">
  <fieldset>
    <legend>Personal information:</legend>
    <label for="">First name:</label>
    <input type="text" name="firstname" value="Mickey">
    <label for="">Last name:</label>
    <input type="text" name="lastname" value="Mouse">
    <input type="submit" value="Submit">
  </fieldset>
</form>

```

---
class: long-code

#### on `submit`

```js
document.theForm.addEventListener('submit', (event) => {
  const form = event.target;

  const firstname = form.elements["firstname"];
  const lastname = form.elements["lastname"];

  if (firstname.value.trim().length === 0) {
    firstname.classList.add('error');
    event.preventDefault();
    return false;
  }

  if (lastname.value.trim().length === 0) {
    lastname.classList.add('error');
    event.preventDefault();
    return false;
  }
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

### Homework

---

#### Todos list

1. Ανοίξτε το app σε [αυτή τη διεύθυνση](https://codesandbox.io/s/todo-list-etyhe).
1. Συμπληρώστε τον κώδικα, σύμφωνα με τις οδηγίες, ώστε η εφαρμογή να είναι λειτουργική.
1. _Προαιρετικά_, προσθέστε ένα κουμπί & τον απαραίτητο συνοδευτικό κώδικα, για τον καθαρισμό της λίστας.<br>
  Το κουμπί αυτό θα χρειαστεί να καλεί την μέθοδο <nobr>`ul.textContent = '';`</nobr>.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Web forms — Working with user data - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/Forms
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Forms, controls https://javascript.info/forms-controls
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Event.preventDefault() - Web APIs | MDN https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Event.stopPropagation() - Web APIs | MDN https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Form Validation https://www.w3schools.com/js/js_validation.asp
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Client-side form validation - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- ![favicon](https://www.google.com/s2/favicons?domain=the-art-of-web.com) HTML5 Form Validation Examples < HTML | The Art of Web https://www.the-art-of-web.com/html/html5-form-validation/

---
template: section

## Thank You!
