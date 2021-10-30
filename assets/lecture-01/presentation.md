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

## WMNFE-2110 | FRONT-END DEVELOPMENT

# JavaScript #1

### Introduction

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Γλώσσες Προγραμματισμού
  - Συμβολικές Γλώσσες
  - Γλώσσες Υψηλού Επιπέδου
  - Μεταγλώττιση
  - Γλώσσες Σεναρίων
- JavaScript
  - Βασική Σύνταξη
  - Τύποι Δεδομένων
  - Μεταβλητές/Σταθερές
  - JS & HTML

---
template: section

## Γλώσσες Προγραμματισμού

---
layout: true
template: chapter

### Γλώσσες Προγραμ/σμού

---

#### Συμβολικές Γλώσσες (Assembly)

Μια συμβολική γλώσσα είναι μια χαμηλού επιπέδου γλώσσα προγραμματισμού, δηλαδή μια γλώσσα πολύ κοντά στη γλώσσα μηχανής και στο υλικό του υπολογιστή.

Κάθε συγκεκριμένη αρχιτεκτονική συνόλου εντολών, δηλαδή κάθε οικογένεια επεξεργαστών, έχει τη δική της συμβολική γλώσσα, η οποία δίνεται συνήθως από τον κατασκευαστή της.

---

#### Παράδειγμα Assembly

```assembly
global _start
  section .text
_start:
  ; write(1, message, 13)
  mov eax, 4 ; system call 4 is write
  mov ebx, 1 ; file handle 1 is stdout
  mov ecx, message ; address of string to output
  mov edx, 13 ; number of bytes int 80h
  ; exit(0)
  mov eax, 1 ; system call 1 is exit
  mov ebx, 0 ; we want return code 0 int 80h
message:
  db "Hello, World", 10

```

---

#### Γλώσσες Υψηλού Επιπέδου

Γλώσσα προγραμματισμού που επιτρέπει τη μεταφερσιμότητα ενός προγράμματος από έναν υπολογιστή σε έναν άλλο.

Αποτελείται από εντολές εύκολα κατανοητές στον προγραμματιστή, καθώς θυμίζουν περισσότερο κάποια φυσική γλώσσα.

---

#### Παράδειγμα (`C++`)

```c++
#include <iostream>

using namespace std;

int main()
{
  cout << "Hello World!";
  return 0;
}

```

---

#### Δημοφιλείς γλώσσες

![favicon](assets/lecture-01/languages.png)

---

#### Μεταγλώττιση

- Προεπεξεργαστής (_preprocessor_)
- Μεταγλωττιστής (_compiler_)
- Διερμηνευτής (_interpreter_)
- Συνδέτης (_linker_)
- Βιβλιοθήκες (_library_ files)

---

#### Διαδικασία Μεταγλώττισης

![](assets/lecture-01/compiling.png)

---

#### Γλώσσες Σεναρίων

Μια γλώσσα σεναρίων (_scripting_ / _script language_) είναι μια γλώσσα προγραμματισμού που επιτρέπει τον έλεγχο μιας ή περισσότερων εφαρμογών.

Τα "σενάρια" (_scripts_) είναι διακριτά από τον βασικό κώδικα της εφαρμογής, καθώς γράφονται συνήθως σε διαφορετική γλώσσα και συχνά δημιουργούνται ή τροποποιούνται από τον τελικό χρήστη.

---
template: section

## JavaScript (JS)

---
layout: true
template: chapter

### JavaScript (JS)

---

#### Εισαγωγή

- Η JS δημιουργήθηκε κυρίως για χρήση στο web περιβάλλον (αλληλεπίδραση με _browser_ / `HTML`).
- Δεν έχει από μόνη της δυνατότητες εισόδου/εξόδου.
- Η ύπαρξη μηχανισμών επικοινωνίας με τον έξω κόσμο είναι ευθύνη του περιβάλλοντος που τη φιλοξενεί.

---

#### Βασική Σύνταξη

##### Case Sensitive

- ΠΡΟΣΟΧΗ στα κεφαλαία – πεζά
- Η συνάρτηση `getElementByld` είναι διαφορετική από την `getElementbyiD`
- Η μεταβλητή `myVar` είναι διαφορετική από την μεταβλητή `MyvAr`

---

#### Βασική Σύνταξη

##### Semi Colons (`;`)

- Το ελληνικό ερωτηματικό συμβολίζει το τέλος κάθε δήλωσης / εντολής / πρότασης
- Η `JS` δεν τα χρειάζεται απαραιτήτως
- Με τα `;` μπορούμε να γράψουμε πολλές δηλώσεις στην ίδια σειρά

---

#### Βασική Σύνταξη

##### Κενά / Blanks

- Η `JS` "αγνοεί" τα κενά διαστήματα (_space_ / _tab_ κ.λπ.)
- Χρησιμοποιείστε κενά διαστήματα όπως και _tab_ διαστήματα για έναν πιο ευανάγνωστο κώδικα

---

#### Παράδειγμα

```js
title="SAE"       // ⇔
title="SAE";      // ⇔
title = "SAE"     // ⇔
title = "SAE";


```

---

#### Βασική Σύνταξη

##### Σχόλια / Comments

```js
 // One-line comment

 /*
 Multi-line comment
 */

```

---

#### Τύποι Δεδομένων / Data Types

- `Number` - integers, floats, etc
- `String` - an array of characters i.e words
- `Boolean` - true or false
- `Null` - no value
- `Undefined` - a declared variable but hasn't been given a value
- `Symbol` - a unique value that's not equal to any other value

---

#### `Number`

- Integers / Ακέραιοι:
  - `1`
  - `-12`
  - `53`
- Floats / Αριθμοί κινητής υποδιαστολής:
  - `1.22`
  - `3.14`
  - `-0.4`

---

#### `String`

- Για να περαστεί κείμενο στην `JS` θα πρέπει να χαρακτηριστεί σαν `string` δηλαδή σαν σειρά χαρακτήρων
- Τα κείμενα/strings που θέλουμε να εμφανίζονται θα πρέπει να είναι μέσα σε  `"  "`  ή  `'  '`

---

#### `Boolean`

Δεδομένο τύπου boolean μπορεί να πάρει 2 τιμές:

`true` (`1`) ή `false` (`0`)

Λογικές εκφράσεις χρησιμοποιούνται σε δομές επιλογής και επανάληψης

---

#### Μεταβλητές & Σταθερές / Variables & Constants

- Περιοχές μνήμης για την αποθήκευση τιμών / δεδομένων
- Αν η τιμή αλλάζει κατά τη διάρκεια εκτέλεσης του σεναρίου (`script`) τότε είναι Μεταβλητή (`variable`)
- Αν η τιμή μένει ίδια κατά τη διάρκεια εκτέλεσης του σεναρίου (`script`) τότε είναι Σταθερή (`constant`)

---

#### Μεταβλητές / Variables - Δήλωση & Ανάθεση

- Ορίζουμε νέες μεταβλητές με το `let` (ή και το `var`, αλλά σε συνιστάται πλέον) στην αρχή της πρότασης
- Δεν ορίζουμε τον τύπο της μεταβλητής
- Ο τύπος δίνεται αυτόματα όταν πάρει αρχική τιμή
- Μπορούμε να ορίσουμε όποτε θέλουμε μια μεταβλητή
- Μπορούμε να ορίσουμε & να δώσουμε αρχική τιμή ταυτόχρονα

---

#### Μεταβλητές / Variables – Δήλωση & Ανάθεση

```js
"use strict";

let a = 5, b = 6;

let title;
title = 'SAE';

let found = true;

```

---

#### Σταθερές / Constants – Δήλωση & Ανάθεση

```js
const PI = 3.14;

// προτιμούμε τα κεφαλαία στο όνομα

// αν προσπαθήσουμε να αλλάζουμε τιμή;

```

---

#### Ονομάστε την Μεταβλητή σας!

- Κάθε όνομα πρέπει να είναι μοναδικό
- O πρώτος χαρακτήρας πρέπει να είναι είτε γράμμα, είτε _underscore_ `_`, είτε το σύμβολο δολαρίου `$`
  - Όχι νούμερα ως πρώτος χαρακτήρας.
- Κενά ή άλλα σύμβολα δεν επιτρέπονται
- "Ευαισθησία" στα κεφαλαία / πεζά (_case sensitive_)

---

#### Ονομάστε την Μεταβλητή σας!

```js
numOfStudents     // camelCase
num_of_students   // snake_case

// num-of-students – kebab-case

```

---

#### Τελεστές & Μαθηματικά

| Πράξη | Τελεστής |
|:- |:-:|
| Πρόσθεση | `+` |
| Αφαίρεση | `-` |
| Πολλαπλασιασμός | `*` |
| Διαίρεση | `/` |
| Υπόλοιπο | `%` |
| Ύψωση σε δύναμη | `**` |

---

#### Τελεστές & Μαθηματικά

| Λειτουργία | Συνάρτηση |
|:- |:- |
| Αριθμός _π_ (_3.14_) | `Math.PI` |
| Τετραγωνική ρίζα | `Math.sqrt()` |
| Ύψωση σε δύναμη | `Math.pow()` |

---

#### Εκφράσεις

```js
a = 1 + 3 * 4 + b/4
D = Math.pow(b, 2) – 4*a*c
x1 = (-b + Math.sqrt(D)) / (2 * a)

'1' + '2'   // → '12'
'1' * '2'   // →   2

'Lecture' + ' ' + '#1' = 'Lecture #1'

```

---

#### Μετατροπές Μεταβλητών (και όχι μόνο)

- Εφόσον μετατρέψουμε ένα string σε αριθμό, μπορούμε να εκτελέσουμε μαθηματικές πράξεις με την συγκεκριμένη μεταβλητή
- Η συνάρτηση `parseInt()` μετατρέπει σε `number` (`integer`)
- Η συνάρτηση `parseFloat()` μετατρέπει σε `number` (`float`)

---

#### Μετατροπές Μεταβλητών (και όχι μόνο)

```js
parseInt('2') + parseInt('5')   // →  7
parseInt('€2')                  // →  NaN
parseInt(€2)                    // → σφάλμα

```

---

#### Τελεστής `typeof`


```js
typeof (1 + 2)                          // number
typeof ('1' + '2')                      // string
typeof ('1' * '2')                      // number
typeof (prompt('Enter numeric value:')) // string

```

---

#### `HTML` (HyperText Markup Language)

Tα τρία βασικά δομικά στοιχεία μιας ιστοσελίδας

- `HTML`
- `JS`
- `CSS`

---

#### Παράδειγμα

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello HTML</title>
</head>
<body>
  <p>Hello world</p>
  <script>
    alert('Hello World');
  </script>
</body>
</html>

```

---

#### Συνάρτηση `alert()`

```html
<!-- Εμφανίζει alert dialog με το μήνυμά μας -->

<script>
  alert('Hello World of SAE');
</script>

```

---

#### Συνάρτηση `prompt()`

```html
<!--
Εμφανίζει prompt dialog για να εισάγουμε τιμή,
και αποθηκεύει την απάντηση στη μεταβλητή 'name'
Με την 'document.write(…)' μπορούμε να γράψουμε
στο σώμα της σελίδας
-->

<script>
  let name = prompt('What is your name?');
  document.write(name);
</script>

```

---

#### Συνάρτηση `confirm()`

```html
<!--
Εμφανίζει confirm dialog με επιλογές "OK" & "Cancel"
και αποθηκεύει την απάντησή μας στη μεταβλητή 'decision'.
Με την 'console.log(…)' μπορώ να γράψω κάποιο μήνυμα
στην κονσόλα του browser
-->

<script>
  let decision = confirm('Do you agree? ');
  console.log(decision);
</script>

```

---
template: section

## Homework

---
layout: true
template: chapter

### Homework

---

#### Homework #1

Δημιουργήστε μια HTML σελίδα που να:

- Ζητάει την ακτίνα ενός κύκλου
- Υπολογίζει την περίμετρο και το εμβαδόν του κύκλου
- Εμφανίζει στον browser (με χρήση της alert) τα δύο αποτελέσματα

Περίμετρος = `2 · π · R`

Εμβαδόν = `π · R²`

---

#### Homework #2

Δημιουργήστε μια HTML σελίδα που:

- Ζητάει το όνομα και το επίθετο του χρήστη
- Αποθηκεύει το πλήρες όνομα του χρήστη σε μια μεταβλητή
- Εμφανίζει ένα μήνυμα χαιρετισμού (με το όνομα) μέσα στο σώμα της σελίδας

---
template: list

### Χρήσιμα links

- ![](https://www.google.com/s2/favicons?domain=javascript.info) JavaScript Fundamentals https://javascript.info/first-steps
- ![](https://www.google.com/s2/favicons?domain=freestuff.gr) Εισαγωγή στη σύγχρονη JavaScript - freestuff.gr https://freestuff.gr/forums/viewtopic.php?t=21175
- ![](https://www.google.com/s2/favicons?domain=www.w3schools.com) JavaScript Data Types https://www.w3schools.com/js/js_datatypes.asp
- ![](https://www.google.com/s2/favicons?domain=javascript.info) Interaction: alert, prompt, confirm https://javascript.info/alert-prompt-confirm

---
template: list

### Extra info

- ![](https://www.google.com/s2/favicons?domain=www.linkedin.com) JavaScript Essential Training Online Class | LinkedIn Learning, formerly Lynda.com https://www.linkedin.com/learning/javascript-essential-training?replacementOf=javascript-essential-training-2017
- ![](https://www.google.com/s2/favicons?domain=javascript.info) The modern mode, "use strict" https://javascript.info/strict-mode
- ![](https://www.google.com/s2/favicons?domain=javascript.info) Type Conversions https://javascript.info/type-conversions
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Template literals (Template strings) - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

---
template: section

## Thank You!
