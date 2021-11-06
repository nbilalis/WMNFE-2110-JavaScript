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

# JavaScript #2

### Control Statements

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

---

### Περιεχόμενα

- Εντολή `if`
  - Απλή επιλογή
  - Σύνθετη επιλογή
  - Πολλαπλή Επιλογή
- Συγκριτικοί τελεστές
- Λογικοί τελεστές
  - Πίνακας αληθείας
- Εντολή `switch`
  - Eντολή `break`
- Τριαδικός τελεστής (ternary operator)

---
layout: true
template: chapter

---

### Εντολή `if`

Η εντολή `if` ελέγχει μία συνθήκη και, αν η συνθήκη είναι αληθής (ισχύει), εκτελεί κάποιο τμήμα κώδικα.

![if-else](https://javascript.info/task/check-standard/ifelse_task2@2x.png)

---

### Εντολή `if`

#### Σύνταξη

```js
if (condition) {
  statement(s)
} else if (condition) {
  statement(s)
} ... {
  ...
} else {
  statement(s)
}

```

---

### Απλή επιλογή

#### Παράδειγμα

```js
if (userName == 'Bob') {
  alert('Hello Bob');
}

```

Ο κώδικας ελέγχει αν η μεταβλητή `userName` έχει την τιμή _'Bob'_. Εάν ναι, τότε εμφανίζει το μήνυμα _«Hello Bob»_ σε `alert`.

Σε κάθε άλλη περίπτωση δεν θα κάνει τίποτε.

---

### Σύνθετη επιλογή

#### Παράδειγμα

```js
// if - else

if (userName == 'Bob') {
  alert('Hello Bob');
} else {
  // Notice the use of single and double quotes
  alert("I don't know you!");
}
```

Ο κώδικας ελέγχει αν η μεταβλητή `userName` έχει την τιμή _'Bob'_. Εάν ναι, τότε εμφανίζει το μήνυμα _«Hello Bob»_ σε `alert`.

Σε κάθε άλλη περίπτωση θα εμφανίσει το μήνυμα _«I don't know you!»_.

---

### Πολλαπλή επιλογή

#### Παράδειγμα

```js
// if - else if - <else>

if (userName == 'Bob') {
  alert('Hello Bob');
} else if (userName == 'Bill') {
  alert('Bill is that you?');
} else {
  alert('Who are you???');
}
```

---

### Πολλαπλή επιλογή

#### Λειτουργία

- Ο κώδικας ελέγχει αν η μεταβλητή `userName` έχει την τιμή _'Bob'_. Εάν ναι, τότε εμφανίζει το μήνυμα _«Hello Bob»_ σε `alert`.
- Αν το `userName` είναι _«Bill»_ τότε εμφανίζει το μήνυμα <br>
  _«Bill is that you?»_.
- Σε κάθε άλλη περίπτωση θα εμφανίσει το μήνυμα <br>
  _«Who are you???»_.

---
template: section

## Λογικές εκφράσεις

---

### Λογικές εκφράσεις

#### Συγκριτικοί τελεστές

| Τελεστής | Λειτουργία       | Παράδειγμα |
|:--------:|------------------|:----------:|
| `==`     | Ισότητα          | `X == Y`   |
| `!=`     | Ανισότητα        | `X != Y`   |
| `<`      | Μικρότερο από    | `X < Y`    |
| `>`      | Μεγαλύτερο από   | `X > Y`    |
| `<=`     | Μικρότερο ή ίσο  | `X <= Y`   |
| `>=`     | Μεγαλύτερο ή ίσο | `X >= Y`   |

---

### Λογικές εκφράσεις

#### Συγκριτικοί τελεστές (strict)

| Τελεστής | Λειτουργία | Χρήση |
|:--------:|------------|-------|
| `===` | Ισότητα | `X === Y` |
| `!==` | Ανισότητα | `X !== Y` |

- Οι τελεστές αυτοί ελέγχουν **και** τους τύπους των δεδομένων προς σύγκριση.
- **Πρέπει** να προτιμώνται έναντι των προηγούμενων.

---

### Classwork

#### Classwork #1

Φτιάξτε ένα script που θα αναγνωρίζει τον βαθμό ενός μαθητή. Στην περίπτωση που ο βαθμός είναι:

- μικρότερος από 10 να εμφανίζεται μήνυμα _«Sorry»_
- μικρότερος ή ίσος 15 να εμφανίσει το μήνυμα _«Fair Enough»_
- από 16 μέχρι 20 να εμφανίζει _«Well Done»_
- Σε όλες τις άλλες περιπτώσεις να εμφανίζει το μήνυμα <br>
  _«Enter number 1-20»_

---

### Λογικές εκφράσεις

#### Σύνθετες συνθήκες

Στην εντολή `if` είναι αρκετές φορές αναγκαίο να συνδυάσουμε 2 ή περισσότερες συνθήκες ώστε να επιτύχουμε την επιθυμητή **σύνθετη** συνθήκη απόφασης.

Σε αυτή την περίπτωση γίνεται χρήση των _λογικών τελεστών_.

---

### Λογικές εκφράσεις

#### Λογικοί τελεστές

| Τελεστής | Λειτουργία | Χρήση    |
|:--------:|:----------:|:--------:|
| `&&`     | AND        | `X && Y` |
| `‖`       | OR         | `X ‖ Y`  |
| `!`      | NOT        | `!X`     |

- `AND` ⇔ Πρέπει να ισχύουν και οι δύο συνθήκες
- `OR` ⇔ Πρέπει να ισχύει τουλάχιστον ή μία συνθήκη
- `NOT` ⇔ Λογική άρνηση - Δεν πρέπει να ισχύει η συνθήκη

---

### Λογικές εκφράσεις

#### Παράδειγμα

```js
if (age < 15 && height > 2) {
  alert('You are very tall for your age');
}

if (age < 17 || age > 74) {
  alert('Are you allowed to drive?');
}

```

---

### Λογικοί τελεστές

#### Εμφωλευμένες εντολές `if`

```js
if (grade > 0) {
  if (grade <= 20) {
    alert('The grade you entered is correct');
  }
}

// Ισοδύναμα

if (grade > 0 && grade <= 20) {
  alert('The grade you entered is correct');
}

```

---

### Λογικοί τελεστές

#### Εμφωλευμένες εντολές `if`

```js
if (grade <= 0) {
  alert('The grade you entered is incorrect!');
}

if (grade > 20) {
  alert('The grade you entered is incorrect!');
}

// Ισοδύναμα

if (grade <= 0 || grade > 20) {
  alert('The grade you entered is incorrect!');
}

```

---

### Λογικοί τελεστές

#### Συμπληρωματικές εκφράσεις

```js
!(x > 0)              <=>   x <= 0

!(x === 0)            <=>   x !== 0

!(x > 0 && x <= 20)   <=>   x <= 0 || x > 20

```

```js
x > 0   <=>   x >= 1  // Πότε ισχύει;

```

---

### Λογικοί τελεστές

#### Πίνακας Αληθείας (Truth Table)

| Condition A | Condition B | A && B  | A ‖ B    | !A      |
|:-----------:|:-----------:|:-------:|:-------:|:-------:|
| `true`      | `true`      | `true`  | `true`  | `false` |
| `true`      | `false`     | `false` | `true`  | `false` |
| `false`     | `true`      | `false` | `true`  | `true`  |
| `false`     | `false`     | `false` | `false` | `true`  |

---

### Εντολή `switch`

Η εντολή `switch`:

- μπορεί να αντικαταστήσει μια `if` με πολλαπλές επιλογές.
- δεν μπορεί να αντικαταστήσει την `if` σε όλες τις περιπτώσεις.
- είναι ένας πιο εκφραστικός τρόπος να εξετάσεις την τιμή μιας μεταβλητής (ή μιας έκφρασης) και να πράξεις ανάλογα.

---

### Εντολή `switch`

#### Σύνταξη

```js
switch (variable) {
  case value_1:
    ...
    break;
  case value_2:
    ...
    break;
  ...
  default:
    ...
    break;
}
```

---
layout: true
template: chapter

---

### Εντολή `break`

#### Λειτουργία

- Όταν εκτελείται μια εντολή `break` τερματίζεται η εκτέλεση της εντολή `switch`. Αυτό θα σταματήσει τον έλεγχο και την εκτέλεση των επόμενων "περιπτώσεων".
- Όταν γίνει ταύτιση με κάποια "περίπτωση" και εκτελεστούν οι εντολές, _πρέπει_ να έπεται ένα `break`.
- Αν δεν υπάρχει `break`, ο έλεγχος θα συνεχίσει και με τους επόμενους ελέγχους. _Κάποιες_ φορές αυτό είναι επιθυμητό, όταν έχουμε "περιπτώσεις" με κοινό κώδικα.
- Δεν είναι απαραίτητο να υπάρχει η εντολή `break` στην τελευταία "περίπτωση".

---

### Classwork

#### Classwork #2

Φτιάξτε ένα script που να ζητά από το χρήστη τη χώρα διαμονής και να εμφανίζει το αντίστοιχο νόμισμα, σύμφωνα με τον εξής πίνακα:

| Χώρα | Νόμισμα |
|------|---------|
| China | Chinese yuan |
| Greece | Euro |
| UK | British pound |
| USA | US dollar |
| Other | Ν/Α |

---

### Τριαδικός τελεστής

#### Λειτουργία

- Ο τελεστής `?:` (ternary operator) επιτρέπει την εκτέλεση μίας από δύο ενέργειες, σύμφωνα με την τιμή μίας έκφρασης και η σύνταξή του είναι:

```js
expression ? statement1 : statement2;
```

- Σε μία εντολή με τον τελεστή `?:` αν η έκφραση `expression` είναι αληθής, τότε θα εκτελεστεί η έκφραση που ακολουθεί το ερωτηματικό '`?`'.
- Διαφορετικά, θα εκτελεστεί η έκφραση που ακολουθεί την άνω-κάτω τελεία '`:`'.

---

### Τριαδικός τελεστής

#### Λειτουργία

- Η έκφραση μετά την άνω-κάτω τελεία `:` μπορεί να αντικατασταθεί από άλλη έκφραση που χρησιμοποιεί τον τελεστή `?:`

```js
expression1 ?
  statement1 :
  expression2 ?
    statement2 :
    statement3
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

Δημιουργήστε ένα script (μέσα σε μια `HTML` σελίδα) που:

1. Ζητάει από το χρήστη να εισάγει `username` και `password`.
1. Ελέγχει αν το `username` ισούται με την τιμή `admin` και το `password` με την τιμή `1234`.
    1. Αν ικανοποιούνται και οι δύο συνθήκες, εμφανίζει το μήνυμα "Welcome Admin!"  (μέσα στο σώμα της σελίδας).
    1. Στην αντίθετη περίπτωση εμφανίζει `alert` με το μήνυμα "Unauthorized access!".

---

#### Homework #2

Δημιουργήστε ένα script (μέσα σε μια `HTML` σελίδα) που:

1. Ρωτά το χρήστη αν είναι παντρεμένος, με χρήση της `confirm`.
1. Ρωτά για τον αριθμό των παιδιών που έχει (είτε είναι παντρεμένος είτε όχι)
1. Με χρήση της εντολής `switch`, τον κατατάσσει σε μια από τις κατηγορίες: _"Χωρίς παιδιά"_, _"Με ένα παιδί"_, _"Με δύο παιδιά"_, _"Τρίτεκνος"_ ή _"Πολύτεκνος"_ (για 4+ παιδιά).
1. Βάσει των δύο παραπάνω, εμφανίζει ένα μήνυμα της μορφής _"Ανύπαντρος & Με ένα παιδί"_ ή _"Παντρεμένος & Τρίτεκνος"_ κ.λπ.

---

#### Homework #3

Δημιουργείστε ένα script (μέσα σε μια `HTML` σελίδα) που:

1. Ζητάει από το χρήστη το ετήσιο εισόδημά του.
1. Τον ρωτά αν είναι άνεργος.
1. Υπολογίζει το φόρο που του αναλογεί, βάσει του παρακάτω πίνακα, και εμφανίζει το αποτέλεσμα (με `alert`) ως εξής _"Ο φόρος που αναλογεί στο εισόδημα ... είναι ..."_ ή _"Δε σας αναλογεί φόρος"_.

_Extra_: Ζητήστε από το χρήστη το ποσό που μάζεψε από αποδείξεις και αφαιρέστε το _10%_ αυτού, από το φόρο που του αναλογεί.

---

#### Homework #3 (cont.)

| Εισόδημα | Φόρος |
|:---------|------:|
| Άνεργος | Δεν αναλογεί φόρος |
| Μέχρι 10.000€ | 5% |
| Από 10.001€ μέχρι και 25.000€ | 15% |
| Από 25.001€ μέχρι και 40.000€ | 25% |
| Πάνω από 40.000€ | 40% |

---
template: list

### Χρήσιμα links

- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Comparisons https://javascript.info/comparison
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Logical operators https://javascript.info/logical-operators
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Conditional branching: if, '?' https://javascript.info/ifelse
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) The "switch" statement https://javascript.info/switch
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript if else else if https://www.w3schools.com/js/js_if_else.asp
- ![favicon](https://www.google.com/s2/favicons?domain=w3schools.com) JavaScript Switch Statement https://www.w3schools.com/js/js_switch.asp

---
template: list

### Extra info

- ![favicon](https://www.google.com/s2/favicons?domain=sitepoint.com) Truthy and Falsy: When All is Not Equal in JavaScript - SitePoint https://www.sitepoint.com/javascript-truthy-falsy/
- ![favicon](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Equality comparisons and sameness - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
- ![favicon](https://www.google.com/s2/favicons?domain=github.io) JS Comparison Table https://dorey.github.io/JavaScript-Equality-Table/
- ![favicon](https://www.google.com/s2/favicons?domain=javascript.info) Nullish coalescing operator '??' https://javascript.info/nullish-coalescing-operator

---
template: section

## Thank You!
