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

# JavaScript #9

### Regular expressions

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Regular expressions
  - Brackets
  - Ειδικοί χαρακτήρες
  - Quantifiers
  - Anchors
  - Modifiers
  - Μέθοδοι `RegExp`

---
template: section

## Regular expressions

---
layout: true
template: chapter

### Regular expressions

---

#### Intro

Τα `Regular expressions` (`RegExp`) είναι μια σειρά από χαρακτήρες που ορίζουν ένα μοτίβο (`pattern`).

Που μπορούν να χρησιμοποιηθούν τα μοτίβα αυτά;

- Αναζήτηση
- Έλεγχοι
- Αντικατάσταση

---

#### Σύνταξη

Η σύνταξη τους γίνεται με τη χρήση του slash ως εξής: `/pattern/`

Ανάμεσα στα δύο slash βρίσκεται το μοτίβο και μετά το δεξιό slash πιθανόν να υπάρχουν flags που επηρεάζουν την λειτουργία του πρότυπου.

```js
const re = /pattern/flags;

```

Εναλλακτικά, μπορούν να δημιουργηθούν και ως εξής

```js
const re = new RegExp('pattern', 'flags');

```

---

#### Brackets

Ορίζουν ένα εύρος χαρακτήρων

| Expression | Περιγραφή |
|:-:|:- |
| `[abc]` | Οποιοσδήποτε από τους χαρακτήρες `abc` |
| `[^abc]` | Κανένας από τους χαρακτήρες `abc` |
| `[0-9]` | Οποιοδήποτε αριθμητικό ψηφίο |
| `[^0-9]` | Όχι αριθμητικό ψηφίο |
| `(x ǀ y ǀ z)` | Οποιαδήποτε από τις εναλλακτικές `x`, `y`, `z` |

---

#### Ειδικοί χαρακτήρες

| Metacharacter | Περιγραφή |
|:-:|:- |
| `\n` | Χαρακτήρας νέας γραμμής |
| `\r` | Χαρακτήρας επιστροφής |
| `.` | Χαρακτήρας εκτός των `\n`, `\r` |
| `\w` `\W` | Χαρακτήρας λέξης ή μη |
| `\d` `\D` | Αριθμητικό ψηφίο ή μη |
| `\s` `\S` | "Κενός" χαρακτήρας ή μη |

---

#### Ειδικοί χαρακτήρες

`\w` ⇔ `[a-zA-Z0-9_]`

`\W` ⇔ `[^a-zA-Z0-9_]`

`\d` ⇔ `[0-9]`

`\D` ⇔ `[^0-9]`

`\s` ↭ `[\r\n \t]`

`\S` ↭ `[^\r\n \t]`

---

#### Quantifiers

| Quantifier | Περιγραφή |
|:-:|:- |
| `n+` | Τουλάχιστον μια φορά |
| `n*` | Από 0 έως "άπειρες" φορές |
| `n?` | 0 ή 1 φορές |
| `n{X}` | Ακριβώς X φορές |
| `n{X,Y}` | Από X έως Y φορές |
| `n{X,}` | Από X έως "άπειρες" φορές |

---

#### Anchors

| Anchor | Περιγραφή |
|:-:|:- |
| `^n` | Στην αρχή |
| `n$` | Στο τέλος |

---

#### Modifiers

Αλλάζουν τη συμπεριφορά ενός `Regex`

| Modifier | Περιγραφή |
|:-:|:- |
| `g` | Καθολικό ταίριασμα (global match) |
| `i` | Case-insensitive ταίριασμα |
| `m` | Multiline ταίριασμα |

---

#### Μέθοδοι `RegExp`

| Μέθοδος | Περιγραφή |
|:- |:- |
| `exec()` | Επιστρέφει το πρώτο ταίριασμα, αν υπάρχει |
| `test()` | Ελέγχει για ταίριασμα. Επιστρέφει `true` ή `false` |

---

#### Μέθοδοι `RegExp`

Μία τελευταία (εξαιρετικά χρήσιμη) μέθοδος, που αφορά στα `RegExp`, αλλά ανήκει στο αντικείμενο `String`. Επιστρέφει όλα τα ταιριάσματα ενός `RegExp` σε πίνακα, αρκεί να συμπεριληφθεί o modifier `g`

```js
str.match(/regex/g)

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
class: extra-long-text

#### Classwork #1

Δημιουργήστε μία φόρμα η οποία θα περιέχει τα εξής πεδία:

- Όνομα
- Ηλικία
- E-mail

Εφαρμόστε ελέγχους εγκυρότητας στο `submit` event της φόρμας, με την χρήση των `isNaN()`, `indexOf()` και `length`, και σε περίπτωση λάθους εμφανίστε κατάλληλα μηνύματα στον χρήστη.

Π.χ στο `console` ή συγκεντρωτικά σε κάποιο `div`

```html
<div id="error_messages"></div>

```

---
class: extra-long-text

#### Classwork #2

Δημιουργήστε ένα `RegExp` που να ελέγχει μια διεύθυνση email. Το μοτίβο πρέπει να υλοποιεί τους εξής κανόνες:

- Το πρώτο κομμάτι της διεύθυνσης περιέχει μόνο λατινικούς χαρακτήρες ή το χαρακτήρα '`.`'
- Ακολουθεί ο χαρακτήρας '`@`'
- Ακολουθεί το domain, που απαρτίζεται μόνο από λατινικούς χαρακτήρες ή νούμερα
- Ακολουθεί ο χαρακτήρας '`.`'
- Ακολουθεί το top-level domain που απαρτίζεται μόνο από λατινικούς χαρακτήρες, μήκους 2 έως 10

_ΣΗΜ:_ Το παραπάνω `RegExp` δεν αποτελεί πλήρη κανόνα, για τον έλεγχο μιας οποιαδήποτε διεύθυνσης e-mail.

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Methods of RegExp and String https://javascript.info/regexp-methods
- ![favicon](https://www.google.com/s2/favicons?domain=eloquentjavascript.net) Regular expressions :: Eloquent JavaScript https://eloquentjavascript.net/09_regexp.html
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Regular expressions - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) RegExp - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript RegExp Reference https://www.w3schools.com/jsref/jsref_obj_regexp.asp

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=regexr.com) RegExr: Learn, Build, & Test RegEx https://regexr.com/
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Client-side form validation - Learn web development | MDN https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- ![favicon](https://www.google.com/s2/favicons?domain=stackoverflow.com) regex - How to validate an email address using a regular expression? - Stack Overflow https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
- ![favicon](https://www.google.com/s2/favicons?domain=simple.wikipedia.org) ASCII - Simple English Wikipedia, the free encyclopedia https://simple.wikipedia.org/wiki/ASCII

---
template: section

## Thank You!
